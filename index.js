const { $ } = require("dom7");

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
	$(".modal").toggleClass("modalon");
});
<script src="jssor.slider-28.1.0.min.js" type="text/javascript"></script>;

window.jssor_1_slider_init = function () {
	var jssor_1_options = {
		$AutoPlay: 1,
		$AutoPlaySteps: 5,
		$SlideDuration: 160,
		$SlideWidth: 200,
		$SlideSpacing: 3,
		$ArrowNavigatorOptions: {
			$Class: $JssorArrowNavigator$,
			$Steps: 5,
		},
		$BulletNavigatorOptions: {
			$Class: $JssorBulletNavigator$,
			$SpacingX: 16,
			$SpacingY: 16,
		},
	};

	var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);

	/*#region responsive code begin*/

	var MAX_WIDTH = 980;

	function ScaleSlider() {
		var containerElement = jssor_1_slider.$Elmt.parentNode;
		var containerWidth = containerElement.clientWidth;

		if (containerWidth) {
			var expectedWidth = Math.min(MAX_WIDTH || containerWidth, containerWidth);

			jssor_1_slider.$ScaleWidth(expectedWidth);
		} else {
			window.setTimeout(ScaleSlider, 30);
		}
	}

	ScaleSlider();

	$Jssor$.$AddEvent(window, "load", ScaleSlider);
	$Jssor$.$AddEvent(window, "resize", ScaleSlider);
	$Jssor$.$AddEvent(window, "orientationchange", ScaleSlider);
	/*#endregion responsive code end*/
};

if (document.getElementById("sliderb_container")) {
	jQuery(document).ready(function ($) {
		var _SlideshowTransitions = [
			{
				$Duration: 1200,
				x: -0.3,
				$During: { $Left: [0.3, 0.7] },
				$Easing: {
					$Left: $JssorEasing$.$EaseInCubic,
					$Opacity: $JssorEasing$.$EaseLinear,
				},
				$Opacity: 2,
			},
			{
				$Duration: 1200,
				x: 0.3,
				$SlideOut: true,
				$Easing: {
					$Left: $JssorEasing$.$EaseInCubic,
					$Opacity: $JssorEasing$.$EaseLinear,
				},
				$Opacity: 2,
			},
		];
		var options = {
			$AutoPlay: true,
			$AutoPlaySteps: 1,
			$AutoPlayInterval: 4000,
			$PauseOnHover: 1,
			$ArrowKeyNavigation: false,
			$SlideDuration: 500,
			$MinDragOffsetToSlide: 20,
			$SlideSpacing: 0,
			$DisplayPieces: 1,
			$ParkingPosition: 0,
			$UISearchMode: 1,
			$PlayOrientation: 1,
			$DragOrientation: 3,

			$SlideshowOptions: {
				$Class: $JssorSlideshowRunner$,
				$Transitions: _SlideshowTransitions,
				$TransitionsOrder: 1,
				$ShowLink: true,
			},
			$ArrowNavigatorOptions: {
				$Class: $JssorArrowNavigator$,
				$ChanceToShow: 2,
				$Steps: 1,
			},
		};
		var jssor_sliderb = new $JssorSlider$("sliderb_container", options);
		function ScaleSlider() {
			var parentWidth = jssor_sliderb.$Elmt.parentNode.clientWidth;
			if (parentWidth) jssor_sliderb.$ScaleWidth(Math.min(parentWidth, 1098));
			else window.setTimeout(ScaleSlider, 30);
		}
		ScaleSlider();
		if (!navigator.userAgent.match(/(iPhone|iPod|iPad|BlackBerry|IEMobile)/)) {
			$(window).bind("resize", ScaleSlider);
		}
	});
}
