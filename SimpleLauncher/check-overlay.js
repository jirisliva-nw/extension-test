chrome.runtime.sendMessage({
    action: "check-overlay",
    containsOverlay: document.getElementById('snippet-launcher') !== null
        || document.getElementById('newired-snippet') !== null
        || typeof window.newired !== "undefined"

})
