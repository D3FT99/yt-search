function search(select) {
    var selectionText = select.selectionText; 
}

chrome.contextMenus.create (
    {
        id: 'yt1',
        title: 'Search on youtube',
        contexts: ['selection']
    }
)