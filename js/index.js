// JavaScript Document
window.onload=function(){
	slideright();
	slideback();
	
	var hour_scale=getByClass("hour-scale")[0],
	    min_scale=getByClass("min-scale")[0],
		number=getByClass("number")[0];
	drawlines(hour_scale,12,80);
	drawlines(min_scale,60,85);
	drawnumbers(number);
	move();
}


function slideright(){
	var arrow=getByClass("icon")[0],
		self_introduction=getByClass("self_introduction")[0],
		main=getByClass("main")[0],
		mask=getByClass("mask")[0];
	arrow.onclick=function(){
		self_introduction.style.display="block";
		this.style.display="none";
		mask.style.display="block";
		main.style.width="66%";
			
	}	
}

function slideback(){
	var arrow=getByClass("icon")[0],
		self_introduction=getByClass("self_introduction")[0],
		main=getByClass("main")[0],
		mask=getByClass("mask")[0];
	mask.onclick=function(){
		this.style.display="none";
		arrow.style.display="block";
		main.style.width="100%";	
	}	
}





function drawlines(wrap,total,translateX){
	var gap=360/total;
	
	for(var i=0;i<total;i++){
		var scale=document.createElement("li");
		scale.style.transform="rotate("+gap*i+"deg) translateX("+translateX+"px)";
		wrap.appendChild(scale);	
	}
}

function drawnumbers(wrap){
	for(var i=1;i<=12;i++){
		var scale=document.createElement("li");
		var angle=((i-3)*30/180)*Math.PI;
		var x=77+77*Math.cos(angle)+20,
			y=77+77*Math.sin(angle)+15;
		scale.style.left=x+"px";
		scale.style.top=y+"px";
		scale.innerHTML=i;
		wrap.appendChild(scale);	
	}
}

function move(){
	var second_hand=getByClass("second-hand")[0],
		min_hand=getByClass("min-hand")[0],
		hour_hand=getByClass("hour-hand")[0];
		//title=document.getElementsByTagName("title")[0];
		
	setInterval(
		function(){
			var date=new Date();
			var hour=date.getHours(),
				minute=date.getMinutes(),
				sec=date.getSeconds();
			
			var secAangle=sec*6-90,
				minAngle=minute*6+sec*0.1-90,
				hourAngle=hour*30+minute*0.5-90;
			second_hand.style.transform="rotate("+secAangle+"deg)";
			min_hand.style.transform="rotate("+minAngle+"deg)";
			hour_hand.style.transform="rotate("+hourAngle+"deg)";
			//title.innerHTML=hour+":"+minute+":"+sec;
		},1000
	);
}