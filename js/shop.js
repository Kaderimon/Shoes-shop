(function() {
	document.addEventListener("DOMContentLoaded", function() {
		document.body.addEventListener("click", function(e) {
			switch (e.target.className) {
				case 'order-item__input':
					evaluateQuantity();
					break;
				case 'buttons__order':
					location.href = 'thank-you.html';
					break;
				case 'order-item__del':
					e.target.parentNode.style.display = "none";
					e.target.parentNode.childNodes[9].childNodes[1].value = "0";
					evaluateQuantity();
					break;
				default:
					//console.log(e.target);
					break;
			}
		});
	});

	function evaluateQuantity() {
		let allInputs = document.querySelectorAll('.order-item__input');
		let temp = 0;
		for (var i = 0; i < allInputs.length; i++) {
			temp += +allInputs[i].value;
		};
		let headerCount = document.querySelector('.basket__text');
		headerCount.innerHTML = "Basket(" + temp + ")";
	}
})();