(function () {
    console.log("Newired Extension injecting config-page script.");

    function setExtensionState(state) {
        const container = document.getElementById("extensionStateContainer");
        container.setAttribute("nw-extension", state)
    }

    function getConfigPath() {
        const elementPath = document.getElementById("nw-path");
        return elementPath.getAttribute("nw-path")
    }

    setExtensionState("installed");
    const extensionStartWatcher = document.getElementById("extensionStartWatcher");
    extensionStartWatcher.click();

    const port = chrome.runtime.connect({ name: "config-page" });
    port.postMessage({ action: "configure", path: getConfigPath() });
    port.onMessage.addListener(function (message) {
        switch (message.action) {
            case "already-configured":
                setExtensionState("already-configured");
                break;
            case "configured":
                setExtensionState("configured");
                break;
            case "not-configured":
                setExtensionState("not-configured");
                break;
            default:
                throw new Error(`Received wrong config page message: ${message.action}.`);
        }
    });
})();
