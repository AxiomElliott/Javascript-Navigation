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
		front.style.backgroundImage = "url('assets/" + item.URL + "')";
		front.id = "front";
		var back = document.createElement("div");
		back.className = "back";
		back.innerHTML += item.Name;
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
				subitems.push(sitem);
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

function switchSubNavigation(newSubNav) {
	$("#subnav").empty();
	createSubNavList(newSubNav);
}

$(document).ready(function(){

	var topNavigationData = getTopNavItems();
	createList(topNavigationData, "mainnav");
	setDefaultSubNav("subnav");

	$("#mainnav").on("click", "li", function() {
		switchSubNavigation($(this).attr("value"));
	});
	$("#subnav").on("click", ".subnav-container", function() {
		closeCurrentSubNavItem();
		openSubNavItem(this);
	});

	$("#subnav").on("click", ".subnav-container-clicked", function() {
		disableHoverDuringTransition(this);
		closeSubNavItem(this);
	});
});

function openSubNavItem(subnav) {
	$(subnav).removeClass("subnav-container").addClass("subnav-container-clicked");
	$(subnav).find(".front").removeClass("front").addClass("front-clicked");
	$(subnav).find(".back").removeClass("back").addClass("back-clicked");
	$(subnav).find(".flip-card").removeClass("flip-card").addClass("flip-card-clicked");
}

function closeSubNavItem(subnav) {
	$(subnav).removeClass("subnav-container-clicked").addClass("subnav-container");
	$(subnav).find(".front-clicked").removeClass("front-clicked").addClass("front");
	$(subnav).find(".back-clicked").removeClass("back-clicked").addClass("back");
	$(subnav).find(".flip-card-clicked").removeClass("flip-card-clicked").addClass("flip-card");
}

function closeCurrentSubNavItem() {
	closeSubNavItem($("#subnav").find(".subnav-container-clicked"));
}

function disableHoverDuringTransition(subnav) {
	$(subnav).find(".front").unbind("hover");
    setTimeout(function(){
		(subnav).find(".front").bind("hover");
    }, 1000);
}

var jsonObject = {
	"NavArray":[
		{
			"Navigation":"Nintendo",
			"Color":"#C91800",
			"URL":"/nintendo",
			"SubNavigation":[{"Name":"Gameboy", "URL":"gameboy.jpg"},{"Name":"Gamecube", "URL":"gamecube.jpg"},{"Name":"N64", "URL":"n64.jpg"}]
		},
		{
			"Navigation":"Sony",
			"Color":"#0040C9",
			"URL":"/sony",
			"SubNavigation":[{"Name":"PSP", "URL":"psp.jpg"},{"Name":"PS2", "URL":"ps2.png"},{"Name":"Vita", "URL":"vita.jpg"}]
		},
		{
			"Navigation":"Microsoft",
			"Color":"#00C936",
			"URL":"/microsoft",
			"SubNavigation":[{"Name":"PC", "URL":"pc.jpg"},{"Name":"Xbox", "URL":"xbox.jpg"},{"Name":"Xbox 360", "URL":"xbox360.jpg"}]
		}
	]
};


