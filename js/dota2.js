// JavaScript Document
window.onload=function(){
	//var sf=getByClass("sf")[0],
//		st=getByClass("st")[0],
//		monkey=getByClass("monkey")[0];
	var ul=document.getElementsByTagName("ul")[0],
		a=ul.getElementsByTagName("a");
	for(var i=0;i<a.length;i++){
		a[i].onmouseover=function(){
			var mask=this.getElementsByClassName("mask")[0];
			this.style["margin-top"]=-30+"px";
			this.style.color="white";
			mask.style.opacity=0;	
		}
		a[i].onmouseout=function(){
			var mask=this.getElementsByClassName("mask")[0];
			this.style["margin-top"]=0;
			this.style.color="#ffd943";	
			mask.style.opacity=1;
		}	
	}
	
}