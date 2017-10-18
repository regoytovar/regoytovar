var typed = new Typed('#type-header',{
	strings:[
		"a front-end developer.",
		"I turn coffee into code."
	],
    typeSpeed: 75,
    loop: true,
    backDelay: 1000
})

$(window).scroll(function() {
	if ($("#mainNav").offset().top > 100) {
		$("#navbar-logo").addClass("scroll-logo");
	} else {
		$("#navbar-logo").removeClass("scroll-logo");
	}
});

  $('.js-scroll-trigger').click(function() {
    $("#navbar-logo").addClass("scroll-logo");
  });
