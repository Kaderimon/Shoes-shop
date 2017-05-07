(function() {

	document.addEventListener("DOMContentLoaded", function() {
		document.body.addEventListener("click", function(e) {
			switch (e.target.className) {
				case 'logo__text':
					location.href = '#';
					break;
				case 'search-button':
					let formShow = document.querySelector('.search-form').style.display = 'table';
					e.target.style.display = 'none';
					document.querySelector('.search-form__input').focus();
				break;
				case 'search-form__button':
					checkSearchField(e);
				break;
				default:
					//console.log(e.target.className);
				break;
			}
		});
	});

	function checkSearchField(e){
		let field = document.querySelector('.search-form__input').value;
		if (field != "") {
			location.href = 'category-all.html';
		}else{
			e.preventDefault();
			document.querySelector('.search-form').style.display = 'none';
			document.querySelector('.search-button').style.display = 'block';
		}
	}

})();