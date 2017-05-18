(function() {
	basketQty();
	document.addEventListener("DOMContentLoaded", function() {
		document.body.addEventListener("click", function(e) {
			switch (e.target.className) {
				case 'product__button':
					event.preventDefault();
					itemSubmition(e);
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


	function getDataFromLS() {
		return JSON.parse(localStorage.getItem('cart'));
	}
	// Записываем данные в LocalStorage
	function setDataToLS(o) {
		localStorage.setItem('cart', JSON.stringify(o));
		return false;
	}

	function arraysEqual(a, b) {
		if (a === b) return true;
		if (a == null || b == null) return false;
		if (a.length != b.length) return false;
		for (var i = 0; i < a.length - 1; ++i) {
			if (a[i] !== b[i]) return false;
		}
		return true;
	}

	function itemSubmition(e) {
		let itemName = document.getElementsByClassName("product__title")[0].innerHTML;
		let itemCost = document.getElementsByClassName("product__price")[0].innerHTML;
		let itemBg = getComputedStyle(document.getElementsByClassName("product-image")[0]).backgroundImage;
		itemCost = itemCost.split('');
		itemCost.shift();
		itemCost = itemCost.join('') - 0;
		let size = document.getElementsByName("size");
		for (let i = 0; i < size.length; i++) {
			if (size[i].checked) {
				size = size[i].value;
			}
		}
		let color = "Black";
		let toLS = [itemName, itemCost, size, color, itemBg, 1];
		//e.target.style.opacity = "0.1"; // блокируем кнопку на время операции с корзиной
		let cartData = getDataFromLS();
		let somethingDone = false;
		if (cartData) {
			for (item in cartData) {
				if (arraysEqual(toLS, cartData[item])) {
					cartData[item][5] += 1;
					somethingDone = true;
				}
			}
		} else {
			cartData = {};
			cartData["itemID0"] = toLS;
			somethingDone = true;
		}
		if (!somethingDone) {
			cartData["itemID" + Object.keys(cartData).length] = toLS;
		};
		if (!setDataToLS(cartData)) { // Обновляем данные в LocalStorage
			let k = function() {
				//arguments[0].style.opacity = "1"
			};
			setTimeout(k, 500, this); // разблокируем кнопку после обновления LS
		}
		return false;
	}
})();