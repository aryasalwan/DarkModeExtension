document.addEventListener('DOMContentLoaded',function(){
    document.getElementById('DarkMode').addEventListener('click', function() {
        console.log("button clicked")
        var enabled;
        chrome.storage.local.get("scriptEnabled", function(result){
            if (result.scriptEnabled !== undefined) {
                // Toggle the existing value
                chrome.storage.local.set({scriptEnabled: !result.scriptEnabled});
            } else {
                // Set to true if it's not defined
                chrome.storage.local.set({scriptEnabled: true});
            }
        })
    });
    });

    // chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//     chrome.scripting.executeScript({
//         target: {tabId: tabs[0].id},
//         files: ['content.js']
//     });
// });  
