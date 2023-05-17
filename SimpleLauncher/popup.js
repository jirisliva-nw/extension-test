"use strict";

const defaultUrl = "https://try.newired.com/extensions/default/config.json";

function init() {
    const urlInput = document.getElementById("url-input");

    const getURL = () => {
        const url = urlInput.value.trim() || defaultUrl;
        if (url && !url.startsWith("http")) {
            return `https://${url}`;
        } else {
            return url
        }
    }

    chrome.storage.local.get("NW_extension_config_url", function (result) {
        console.log(`Configured URL from LocalStorage:`, result);
        const storedConfig = result.NW_extension_config_url;
        if (storedConfig && storedConfig.url === defaultUrl) {
            return;
        }
        urlInput.value = storedConfig.url;
    });

    document.getElementById("config-form").addEventListener("submit", () => {
        const url = getURL()
        chrome.runtime.getBackgroundPage(function (backgroundPage) {
            backgroundPage.loadConfiguration(url);
            window.close();
        });
    })
}


window.onload = function () {
    init();
};
