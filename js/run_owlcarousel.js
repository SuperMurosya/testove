$(document).ready(function(){
	$(".owl-carousel").owlCarousel({
		autoplay: true,
		nav: true,
		navContainer: ".portfolio__controls",
		margin: 56,
		navElement: "div",	
		navText : [
			'<button type="button" class="portfolio__arrow portfolio__arrow_left icon-slider-arrow-l"></button>',
			'<button type="button" class="portfolio__arrow portfolio__arrow_right icon-slider-arrow-r"></button>'
        ],
		responsive: {
            0:{
                items:1,
				stagePadding: 30, /*виглядування наступного слайду*/ 
				margin: 10,

            },
            560:{
                items:2
            },
            1000:{
                items:3
            }
        },
	}

	);
  });