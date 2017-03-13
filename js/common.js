//常用的JS函数

//通过类名获取函数
function getByClass(clsName,parent){
  var oParent=parent?document.getElementById(parent):document,
      eles=[],
      elements=oParent.getElementsByTagName('*');

  for(var i=0,l=elements.length;i<l;i++){
    if(elements[i].className==clsName){
      eles.push(elements[i]);
    }
  }
  return eles;
}

//添加事件
function addEvent(el,type,fn){
	if(el.addEventListener){
		el.addEventListener(type,fn,false);	
	}else if(el.attachEvent){
		el.attachEvent("on"+type,fn);	
	}else{
		el["on"+type]=fn;	
	}
}

//get方法的ajax
function ajaxGet(url,callback){
	var xhr=null;
	if(window.XMLHttpRequest){
		xhr=new XMLHttpRequest();
	}else if(window.ActiveXObject){
		xhr=new ActiveXObject("Msxml2.XMLHTTP");
	}
	xhr.onreadystatechange=function(){
		if(xhr.readyState==4 && xhr.status==200){
			callback(JSON.parse(xhr.responseText));
		}
	}
	xhr.open("GET",url,false);
	xhr.send();
}

//阻止事件冒泡
function stopBubble(event){
	event=event || window.event;
	if(event.stopPropagation){
		event.stopPropagation();
	}else{
		event.cancelBubble=true;
	}
}

