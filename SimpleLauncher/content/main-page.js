(function () {

    function containsSnippet() {
        return document.getElementById("newired-snippet")
            || document.getElementById("snippet-launcher")
    }

    if (containsSnippet()) {
        return
    }

    /*
     * Responsible to
     * 1. Set following global variables
     *   - window.targetWindow
     *   - window.targetDocument
     *   - window.environment = "browser-snippet"
     *   - window.newiredOptions = { }
     * 2. Load init.js into this scope
     */

    // let's wait for message from background.js
    chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
        switch (message.action) {
            case "load-overlay":
                loadOverlay(message.serverInfo.launcherPathUrl, message.serverInfo.backendUrl, message.serverInfo.urlMap, sendResponse)
                break;
            case "load-collector":
                loadCollector(message.collectorUrl)
                sendResponse()
                break;
        }
        return true
    });

    function loadOverlay(deliveryPath, backendUrl, urlMap, sendResponse) {
        const loaderUrl = deliveryPath + "loader.js"

        fetch(loaderUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Failed to fetch: (${loaderUrl}).`)
                }
                return response.text()
            })
            .then(loaderCode => {

                window.targetWindow = window
                window.targetDocument = document
                window.environment = "browser-webextension"
                window.newiredOptions = {
                    deliveryPath: deliveryPath,
                    backend: backendUrl,
                    launcherVisible: true,
                    profile: "default",
                    urlMap: urlMap
                }
                // init.js passes back deliveryPath extended with version
                // TODO: jiri: deliveryPath has to be split into two parts contentUrl + contentVersion
                window.notifyWebExtension = (notification) => {
                    sendResponse(notification)
                }
                new Function(loaderCode).call()
                window.newired.initialize(window.newiredOptions)
            })
            .catch((e) => {
                sendResponse({ kind: "overlayFailed" })
            })
    }

    function loadCollector(collectorUrl) {
        const collectorScriptUrl = collectorUrl + "/collector.js"
        const collectQuery = collectorUrl + "/collect"

        fetch(collectorScriptUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Failed to fetch: " + collectorScriptUrl)
                }
                return response.text()
            })
            .then(collector => {
                console.log(`Execute Collector in the main-page content script.`);
                const script = `var _nrq = _nrq || []; _nrq.push(['setCollectorUrl', '${collectQuery}']);\n
                    ${collector}`;

                new Function(script).call()
            })
            .catch(error => {
                console.log(`Failed to fetch and execute Newired Collector (collector.js)`, error)
            })
    }
})()
