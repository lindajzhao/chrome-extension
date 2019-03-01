// non-persistent scripts

// Mandatory listener on runtime
chrome.runtime.onInstalled.addListener(function() {
    // Requires 'storage' permission
    chrome.storage.sync.set({color: '#3aa757'}, function() {
        console.log("The color is green.");
    });
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
        chrome.declarativeContent.onPageChanged.addRules([{
            conditions: [new chrome.declarativeContent.PageStateMatcher({
                pageUrl: {hostEquals: 'developer.chrome.com'}
            })],
            actions: [new chrome.declarativeContent.ShowPageAction()]
        }])
    })
});