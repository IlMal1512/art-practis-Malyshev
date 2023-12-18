$(document).ready(function(){
    var currentIndex = 0;
    var items = $('.slide');

    function showItem(index) {
        if (index < 0) {
            index = items.length - 1;
        } else if (index >= items.length) {
            index = 0;
        }

        var newTransformValue = -index * 100 + '%';
        $('.slider').css('transform', 'translateX(' + newTransformValue + ')');
        currentIndex = index;
    }

    $('.slider-container').on('click', '.slide', function(){
        var index = $(this).index();
        showItem(index);
    });

    $('#prev').on('click', function(){
        showItem(currentIndex - 1);
    });

    $('#next').on('click', function(){
        showItem(currentIndex + 1);
    });
});
if (ScrollTrigger.isTouch !== 1) {

	ScrollSmoother.create({
		wrapper: '.wrapper',
		content: '.content',
		smooth: 2,
		effects: true
	})

	gsap.fromTo('.header', { opacity: 1 }, {
		opacity: 0,
		scrollTrigger: {
			trigger: '.header',
			start: 'center',
			end: '820',
			scrub: true
		}
	})

	let itemsL = gsap.utils.toArray('.gallery__left .gallery__item')

	itemsL.forEach(item => {
		gsap.fromTo(item, { opacity: 0, x: -90 }, {
			opacity: 1, x: 0,
			scrollTrigger: {
				trigger: item,
				start: '-850',
				end: '-100',
				scrub: true
			}
		})
	})

	let itemsR = gsap.utils.toArray('.gallery__right .gallery__item')

	itemsR.forEach(item => {
		gsap.fromTo(item, { opacity: 0, x: 90 }, {
			opacity: 1, x: 0,
			scrollTrigger: {
				trigger: item,
				start: '-750',
				end: 'top',
				scrub: true
			}
		})
	})

}

