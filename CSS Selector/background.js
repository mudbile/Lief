//Add context menu item
chrome.contextMenus.create({
  "id": "grab-selector",
  "title": "Grab CSS Selector",
  "contexts": ["all"],
});


//Add listener to the context menu
//Specifically, pass a click to my menu item to "content.js"
chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId == "grab-selector") {       
        chrome.tabs.executeScript(tab.id, {
            file: "content.js"
        });
    } 
});


