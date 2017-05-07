(function() {

	document.addEventListener("DOMContentLoaded", function() {
		document.body.addEventListener("click", function(e) {
			let targetClassName = e.target.className;
			switch (true) {
				case targetClassName.search('logo__text')>-1:
					location.href = '#';
					break;
				case targetClassName.search('even')>-1:
					location.href = '#';//category listing
				break;
				case targetClassName.search('odd')>-1:
					location.href = '#';//product details
				break;
				case targetClassName.search('slider__button_left')>-1:
					scrollSliderLeft(e.target);
					break;
				case targetClassName.search('slider__button_right')>-1:
					scrollSliderRight(e.target);
					break;
				default:
					console.log(e.target.className);
					break;
			}
		});
	});

})();