	function basketQty() {
		if (localStorage !== undefined) {
			let count = 0;
			let cartData = JSON.parse(localStorage.getItem('cart'));
			let headerCount = document.querySelector('.basket__text');
			if (cartData) {
				for (item in cartData) {
					count += cartData[item][5];
				}
			}
			headerCount.innerHTML = "Basket(" + count + ")";
		} else {
			alert("Sorry, your browser does not support Web Storage...");
		}
	}