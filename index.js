$("#kuchyne_link").click(function () {
	$("#arrow_kuchyne").toggleClass("uparrow");
	$("#kuchyne_menu_drawer").slideToggle();
	$("#kuchyne_menu_drawer").css("display", "flex");
	$("#akce_menu_drawer").css("display", "none");
	$("#skrine_menu_drawer").css("display", "none");
	$("#showroomy_menu_drawer").css("display", "none");
	$("#spotrebice_menu_drawer").css("display", "none");
	$("#realizace_menu_drawer").css("display", "none");
	$("#kontakt_menu_drawer").css("display", "none");
	$("#arrow_showroomy").removeClass("uparrow");
	$("#arrow_spotrebice").removeClass("uparrow");
	$("#arrow_akce").removeClass("uparrow");
	$("#arrow_kontakt").removeClass("uparrow");
	$("#arrow_realizace").removeClass("uparrow");
});
/*$("#skrine_link").click(function () {
	$("#arrow_skrine").toggleClass("uparrow");
	$("#skrine_menu_drawer").slideToggle();
	$("#skrine_menu_drawer").css("display", "flex");
	$("#akce_menu_drawer").css("display", "none");
	$("#kuchyne_menu_drawer").css("display", "none");
	$("#showroomy_menu_drawer").css("display", "none");
	$("#spotrebice_menu_drawer").css("display", "none");
	$("#realizace_menu_drawer").css("display", "none");
	$("#kontakt_menu_drawer").css("display", "none");
});
*/
$("#showroomy_link").click(function () {
	$("#arrow_showroomy").toggleClass("uparrow");
	$("#showroomy_menu_drawer").slideToggle();
	$("#showroomy_menu_drawer").css("display", "flex");
	$("#akce_menu_drawer").css("display", "none");
	$("#kuchyne_menu_drawer").css("display", "none");
	$("#skrine_menu_drawer").css("display", "none");
	$("#spotrebice_menu_drawer").css("display", "none");
	$("#realizace_menu_drawer").css("display", "none");
	$("#kontakt_menu_drawer").css("display", "none");
	$("#arrow_kuchyne").removeClass("uparrow");
	$("#arrow_spotrebice").removeClass("uparrow");
	$("#arrow_akce").removeClass("uparrow");
	$("#arrow_kontakt").removeClass("uparrow");
	$("#arrow_realizace").removeClass("uparrow");
});
$("#spotrebice_link").click(function () {
	$("#arrow_spotrebice").toggleClass("uparrow");
	$("#spotrebice_menu_drawer").slideToggle();
	$("#spotrebice_menu_drawer").css("display", "flex");
	$("#akce_menu_drawer").css("display", "none");
	$("#kuchyne_menu_drawer").css("display", "none");
	$("#showroomy_menu_drawer").css("display", "none");
	$("#skrine_menu_drawer").css("display", "none");
	$("#realizace_menu_drawer").css("display", "none");
	$("#kontakt_menu_drawer").css("display", "none");
	$("#arrow_showroomy").removeClass("uparrow");
	$("#arrow_kuchyne").removeClass("uparrow");
	$("#arrow_akce").removeClass("uparrow");
	$("#arrow_kontakt").removeClass("uparrow");
	$("#arrow_realizace").removeClass("uparrow");
});
$("#akce_link").click(function () {
	$("#arrow_akce").toggleClass("uparrow");
	$("#akce_menu_drawer").slideToggle();
	$("#akce_menu_drawer").css("display", "flex");
	$("#skrine_menu_drawer").css("display", "none");
	$("#kuchyne_menu_drawer").css("display", "none");
	$("#showroomy_menu_drawer").css("display", "none");
	$("#spotrebice_menu_drawer").css("display", "none");
	$("#realizace_menu_drawer").css("display", "none");
	$("#kontakt_menu_drawer").css("display", "none");
	$("#arrow_showroomy").removeClass("uparrow");
	$("#arrow_spotrebice").removeClass("uparrow");
	$("#arrow_kuchyne").removeClass("uparrow");
	$("#arrow_kontakt").removeClass("uparrow");
	$("#arrow_realizace").removeClass("uparrow");
});
$("#kontakt_link").click(function () {
	$("#arrow_kontakt").toggleClass("uparrow");
	$("#kontakt_menu_drawer").slideToggle();
	$("#kontakt_menu_drawer").css("display", "flex");
	$("#akce_menu_drawer").css("display", "none");
	$("#kuchyne_menu_drawer").css("display", "none");
	$("#showroomy_menu_drawer").css("display", "none");
	$("#spotrebice_menu_drawer").css("display", "none");
	$("#realizace_menu_drawer").css("display", "none");
	$("#arrow_showroomy").removeClass("uparrow");
	$("#arrow_spotrebice").removeClass("uparrow");
	$("#arrow_akce").removeClass("uparrow");
	$("#arrow_kuchyne").removeClass("uparrow");
	$("#arrow_realizace").removeClass("uparrow");
});

$("#realizace_link").click(function () {
	$("#arrow_realizace").toggleClass("uparrow");
	$("#realizace_menu_drawer").slideToggle();
	$("#realizace_menu_drawer").css("display", "flex");
	$("#akce_menu_drawer").css("display", "none");
	$("#kuchyne_menu_drawer").css("display", "none");
	$("#showroomy_menu_drawer").css("display", "none");
	$("#spotrebice_menu_drawer").css("display", "none");
	$("#skrine_menu_drawer").css("display", "none");
	$("#kontakt_menu_drawer").css("display", "none");
	$("#arrow_showroomy").removeClass("uparrow");
	$("#arrow_spotrebice").removeClass("uparrow");
	$("#arrow_akce").removeClass("uparrow");
	$("#arrow_kontakt").removeClass("uparrow");
	$("#arrow_kuchyne").removeClass("uparrow");
});

$(".openbtn").click(function () {
	$("#mySidepanel").toggleClass("sidepanel_open");
});

$(".closebtn").click(function () {
	$("#mySidepanel").toggleClass("sidepanel_open");
});

var viewportWidth = $(window).width();

$(".header_button").click(function () {
	console.log(viewportWidth);
});

if (viewportWidth <= 600) {
	$(".footer").css("display", "none");
	$(".footer_phone").css("display", "block");
}

if (viewportWidth >= 600) {
	$(".footer").css("display", "flex");
	$(".footer_phone").css("display", "none");
}

var navbar_width = $('.navbar-nav').css('width');
var navbar_width_int = parseFloat(navbar_width);

var count = (viewportWidth - navbar_width_int) / 2;
console.log(viewportWidth)
console.log(navbar_width)
console.log(count)
$('.navbar-nav').css('left', count + "px");


$('#footer_button_one').click(function() {
	$('.footer_content').toggleClass('.content_show')
});