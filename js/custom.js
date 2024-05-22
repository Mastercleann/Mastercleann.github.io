$(function () {
	"use strict";
	
	setTimeout(function () {
		$('.loader_bg').fadeToggle();
	}, 400);

});

const changeColor = () => {
  if($(".text-bg span").css("color") == "#ffdd00" || $(".text-bg span").css("color") == "rgb(255, 221, 0)") {
    $(".banner_main").css("background-image","linear-gradient(290deg, #0d67dc 50%, #08be88 100%)");
    $(".text-bg span").css("color", "#08e8a6");
    $(".text-bg p").css("color", "#fff");
  } else {
    $(".banner_main").css("background-image","linear-gradient(#ffdd00 43%, #0057b7 0%)");
    $(".text-bg span").css("color", "#0057b7");
    $(".text-bg p").css("color", "#ffdd00");
  }
}
