(function() {
	let sliderScroll;
	let slider = document.getElementsByClassName('slider')[0];
	document.addEventListener("DOMContentLoaded", function() {
		calcScroll()
		document.body.addEventListener("click", function(e) {
			switch (e.target.className) {
				case 'slider__button_left':
					scrollSliderLeft(e.target);
					calcScroll();
					break;
				case 'slider__button_right':
					scrollSliderRight(e.target);
					calcScroll();
					break;
				default:
					//console.log(e.target.className);
					break;
			}
		});
	});

	function calcScroll() {
		let buttonsWidth = 80;
		let itemWidth = 200;
		let sliderStyles = window.getComputedStyle(slider);
		let sliderWidth = sliderStyles.width.split("");
		sliderWidth.length = sliderWidth.length - 2;
		sliderWidth = sliderWidth.join("");
		let calcSroll = (sliderWidth - buttonsWidth) / itemWidth;
		if (slider.scrollLeft == 0) {
			sliderScroll = calcSroll / 10 * 200;
		} else {
			sliderScroll = 200;
		}
	}

	function scrollSliderLeft(e) {
		slider.scrollLeft -= sliderScroll;
		e.style.left = slider.scrollLeft + 'px';
		document.getElementsByClassName('slider__button_right')[0].style.right = -slider.scrollLeft + 'px';
	}

	function scrollSliderRight(e) {
		slider.scrollLeft += sliderScroll;
		document.getElementsByClassName('slider__button_left')[0].style.left = slider.scrollLeft + 'px';
		e.style.right = -slider.scrollLeft + 'px';
	}

})();