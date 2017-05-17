(function(){

	document.body.onload = function(){
		setClickEvent();
 	}

	function setClickEvent(){
		let temp=document.querySelector('.search-form__input');
		for(let i = 0;i<temp.length;i++){
			temp[i].addEventListener("onkeypress", onClickTd);
		}
	}


	function onClickTd(e){
		if(e.keyKode == 13){
			location.href = 'category-all.html';
		}
	}

})();	