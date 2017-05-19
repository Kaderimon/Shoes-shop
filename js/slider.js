(function() {
	let sliderScroll;
	let slider = document.getElementsByClassName('slider')[0];
	document.addEventListener("DOMContentLoaded", function() {
		calcScroll();
		document.body.addEventListener("click", function(e) {
			switch (e.target.className) {
				case 'slider__button_left':
					scrollSliderLeft(e.target);
					break;
				case 'slider__button_right':
					scrollSliderRight(e.target);
					break;
				default:
					//console.log(e.target.className);
					break;
			}
		});
	});

	function calcScroll() {
		let item = document.querySelector(".slider__img");
		let sliderStyles = window.getComputedStyle(item);
		let tempWidthArr = sliderStyles.width.split("");
		tempWidthArr.length = tempWidthArr.length-2;
		sliderScroll = Number(tempWidthArr.join(""));
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