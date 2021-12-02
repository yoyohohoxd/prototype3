let color = '#3aa757';

chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ color });
    console.log('Default background color set to %cgreen', `color: ${color}`);
})

chrome.runtime.onMessage.addListener(
    function(message, callback) {
        if (message == "changeColor"){
            chrome.tabs.executeScript({
                code: 'console.log("HI")'
            });
        }
    }
);