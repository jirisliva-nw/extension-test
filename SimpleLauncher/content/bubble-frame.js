(function () {

    if (isTopWindow() || containsSnippet()) {
        return
    }

    function isTopWindow() {
        return window === window.top
    }

    function containsSnippet() {
        return document.getElementById("newired-snippet") || document.getElementById("snippet-launcher")
    }

    function isBubbleFrame() {
        return !!document.body && document.body.className === "nw-bubble-frame-body"
    }

    function waitIf(successCondition, maxTimeout) {
        return new Promise((resolve, reject) => {
            const snapTime = new Date();
            const intervalID = setInterval(function () {
                if (successCondition()) {
                    clearInterval(intervalID);
                    resolve();
                } else if (new Date() - snapTime > maxTimeout) {
                    clearInterval(intervalID);
                    reject();
                }
            }, 500);
        });
    }

    // Wait for frame to be loaded and test if it is the newired bubble and the right environment.
    waitIf(() => isBubbleFrame() && window?.newiredRootWindow?.environment === "browser-webextension", 10000)
        .then(() => prepareInit())
        .catch(error => {
            if (error) {
                console.error(error)
            }
        })

    function prepareInit() {

        const bundleURL = getPluginBundleURL()
        if (bundleURL) {
            init(bundleURL)
        } else {
            // After waiting time with check for this frame is bubble and in the right env.
            // it might be that this init part is no longer needed thus the tabInfo can be removed completely.
            chrome.runtime.sendMessage({ action: "iframe-init" }, function (obj) {
                if (obj.doInit) {
                    const bundleURL = getPluginBundleURL(obj.deliveryPath)
                    if (bundleURL) {
                        init(bundleURL)
                    } else {
                        console.error("Unable to initialize bubble frame resources.", obj)
                    }
                }
            })
        }

        function getPluginBundleURL(deliveryPath) {
            if (deliveryPath) {
                return deliveryPath + "plugins.bundle.js"
            } else if (document.body.dataset.pluginsBundlePath) {
                return document.body.dataset.pluginsBundlePath
            } else {
                return window.newired?._internal?.data?.deliveryResource("plugins.bundle.js") || null
            }
        }

        function init(bundleURL) {
            loadPluginsBundle(bundleURL)
        }

        function loadPluginsBundle(bundleURL) {
            fetch(bundleURL)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`Unable to load file: ${bundleURL}.`)
                    }
                    return response.text()
                })
                .then(bundle => {
                    new Function(bundle)();
                })
                .catch(error => {
                    console.warn(`Unable to inject ${bundleURL} into bubble-frame`, error)
                })
        }
    }
})()
