(function() {
	let targetClassName;
	document.addEventListener("DOMContentLoaded", function() {
		document.body.addEventListener("click", function(e) {
			targetClassName = e.target.className;
			switch (true) {
				case targetClassName.search('logo__text') > -1:
					location.href = '#';
					break;
				/*case targetClassName.search('basket') > -1:
					location.href = 'shopping-bag.html';
					break;*/
				case targetClassName.search('even') > -1:
					location.href = 'category-all.html'; //category listing
					break;
				case targetClassName.search('odd') > -1:
					location.href = 'pdp.html'; //product details
					break;
				default:
					//console.log(e.target.className);
					break;
			}
		});
	});
})();