// http://www.dte.web.id/2013/02/event-mouse-wheel.html
function start() {
    function scrollHorizontally(e) {
        e = window.event || e;
        var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
        document.documentElement.scrollLeft -= (delta*40); // Multiplied by 40
        document.body.scrollLeft -= (delta*40); // Multiplied by 40
        e.preventDefault();
    }
    if (window.addEventListener) {
        // IE9, Chrome, Safari, Opera
        window.addEventListener("mousewheel", scrollHorizontally, false);
        // Firefox
        window.addEventListener("DOMMouseScroll", scrollHorizontally, false);
    } else {
        // IE 6/7/8
        window.attachEvent("onmousewheel", scrollHorizontally);
    }
};

const pages_group = document.querySelector(".pages");
const pages_nb = document.querySelectorAll(".page").length;

pages_group.style.width = pages_nb*100 + "vw";

start();

(function() {
	$('ul.nav a').bind('click',function(event){
		var $anchor = $(this);
		/*
		if you want to use one of the easing effects:
		$('html, body').stop().animate({
			scrollLeft: $($anchor.attr('href')).offset().left
		}, 1500,'easeInOutExpo');
		 */
		$('html, body').stop().animate({
			scrollLeft: $($anchor.attr('href')).offset().left
		}, 1000);
		event.preventDefault();
	});
});

//menu dev
const menuContent = document.querySelector("#menu-content");
const menuButton = document.querySelector("#menu-button");
const menuLinks = document.querySelectorAll("#menu-content a");

menuButton.addEventListener("click", () => { menuContent.classList.toggle("hidden");});
menuLinks.forEach(element => {
    element.addEventListener("click", () => { menuContent.classList.toggle("hidden"); });
});