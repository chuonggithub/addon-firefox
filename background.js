/*
Called when the item has been created, or when creation failed due to an error.
We'll just log success/failure here.
*/
browser.contextMenus.create({
  id: "s",
  title: "Xem tư liệu",
  contexts: ["selection"]
});

// The onClicked callback function.
browser.contextMenus.onClicked.addListener((info, tab) => {
	if (info.menuItemId == "s") {
		var inh = info.selectionText;
		var inhex = inh.replace(/\s/g,''); 
		regexp = /^[0-9a-fA-F]+$/;
		if (regexp.test(inhex)) {
			var hex  = inhex.toString();
			var link = '';
			for (var n = 0; n < hex.length; n += 2) {
				link += String.fromCharCode(parseInt(hex.substr(n, 2), 16));
			}
			if(link.startsWith("http") === false) {
				console.log('k http');
			} else {
				browser.windows.create({
					url: link,
					incognito: true
				});
				console.log(link);
			}
		} else {
			console.log('k hex');
		}
	}
});