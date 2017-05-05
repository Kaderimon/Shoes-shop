(function() {

	document.addEventListener("DOMContentLoaded", function() {
		document.body.addEventListener("click", function(e) {
			switch (e.target.className) {
				case 'logo__text':
					location.href = '#';
					break;
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

})();