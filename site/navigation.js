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

function createSubNavList(subNavType) {
	var ul = document.getElementById("subnav");
	var listItems = getSubNavItems(subNavType);
	for (var item of listItems) {
		var li = document.createElement("li");
		li.className = "subnav-container";
		var container = document.createElement("div");
		container.className = "flip-card";
		var front = document.createElement("div");
		front.className = "front";
		front.style.backgroundImage = "url('assets/psp.jpg')";
		front.id = "front";
		var back = document.createElement("div");
		back.className = "back";
		back.innerHTML += item;
		container.appendChild(front);
		container.appendChild(back);
		li.appendChild(container);
		ul.appendChild(li);
	}
}
function setDefaultSubNav(subnavid) {
	createSubNavList(jsonObject.NavArray[0].Navigation);
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
	createSubNavList(newSubNav);
}


$(document).ready(function(){
	$("#mainnav").on("click", "li", function() {
		switchSubNavigation($(this).attr("value"));
	});
	$("#subnav").on("click", "li", function() {
		$(this).removeClass("subnav-container").addClass("subnav-container-clicked");
	});
});

var jsonObject = {
	"NavArray":[
		{
			"Navigation":"Nintendo",
			"Color":"#C91800",
			"URL":"/nintendo",
			"SubNavigation":[{"Name":"Gameboy", "URL":""},{"Name":"Gamecube", "URL":""},{"Name":"N64", "URL":""}]
		},
		{
			"Navigation":"Sony",
			"Color":"#0040C9",
			"URL":"/sony",
			"SubNavigation":[{"Name":"PSP", "URL":""},{"Name":"PS2", "URL":""},{"Name":"Vita", "URL":""}]
		},
		{
			"Navigation":"Microsoft",
			"Color":"#00C936",
			"URL":"/microsoft",
			"SubNavigation":[{"Name":"PC", "URL":""},{"Name":"Xbox 360", "URL":""},{"Name":"Xbox One", "URL":""}]
		}
	]
};


