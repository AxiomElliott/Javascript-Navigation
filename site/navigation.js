function createList(listItems, ulid) {
	var ul = document.getElementById(ulid);
	for (var item of listItems) {
		var li = document.createElement("li");
		li.innerHTML = item;
		li.setAttribute("value", item);
		li.setAttribute("id", "mainnavli");
		li.className = "mainnavli";
		ul.innerHTML += li.outerHTML;
	}
}
function setDefaultSubNav(jsonString, subnavid) {
	var json = JSON.parse(jsonString);
	createList(getSubNavItems(jsonString, json.NavArray[0].Navigation), subnavid);
}
function getSubNavItems(jsonString, subnavid) {
	var items = [];
	var subitems = [];
	var json = JSON.parse(jsonString);
	for (item of json.NavArray) {
		if (item.Navigation == subnavid){
			for (var sitem of item.SubNavigation) {
				subitems.push(sitem.Name);
			}
		}
	}
	return subitems;
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
	createList(topNavigationData, "mainnav");
	setDefaultSubNav(json, "subnav");
}
function readJsonFromURL(url) {
	return "{\"NavArray\":[{\"Navigation\":\"Cars\",\"URL\":\"/cars/\",\"SubNavigation\":[{\"Name\":\"Mazda3\", \"URL\":\"/cars/mazda3/\"},{\"Name\":\"Mazda2\", \"URL\":\"/cars/mazda2/\"},{\"Name\":\"Mazda5\", \"URL\":\"/cars/mazda5/\"}]},{\"Navigation\":\"Dealers\", \"URL\":\"/dealers/\",\"SubNavigation\":[{\"Name\":\"Essex\", \"URL\":\"/dealers/essex/\"},{\"Name\":\"Kent\", \"URL\":\"/dealers/kent/\"},{\"Name\":\"London\", \"URL\":\"/dealers/london/\"}]},{\"Navigation\":\"Products\", \"URL\":\"/products/\",\"SubNavigation\":[{\"Name\":\"Sugar\", \"URL\":\"/products/sugar/\"},{\"Name\":\"Cocao\", \"URL\":\"/products/cocao/\"},{\"Name\":\"Rice\", \"URL\":\"/products/rice/\"}]}]}";
}
function switchSubNavigation(newSubNav) {
}
$(document).ready(function(){
	$("#mainnav").on("click", "li", function() {
		alert($(this).attr("value"));
	});
});



