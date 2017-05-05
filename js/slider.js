

function scrollSliderLeft(e) {
	let slider = document.getElementsByClassName('slider')[0];
	slider.scrollLeft -= 100;
	e.style.left = slider.scrollLeft + 'px';
	document.getElementsByClassName('slider__button_right')[0].style.right = -slider.scrollLeft + 'px';
}

function scrollSliderRight(e) {
	let slider = document.getElementsByClassName('slider')[0];
	slider.scrollLeft += 100;
	document.getElementsByClassName('slider__button_left')[0].style.left = slider.scrollLeft + 'px';
	e.style.right = -slider.scrollLeft + 'px';
}