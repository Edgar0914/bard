$(document).ready(function () {
	$('.slider').slick({
		arrows: true,
		dots: true,
		slidesToShow: 3,
		autoplay: true,
		speed: 800,
		autoplaySpeed: 800,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});
});
$(document).ready(function () {
	$num = $('.my-card').length;
	$even = $num / 2;
	$odd = ($num + 1) / 2;

	if ($num % 2 == 0) {
		$('.my-card:nth-child(' + $even + ')').addClass('active');
		$('.my-card:nth-child(' + $even + ')').prev().addClass('prev');
		$('.my-card:nth-child(' + $even + ')').next().addClass('next');
	} else {
		$('.my-card:nth-child(' + $odd + ')').addClass('active');
		$('.my-card:nth-child(' + $odd + ')').prev().addClass('prev');
		$('.my-card:nth-child(' + $odd + ')').next().addClass('next');
	}

	$('.my-card').click(function () {
		$slide = $('.active').width();
		console.log($('.active').position().left);

		if ($(this).hasClass('next')) {
			$('.card-carousel').stop(false, true).animate({ left: '-=' + $slide });
		} else if ($(this).hasClass('prev')) {
			$('.card-carousel').stop(false, true).animate({ left: '+=' + $slide });
		}

		$(this).removeClass('prev next');
		$(this).siblings().removeClass('prev active next');

		$(this).addClass('active');
		$(this).prev().addClass('prev');
		$(this).next().addClass('next');
	});


	// Keyboard nav
	$('html body').keydown(function (e) {
		if (e.keyCode == 37) { // left
			$('.active').prev().trigger('click');
		}
		else if (e.keyCode == 39) { // right
			$('.active').next().trigger('click');
		}
	});
});

function videoslider(links) {
	document.querySelector(".vslider").src = links;
}
/*popup*/
