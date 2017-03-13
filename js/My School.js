// JavaScript Document
window.onload=function(){
	var figure=document.getElementsByTagName("figure");
	for(var i=0;i<figure.length;i++){
		figure[i].onmouseover=function(){
			var img=this.getElementsByTagName("img");
			img[0].style.transform="rotate("+20+"deg)";
			img[2].style.transform="rotate("+-20+"deg)";
			console.log(getComputedStyle(img[0],false)["transform"]);	
		}
		figure[i].onmouseout=function(){
			var img=this.getElementsByTagName("img");
			img[0].style.transform="rotate("+5+"deg)";
			img[2].style.transform="rotate("+-5+"deg)";	
		}	
	}	
}