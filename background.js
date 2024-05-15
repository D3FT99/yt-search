function loadContextMenus() {
    chrome.contextMenus.removeAll(() => {
      chrome.contextMenus.create({
        id: "contextMenu1",
        title: 'Search youtube for "%s"',
        contexts: ["selection"],
      });
    });
  }
  
  loadContextMenus();
  
  chrome.contextMenus.onClicked.addListener((item, tab) => {
    const selectedText = item.selectionText;
    const url = new URL(
      `https://www.youtube.com/results?search_query=` + selectedText
    );
    chrome.tabs.create({
      url: url.href,
      index: tab.index + 1,
    });
  });
  