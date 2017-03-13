// JavaScript Document
document.addEventListener("DOMContentLoaded", function() {
   var wrapper=document.getElementsByClassName("wrapper")[0];
   wrapper.style.height=wrapper.offsetWidth/2+"px";
}, false);

window.onload=function(){
	var football=getByClass("football")[0],
		basketball=getByClass("basketball")[0],
		f1=getByClass("f1")[0];
		dota2=getByClass("dota2")[0];
		
	football.onmouseover=function(){
		this.style.width=120+"px";
		this.style.height=120+"px";
	}
	football.onmouseout=function(){
		this.style.width=100+"px";
		this.style.height=100+"px";	
	}
	
	basketball.onmouseover=function(){
		this.style.width=120+"px";
		this.style.height=120+"px";	
	}
	basketball.onmouseout=function(){
		this.style.width=100+"px";
		this.style.height=100+"px";	
	}
	
	//f1.onmouseover=function(){
//		this.style.width=140+"px";
//		this.style.height=70+"px";	
//	}
//	f1.onmouseout=function(){
//		this.style.width=120+"px";
//		this.style.height=60+"px";	
//	}
	
	dota2.onmouseover=function(){
		this.style.width=880+"px";	
	}
	dota2.onmouseout=function(){
		this.style.width=500+"px";	
	}
	
	
	
	
	var img=document.getElementsByTagName("img");
		wrapper=document.getElementsByClassName("wrapper")[0],
		width=wrapper.offsetWidth,
		index=1;   
	for(var i=0;i<img.length;i++){
		img[i].onmouseover=function(){
			this.style["z-index"]=index;
			this.style.width=100+"%";
			index++	
		}
		img[i].onmouseout=function(){
			this.style.width=50+"%";
		}	
	}
	
	
	var audio=document.getElementsByTagName("audio")[0];
	f1.onmouseover=function(){
		audio.play();	
	}
	f1.onmouseout=function(){
		audio.pause();
		audio.currentTime=0;	
	}
	
}


