(function() {
  let input = document.querySelector('.search-form__input')
  input.addEventListener('keydown', function(e) {
    if (e.keyCode === 13) {
      location.href="category-all.html";
    }
    if (e.keyCode === 27) {
    	document.querySelector('.search-form').style.display = 'none';
		document.querySelector('.search-button').style.display = 'block';
    };
  });
})();