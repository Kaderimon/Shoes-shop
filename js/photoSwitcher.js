(function(){

	document.body.onload = function(){
		setClickEvent();
 	}

	function setClickEvent(){
		let temp=document.getElementsByClassName('product-image-wrap__thumb');
		for(let i = 0;i<temp.length;i++){
			temp[i].addEventListener("click", onClickTd);
		}
	}


	function onClickTd(){
		clearOpacity();
		let mainPhoto = document.getElementsByClassName('product-image')[0];
		let big = window.getComputedStyle(this).getPropertyValue("background-image");
		//console.log(big+" no-repeat");
		this.style.opacity = "0.5";
		this.style.border = "1px solid red";
		mainPhoto.style.background = big+"center center no-repeat";
		mainPhoto.style.backgroundSize = "cover";
		let temp=document.getElementsByClassName('product-image-wrap__thumb');
		if (checkIE()) {
			var setDefaultZ = "auto";			
		}else{
			var setDefaultZ = "initial";	
		}
		for (let i = 0; i < temp.length; i++) {
			temp[i].style.zIndex = setDefaultZ;
		}
		this.style.zIndex = "1";
	}

	function clearOpacity(){
		let temp=document.getElementsByClassName('product-image-wrap__thumb');
		for(let i = 0;i<temp.length;i++){
			temp[i].style.opacity = "1";
			temp[i].style.border = "1px solid #e5e5e5";
		}
	}

	function checkIE(){
		var ua = window.navigator.userAgent;
	    var msie = ua.indexOf('MSIE ');
	    if (msie > 0) {
	        // IE 10 or older => return version number
	        return true;
	    }
	    var trident = ua.indexOf('Trident/');
	    if (trident > 0) {
	        // IE 11 => return version number
	        return true;
	    }
	    var edge = ua.indexOf('Edge/');
	    if (edge > 0) {
	       // Edge (IE 12+) => return version number
	       return true;
	    }

	    // other browser
	    return false;
	}

})();	