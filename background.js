function search(select) {
    var selectionText = select.selectionText;
    chrome.openTab
}

chrome.contextMenus.create (
    {
        id: '1',
        title: 'Search on youtube \"%s\"',
        contexts: ['selection']
    }
)