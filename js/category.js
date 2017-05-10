(function() {

	document.addEventListener("DOMContentLoaded", function() {
		document.body.addEventListener("click", function(e) {
			let targetClassName = e.target.className;
			switch (true) {
				case targetClassName.search('category-item')>-1:
					location.href = 'pdp.html';
					break;
				default:
					//console.log(e.target.className);
				break;
			}
		});
	});
})();