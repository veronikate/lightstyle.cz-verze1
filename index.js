$("#akce_link").click(function () {
	$("#akce_menu_drawer").slideToggle();
	$("#akce_menu_drawer").css("display", "flex");
	$("#skrine_menu_drawer").css("display", "none");
	$("#kuchyne_menu_drawer").css("display", "none");
	$("#showroomy_menu_drawer").css("display", "none");
	$("#spotrebice_menu_drawer").css("display", "none");
	$("#realizace_menu_drawer").css("display", "none");
	$("#kontakt_menu_drawer").css("display", "none");
});
$("#skrine_link").click(function () {
	$("#skrine_menu_drawer").slideToggle();
	$("#skrine_menu_drawer").css("display", "flex");
	$("#akce_menu_drawer").css("display", "none");
	$("#kuchyne_menu_drawer").css("display", "none");
	$("#showroomy_menu_drawer").css("display", "none");
	$("#spotrebice_menu_drawer").css("display", "none");
	$("#realizace_menu_drawer").css("display", "none");
	$("#kontakt_menu_drawer").css("display", "none");
});

$("#kuchyne_link").click(function () {
	$("#kuchyne_menu_drawer").slideToggle();
	$("#kuchyne_menu_drawer").css("display", "flex");
	$("#akce_menu_drawer").css("display", "none");
	$("#skrine_menu_drawer").css("display", "none");
	$("#showroomy_menu_drawer").css("display", "none");
	$("#spotrebice_menu_drawer").css("display", "none");
	$("#realizace_menu_drawer").css("display", "none");
	$("#kontakt_menu_drawer").css("display", "none");
});
$("#showroomy_link").click(function () {
	$("#showroomy_menu_drawer").slideToggle();
	$("#showroomy_menu_drawer").css("display", "flex");
	$("#akce_menu_drawer").css("display", "none");
	$("#kuchyne_menu_drawer").css("display", "none");
	$("#skrine_menu_drawer").css("display", "none");
	$("#spotrebice_menu_drawer").css("display", "none");
	$("#realizace_menu_drawer").css("display", "none");
	$("#kontakt_menu_drawer").css("display", "none");
});
$("#spotrebice_link").click(function () {
	$("#spotrebice_menu_drawer").slideToggle();
	$("#spotrebice_menu_drawer").css("display", "flex");
	$("#akce_menu_drawer").css("display", "none");
	$("#kuchyne_menu_drawer").css("display", "none");
	$("#showroomy_menu_drawer").css("display", "none");
	$("#skrine_menu_drawer").css("display", "none");
	$("#realizace_menu_drawer").css("display", "none");
	$("#kontakt_menu_drawer").css("display", "none");
});

$("#kontakt_link").click(function () {
	$("#kontakt_menu_drawer").slideToggle();
	$("#kontakt_menu_drawer").css("display", "flex");
	$("#akce_menu_drawer").css("display", "none");
	$("#kuchyne_menu_drawer").css("display", "none");
	$("#showroomy_menu_drawer").css("display", "none");
	$("#spotrebice_menu_drawer").css("display", "none");
	$("#realizace_menu_drawer").css("display", "none");
});

$("#realizace_link").click(function () {
	$("#realizace_menu_drawer").slideToggle();
	$("#realizace_menu_drawer").css("display", "flex");
	$("#akce_menu_drawer").css("display", "none");
	$("#kuchyne_menu_drawer").css("display", "none");
	$("#showroomy_menu_drawer").css("display", "none");
	$("#spotrebice_menu_drawer").css("display", "none");
	$("#skrine_menu_drawer").css("display", "none");
	$("#kontakt_menu_drawer").css("display", "none");
});

$(".nav-link").click(function () {
	$("fa-angle-down").css("transform", "rotate(180deg)");
});

function openNav() {
	document.getElementById("mySidepanel").style.width = "250px";
}

/* Set the width of the sidebar to 0 (hide it) */
function closeNav() {
	document.getElementById("mySidepanel").style.width = "0";
}
