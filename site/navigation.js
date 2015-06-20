function createList(name, listItems) {
	var ul = document.createElement("ul");
	for (var item of listItems) {
		var li = document.createElement("li");
		li.innerHTML = item;
		ul.innerHTML += li.outerHTML;
	}
	document.body.innerHTML += ul.outerHTML;
	return ul;
};
function jsonNavToObject(jsonString) {
};
function readJsonFromURL(url) {
	$.getJSON(url, function(url){
		console.log(url);
	});
	document.body.innerHTML += $.getJSON(url);
};
function switchSubNavigation(newSubNav) {
};