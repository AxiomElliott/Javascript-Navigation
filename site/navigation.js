function createList(listItems) {
	var ul = document.createElement("ul");
	for (var item of listItems) {
		var li = document.createElement("li");
		li.innerHTML = item;
		ul.innerHTML += li.outerHTML;
	}
	document.body.innerHTML += ul.outerHTML;
}
function jsonNavToObject(jsonString) {

}
function getTopNavItems(jsonString) {
	var items = [];
	var json = JSON.parse(jsonString);
	for (var item of json.NavArray) {
		items.push(item.Navigation);
	}
	return items;
}
function generateNavigation() {
	var json = readJsonFromURL('nav.json');
	var topNavigationData = getTopNavItems(json);
	createList(topNavigationData);
}

function readJsonFromURL(url) {
	return "{\"NavArray\":[{\"Navigation\":\"Cars\",\"URL\":\"/cars/\",\"SubNavigation\":[{\"Name\":\"Mazda3\", \"URL\":\"/cars/mazda3/\"},{\"Name\":\"Mazda2\", \"URL\":\"/cars/mazda2/\"},{\"Name\":\"Mazda5\", \"URL\":\"/cars/mazda5/\"}]},{\"Navigation\":\"Dealers\", \"URL\":\"/dealers/\",\"SubNavigation\":[{\"Name\":\"Essex\", \"URL\":\"/dealers/essex/\"},{\"Name\":\"Kent\", \"URL\":\"/dealers/kent/\"},{\"Name\":\"London\", \"URL\":\"/dealers/london/\"}]},{\"Navigation\":\"Products\", \"URL\":\"/products/\",\"SubNavigation\":[{\"Name\":\"Sugar\", \"URL\":\"/products/sugar/\"},{\"Name\":\"Cocao\", \"URL\":\"/products/cocao/\"},{\"Name\":\"Rice\", \"URL\":\"/products/rice/\"}]}]}";
}
function switchSubNavigation(newSubNav) {
}