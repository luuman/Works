//封装class获取元素
function getByClass(clsName,parent){// parent 父元素可选
//parent为真，传父元素的ID
	var oParent = parent?document.getElementById(parent):document,
	// A?B:C,如果A为真，则值为B，否则为C
	eles = [],
	elements = oParent.getElementsByTagName('*');

	for(var i = 0,l = elements.length;i<l;i++){
		if(elements[i].className==clsName){
			eles.push(elements[i]);
		}
	}
	return eles;
}
// document.getElementByClassName() IE10以前的浏览器不支持
window.onload=darg;
function darg(){
	var oTitle=getByClass('login_logo_webqq','loginPanel')[0];
	// 拖拽
	oTitle.onmousedown=fnDown;// 调用函数

	// 关闭登陆界面
	var oClose=document.getElementById('ui_boxyClose');
	oClose.onclick=function(){
		document.getElementById('loginPanel').style.display='none';
	}
	// 状态显示
	var loginState=document.getElementById
}
function fnDown(event){
	event = event || window.event;
	var oDrag=document.getElementById('loginPanel'),
		disX=event.clientX-oDrag.offsetLeft,
		disY=event.clientY-oDrag.offsetTop;

	document.onmousemove=function(event){
		event = event || window.event;
		fnMove(event,disX,disY);
	}
	// 卸载移动事件
	document.onmouseup=function(event){
		document.onmousemove=null;
		document.onmouseup=null;
	}
	// document.onmousemove=function(event){
	// 	event = event || window.event;// IE是window.event
	// 	oDrag.style.left=event.clientX+'px';
	// 	oDrag.style.top=event.clientY+'px';
	// }
}
function fnMove(e,posX,posY){
	var oDrag=document.getElementById('loginPanel'),
		l=e.clientX-posX,
		t=e.clientY-posY,
		winW=document.documentElement.clientWidth || document.body.clientWidth,
		winH=document.documentElement.clientHeight || document.body.clientHeight,
		maxW=winW-oDrag.offsetWidth-10,
		maxH=winH-oDrag.offsetHeight;
	if(l<0){
		l=0;
	}else if(l>maxW){
		l=maxW;
	}
	if(t<0){
		t=10;
	}else if(t>maxH){
		t=maxH;
	}
	oDrag.style.left=l+'px';
	oDrag.style.top=t+'px';
}