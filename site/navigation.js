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
function setDefaultSubNav(subnavid) {
	createList(getSubNavItems(jsonObject.NavArray[0].Navigation), subnavid);
}
function getSubNavItems(subnavid) {
	var items = [];
	var subitems = [];
	for (item of jsonObject.NavArray) {
		if (item.Navigation == subnavid){
			for (var sitem of item.SubNavigation) {
				subitems.push(sitem.Name);
			}
		}
	}
	return subitems;
}
function getTopNavItems() {
	var items = [];
	for (var item of jsonObject.NavArray) {
		items.push(item.Navigation);
	}
	return items;
}
function generateNavigation() {
	var topNavigationData = getTopNavItems();
	createList(topNavigationData, "mainnav");
	setDefaultSubNav("subnav");
}
function switchSubNavigation(newSubNav) {
	$("#subnav").empty();
	createList(getSubNavItems(newSubNav), "subnav");
}
$(document).ready(function(){
	$("#mainnav").on("click", "li", function() {		
		switchSubNavigation($(this).attr("value"));
	});
});

var jsonObject = {
	"NavArray":[
		{
			"Navigation":"Nintendo",
			"Color":"#C91800",
			"URL":"/nintendo/",
			"SubNavigation":[{"Name":"Gameboy", "URL":""},{"Name":"Gamecube", "URL":""},{"Name":"N64", "URL":""}]
		},
		{
			"Navigation":"Sony",
			"Color":"#0040C9",
			"URL":"/sony/",
			"SubNavigation":[{"Name":"PSP", "URL":""},{"Name":"PS2", "URL":""},{"Name":"Vita", "URL":""}]
		},
		{
			"Navigation":"Microsoft",
			"Color":"#00C936",
			"URL":"/microsoft/",
			"SubNavigation":[{"Name":"PC", "URL":""},{"Name":"Xbox 360", "URL":""},{"Name":"Xbox One", "URL":""}]
		}
	]
};


