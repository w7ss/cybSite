// JavaScript Document
window.onload=function(){
	var button=document.getElementsByTagName("button")[0],
		main=document.getElementsByTagName("body")[0];
	button.onclick=function(){
	
	}
}

window.onscroll=function(){
		var scrolltop= document.body.scrollTop || document.documentElement.scrollTop,
			backtotop=getByClass("backtotop")[0];
		if(scrolltop>window.innerHeight){
			backtotop.style.display="block";
			addEvent(backtotop,"click",function(){
				var main=document.getElementsByTagName("body")[0];
				main.scrollTop=0;	
			});	
		}else backtotop.style.display="none";	
}
