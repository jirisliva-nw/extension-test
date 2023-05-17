const configPageTitle = "Newired Extension"; // used to identify config page tab.
const configUrlStorageKey = "NW_extension_config_url";

const defaultConfigUrl = "https://try.newired.com/extensions/default/config.json";
let config = null;

const tabsInfo = {}
const RUNNING_MODE_ISOLATED = "ISOLATED"
const RUNNING_MODE_LEGACY = "LEGACY"

function setTabInfo(tabId, info) {
    tabsInfo[tabId] = info
}

function getTabInfo(tabId) {
    return tabsInfo[tabId]
}

chrome.runtime.onConnect.addListener(function (port) {
    if (port.name === "config-page") {
        port.onMessage.addListener(function (message) {
            console.log("Config page requesting", message);
            if (message.action === "configure") {
                if (!message.path || message.path.trim() === "") {
                    port.postMessage({ action: "not-configured" });
                } else {
                    getConfigUrlFromStorage((storedConfig) => {
                        if (storedConfig && storedConfig.url === message.path) {
                            console.log(`Already configured with URL: ${storedConfig.url}, timestamp: ${storedConfig.timestamp}`);
                            port.postMessage({ action: "already-configured" })
                        } else {
                            port.postMessage({ action: "configured" });
                        }
                        loadConfiguration(message.path);
                    });
                }
            }
        });
    }
});

//
// Listen messages from check-overlay.js and frame-content.js
//
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
        if (isValidRequest(request)) {
            switch (request.action) {
                case "check-overlay":
                    handleCheckOverlay(request.containsOverlay | false, sender)
                    return false
                case "iframe-init":
                    return handleIFrameInit(sender, sendResponse) // true to send the response in async manner.
            }
        }
    }
);

chrome.webNavigation.onCompleted.addListener(function (details) {
    if (details.frameId !== 0 || details.url.startsWith("chrome://") || details.url === "about:blank") {
        return;
    }
    if (details.url && details.url.includes("/extension/config.html")) {
        injectConfigPage(details.tabId);
    } else {
        chrome.tabs.executeScript(details.tabId, {
            file: "check-overlay.js"
        });
    }
});

function handleCheckOverlay(containsOverlay, sender) {
    if (containsOverlay) {
        const logMessage = "Newired Web-Extension: Found configured Snippet or running Overlay => Overlay initialization from Web-Extension stopped.";
        console.log(logMessage)
        chrome.tabs.executeScript(sender.tabId, {
            code: "console.log('" + logMessage + "')"
        })
    } else if (sender.url) {
        getConfigUrlFromStorage((storedConfig) => {
            if (storedConfig) {
                if (configExpired(storedConfig.timestamp)) {
                    console.log(`Stored configuration expired. Going to fetch latest configuration from: ${storedConfig.url}`)
                    loadConfiguration(storedConfig.url)
                        .then(inject.bind(this, sender.tabId, sender.url, storedConfig.url))
                        .catch(error => {
                            console.log(`Unable to fetch configuration.`, error)
                        })

                } else {
                    console.log(`Stored configuration is up-to-date (${storedConfig.url})`)
                    inject(sender.tab.id, sender.url, storedConfig.url);
                }
            } else {
                console.log(`No stored configuration. Going to fetch configuration from default: ${defaultConfigUrl}`)
                inject(sender.tab.id, sender.url, defaultConfigUrl);
            }
        })
    }
}

function waitIf(successCondition, maxTimeout) {
    return new Promise((resolve) => {
        const snapTime = new Date();
        const intervalID = setInterval(function () {
            if (successCondition()) {
                clearInterval(intervalID);
                resolve(true);
            } else if (new Date() - snapTime > maxTimeout) {
                clearInterval(intervalID);
                resolve(false);
            }
        }, 200);
    });
}

function hasTabInfo(tabId) {
    return !!getTabInfo(tabId)
}

function handleIFrameInit(sender, sendResponse) {
    if (sender.tab) {
        // This is to wait for tab info received from initialized overlay and immediate bubble rendering during the page load.
        waitIf(() => hasTabInfo(sender.tab.id), 5000)
            .then((hasTabInfo) => {
                if (hasTabInfo) {
                    const info = getTabInfo(sender.tab.id)
                    if (info.runningMode === RUNNING_MODE_ISOLATED) {
                        sendResponse({ doInit: true, deliveryPath: info.deliveryPath });
                    } else {
                        sendResponse({ doInit: false })
                    }
                } else {
                    // Do the init anyway since tab info might be disposed on global object of this extension.
                    // The deliveryPath is resoled by bubble-frame.
                    sendResponse({ doInit: true })
                }
            })
            .catch(error => {
                if (error) {
                    console.error(error)
                }
                sendResponse({ doInit: false })
            })
        return true // async response.
    }
    console.warn("'iframe-init' message without sender tab. Message ignored.");
    sendResponse({ doInit: false })
    return false // sync response.
}

function isValidRequest(request) {
    return request && request.action
}

function loadConfiguration(configUrl) {
    return new Promise(function (resolve, reject) {
        console.log(`Loading configuration from URL: ${configUrl}`);
        config = null;
        setConfigUrlToStorage(configUrl);
        fetch(configUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Unable to fetch configuration from: ${configUrl}`)
                }
                return response.json()
            })
            .then(newConfig => {
                config = fixURLs(newConfig)
                console.log(`Load configuration with ${config.urls.length} URLs.`)
                resolve()
            })
            .catch(error => {
                reject(error)
            })
    })
}

function fixURLs(config) {
    config.urls = config.urls.map(url => {
        if (url.web.endsWith("/")) {
            url.web = url.web.substring(0, url.web.length - 1);
        }
        url.web = url.web.toLowerCase()
        return url
    })
    return config
}

function getServerInfo(url) {
    if (config == null) {
        return;
    }
    url = url.toLowerCase();
    for (let i = 0; i < config.urls.length; i++) {
        const urlObj = config.urls[i];
        if (url.indexOf(urlObj.web) !== -1) {
            return urlObj;
        }
    }
}

function createScript(script) {
    return `var snippet = document.createElement('script');snippet.innerHTML = "${script}";document.body.appendChild(snippet);`;
}

function injectCollectorSnippet(collectorUrl, tabId) {
    fetch(chrome.runtime.getURL("collector.js"))
        .then(response => {
            if (!response.ok) {
                throw new Error("Unable to get collector.js from extension.")
            }
            return response.text()
        })
        .then(snippetTemplate => {
            const snippet = snippetTemplate
                .replace("{collector_url}", collectorUrl)
                .replace(/(\r\n|\n|\r)/gm, "");
            console.log(`Inject collector-snippet into the tab: ${tabId}`, snippet);
            chrome.tabs.executeScript(tabId, { code: createScript(snippet) });
        })
}

function performInject(tabId, serverInfo) {
    // post message to tabId's content script to load Overlay
    chrome.tabs.sendMessage(tabId, { action: "load-overlay", serverInfo: serverInfo }, function (response) {
        console.log(`Response from loader.js: `, response)
        if (response && response.kind) {
            switch (response.kind) {
                case "overlayFailed":
                    console.log("Use LEGACY loading procedure.")
                    injectLegacySnippet(tabId, serverInfo)
                    setTabInfo(tabId, { runningMode: RUNNING_MODE_LEGACY })
                    break;
                case "overlayInitialized":
                    console.log(`Use loading procedure for Overlay in content-script. (deliveryPath: ${response.deliveryPath}`)
                    setTabInfo(tabId, { runningMode: RUNNING_MODE_ISOLATED, deliveryPath: response.deliveryPath })
                    chrome.tabs.sendMessage(tabId, { action: "load-collector", collectorUrl: serverInfo.collectorUrl })
                    break;
                case "legacyOverlayInitialized":
                    console.log("Legacy content already loaded.")
                    break;
            }
        }
    });
}

function injectLegacySnippet(tabId, serverInfo) {
    fetch(chrome.runtime.getURL("snippet.js"))
        .then(response => {
            if (!response.ok) {
                throw new Error("Unable to get snippet.js from extension.")
            }
            return response.text()
        }).then(snippetTemplate => {
            const snippet = setSnippetVariables(snippetTemplate, serverInfo)
            console.log(`Inject overlay-snippet into the tab: ${tabId}:`, snippet)
            chrome.tabs.executeScript(tabId, { code: createScript(snippet) });

            if (serverInfo.collectorUrl) {
                injectCollectorSnippet(serverInfo.collectorUrl, tabId);
            }
        }
    )
}

function setSnippetVariables(script, serverInfo) {
    const urlMap = JSON.stringify(serverInfo.urlMap || null).replace(/\"/g, "\\\"");
    return script
        .replace("{launcher_path_url}", serverInfo.launcherPathUrl)
        .replace("{backend_url}", serverInfo.backendUrl)
        .replace("{url_map}", urlMap)
        .replace(/(\r\n|\n|\r)/gm, "")
}

function inject(tabId, pageUrl, configUrl) {
    checkPreview(pageUrl, configUrl)
        .then((serverInfo) => {
            console.log("Going to inject loader.js using PREVIEW version:", serverInfo);
            performInject(tabId, serverInfo);
        })
        .catch(() => {
            const serverInfo = getServerInfo(pageUrl);
            if (serverInfo) {
                console.log("Going to inject loader.js using LIVE version:", serverInfo);
                performInject(tabId, serverInfo);
            }
        })
}

/**
 * This function just find out if browser Cookies contains preview value and if Site URL in the value
 * match given URL.
 * Which version is set as preview isn't important here. This is version resolving responsibility of loader.js.
 */
function checkPreview(pageUrl, configUrl) {
    return new Promise(function (resolve, reject) {
        console.log('Checking for preview cookie on domain: ' + configUrl);
        chrome.cookies.get({ url: configUrl, name: 'NW_global_site_preview_version' },
            function (cookie) {
                if (cookie) {
                    try {
                        const preview = JSON.parse(decodeURIComponent(cookie.value));
                        console.log(`Got preview cookie: ${JSON.stringify(preview, null, "  ")}`)

                        const urlMatch = preview.siteUrls.find(siteUrl => {
                            return pageUrl.indexOf(siteUrl) !== -1
                        })

                        if (urlMatch) {
                            console.log(`Preview cookie match page URL: ${pageUrl}`)
                            resolve({
                                launcherPathUrl: preview.contentDeliveryUrl + '/' + preview.siteId + "/",
                                backendUrl: preview.backendUrl
                            });
                        } else {
                            console.log(`Preview cookie does NOT match page URL: ${pageUrl}`)
                            reject();
                        }

                    } catch (error) {
                        console.log(`Error while processing cookie '${cookie.value}`, error);
                        reject(error);
                    }
                } else {
                    console.log(`Preview cookie was not found. URL: ${pageUrl}`);
                    reject();
                }
            });
    })
}

function configExpired(timestamp) {
    return !timestamp || (Date.now() - timestamp > 3600000);
}

function setConfigUrlToStorage(url) {
    const obj = {};
    obj[configUrlStorageKey] = {
        url: url,
        timestamp: Date.now()
    };
    chrome.storage.local.set(obj);
}

function getConfigUrlFromStorage(callback) {
    chrome.storage.local.get(configUrlStorageKey, (result) => {
        const storedConfig = result[configUrlStorageKey];
        if (!storedConfig) {
            console.log("No config URL in storage.");
        }
        callback(storedConfig);
    });
}

function injectConfigPage(tabId) {
    console.log(`Config page being injected with content script "config-page.js".`);
    chrome.tabs.executeScript(tabId, { file: "config-page.js", });
}

function getConfigUrl() {
    return new Promise((resolve, reject) => {
        getConfigUrlFromStorage((storedConfig) => {
            if (storedConfig && storedConfig.url) {
                console.log("Use stored configuration URL:", storedConfig.url);
                resolve(storedConfig.url)
            } else {
                console.log("Use default configuration URL:", defaultConfigUrl);
                resolve(defaultConfigUrl)
            }
        })
    })
}

function start() {

    const u1 = chrome.storage.managed.get("DescriptionUrl");
    // const u1 = managed.get("DescriptionUrl");
    console.log(`u1: ${u1}`);

    chrome.tabs.query({ title: configPageTitle }, function (tabs) {
        if (tabs.length === 0) {
            console.log("Starting with load of configuration.");
            getConfigUrl().then(configUrl => {
                loadConfiguration(configUrl)
            })
        } else {
            const tab = tabs[0];
            console.log(`Starting with config page found in ${tab.active ? "active" : "inactive"} tab.`);
            chrome.tabs.update(tab.id, { highlighted: true, active: true, url: tab.url });
        }
    });
}

start();
