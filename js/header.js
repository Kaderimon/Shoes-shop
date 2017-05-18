(function() {
	basketQty();
	document.addEventListener("DOMContentLoaded", function() {
		document.body.addEventListener("click", function(e) {
			switch (e.target.className) {
				case 'logo__text':
					location.href = 'index.html';
					break;
				case 'search-button':
					let formShow = document.querySelector('.search-form').style.display = 'table';
					e.target.style.display = 'none';
					document.querySelector('.search-form__input').focus();
					break;
				case 'search-form__button':
					checkSearchField(e);
					break;
				case 'basket':
					location.href = 'shopping-bag.html';
					break;
				default:
					//console.log(e.target.className);
					break;
			}
		});
		document.querySelector('.basket').addEventListener("click", function(e) {
			location.href = 'shopping-bag.html';
		});
	});

	function checkSearchField(e) {
		let field = document.querySelector('.search-form__input').value;
		if (field != "") {
			e.preventDefault();
			location.href = 'category-all.html';
		} else {
			e.preventDefault();
			document.querySelector('.search-form').style.display = 'none';
			document.querySelector('.search-button').style.display = 'block';
		}
	}

})();