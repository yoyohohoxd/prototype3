let color = '#800080';

chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ color });
    console.log('Default background color set to %cblack', `color: ${color}`);
})

chrome.runtime.onMessage.addListener(
    function(message, callback, sendResponse) {
        if (message == "changeColorr"){
            console.log("background changing color")
            chrome.tabs.executeScript({
                code: 'document.body.style.backgroundColor = "orange";'
            });
        }
    }
);
