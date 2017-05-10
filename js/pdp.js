(function() {
	let qty = 0;
	document.addEventListener("DOMContentLoaded", function() {
		document.body.addEventListener("click", function(e) {
			switch (e.target.className) {
				case 'product__button':
					event.preventDefault();
					buttonAnimation(e);
					basketQty();
					break;
				case 'product__button green':
					event.preventDefault();
					break;
				default:
					//console.log(e.target.className);
					break;
			}
		});
	});

	function buttonAnimation(e) {
		e.target.style.display = "none";
		e.target.nextSibling.nextSibling.style.display = "inline-block";
		setTimeout(function() {
			e.target.style.display = "inline-block";
			e.target.nextSibling.nextSibling.style.display = "none";
		}, 500)
	}
	function basketQty(){
		qty++;
		let headerCount = document.querySelector('.basket__text');
		headerCount.innerHTML = "Basket(" + qty + ")";
	}
})();