(function() {
	document.addEventListener("DOMContentLoaded", function() {
		loadItems();
		setTotal();
		disableOrder();
		document.body.addEventListener("click", function(e) {
			switch (e.target.className) {
				case 'order-item__input':
					changeAmount(e);
					break;
				case 'buttons__order':
					localStorage.clear();
					location.href = 'thank-you.html';
					break;
				case 'order-item__del':
					deleteItem(e);
					disableOrder();
					break;
				default:
					//console.log(e.target);
					break;
			}
		});
	});

	function changeAmount(e) {
		if (localStorage !== undefined) {
			let bagWrap = document.getElementsByClassName("order")[0];
			let cartData = JSON.parse(localStorage.getItem('cart'));
			if (cartData) {
				for (item in cartData) {
					if (item === e.target.parentNode.parentNode.className.split(" ")[1]) {
						cartData[item][5] = Number(e.target.value);
					};
				}
			}
			if (!setDataToLS(cartData)) { // Обновляем данные в LocalStorage
				bagWrap.innerHTML = "";
				basketQty();
				loadItems();
				setTotal();
			}
		} else {
			alert("Sorry, your browser does not support Web Storage...");
		}
	}

	function disableOrder() {
		if (localStorage !== undefined) {
			let orderButton = document.querySelector(".buttons__order");
			if (localStorage.cart === undefined) {
				orderButton.disabled = true;
				orderButton.style.opacity = "0.5";
			} else {
				if (localStorage.cart.length <= 2) {
					orderButton.disabled = true;
				orderButton.style.opacity = "0.5";
				} else {
					orderButton.disabled = false;
					orderButton.style.opacity = "1";
				}

			}
		} else {
			alert("Sorry, your browser does not support Web Storage...");
		}
	}

	function deleteItem(e) {
		if (localStorage !== undefined) {
			let bagWrap = document.getElementsByClassName("order")[0];
			let cartData = JSON.parse(localStorage.getItem('cart'));
			if (cartData) {
				for (item in cartData) {
					if (item === e.target.parentNode.className.split(" ")[1]) {
						if (cartData[item][5] <= 1) {
							delete cartData[item];
						} else {
							cartData[item][5] -= 1;
						}
					};
				}
			}
			if (!setDataToLS(cartData)) { // Обновляем данные в LocalStorage
				bagWrap.innerHTML = "";
				basketQty();
				loadItems();
				setTotal();
			}
		} else {
			alert("Sorry, your browser does not support Web Storage...");
		}
	}
	//Считываем из LocalStorage
	function getDataFromLS() {
		return JSON.parse(localStorage.getItem('cart'));
	}
	// Записываем данные в LocalStorage
	function setDataToLS(o) {
		localStorage.setItem('cart', JSON.stringify(o));
		return false;
	}
	//Выводит общую сумму на странице
	function setTotal() {
		if (localStorage !== undefined) {
			let count = 0;
			let totalPrice = 0;
			let cartData = JSON.parse(localStorage.getItem('cart'));
			let bagItem = document.getElementsByClassName("total__price")[0];
			if (cartData) {
				for (item in cartData) {
					count += cartData[item][5];
					totalPrice += cartData[item][5] * cartData[item][1];
				}
			}
			bagItem.innerHTML = totalPrice.toFixed(2) + "$";
		} else {
			alert("Sorry, your browser does not support Web Storage...");
		}
	}

	function itemsHead() {
		let bagWrap = document.getElementsByClassName('order')[0];
		bagWrap.innerHTML += '<div class="order-head">' +
			'<p class="order-item__prod">PRODUCT</p>' +
			'<p class="order-item__desc">DESCRIPTION</p>' +
			'<p class="order-item__color">COLOR</p>' +
			'<p class="order-item__size">SIZE</p>' +
			'<p class="order-item__qty">QTY</p>' +
			'<p class=" order-item__price">AMOUNT</p>' +
			'<p class="order-head__elem">DELETE</p></div>';
	}

	function itemsFooter() {
		let bagWrap = document.getElementsByClassName('order')[0];
		bagWrap.innerHTML += '<div class="total">' +
			'<p class="total__text">Subtotal:</p>' +
			'<p class="total__price">1000$</p></div>';
	}
	//Загрузка из корзины
	function loadItems() {
		let cart = getDataFromLS();
		itemsHead();
		if (cart) {
			for (item in cart) {
				fillPageFromCart(cart, item);
			}
		}
		itemsFooter();
	}
	//Отображение данных из корзины
	function fillPageFromCart(cart, item) {
		let data = cart[item];
		let bagWrap = document.getElementsByClassName('order')[0];
		let closeDivTag = "</div>";
		bagWrap.innerHTML += '<div class="order-item ' + item + '">' +
			'<div class="order-item__img ' + item + '"></div>' +
			'<div class="order-item__desc">' +
			'<h2 class="order-item__name">' + data[0] + '</h2>' +
			'<p class="order-item__art">Ref. 2514/302</p>' + closeDivTag +
			'<p class="order-item__color">' + data[3] + '</p>' +
			'<p class="order-item__size">' + data[2] + '</p>' +
			'<div class="order-item__qty">' +
			'<input type="number" pattern="[0-9]" min="0" class="order-item__input" value="' + data[5] + '"></div>' +
			'<p class="order-item__price">' + data[1] + '</p>' +
			'<button class="order-item__del">X</button>' + closeDivTag;
		let itemImg = document.getElementsByClassName("order-item__img " + item)[0];
		itemImg.style.background = data[4];
		itemImg.style.backgroundPosition = "center";
		itemImg.style.backgroundRepeat = "no-repeat";
		itemImg.style.backgroundSize = "cover";
	}
})();