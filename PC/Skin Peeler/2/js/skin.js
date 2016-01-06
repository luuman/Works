function $(obj){
	return document.getElementById(obj);
}

var skin={};

// 1.换肤方法

	//设置cookie,按钮选中状态,页面皮肤
	skin.setSkin=function(n){
		var skins =$("skin").getElementsByTagName("li");
		for (i=0;i<skins.length;i++)
		{
			skins[i].className="";//初始化按钮状态
		}
		skin.setCookie(n);//保存当前样式
		$("skin_"+n).className="selected";//设置选中皮肤按钮的样式
		$("cssfile").href="css/main"+n+".css";//设置页面样式
	}
// 2.存取cookie
	//将当前皮肤n存到cookie
	skin.setCookie=function(n){
		var expires=new Date();
		expires.setTime(expires.getTime()+24*60*60*365*1000);
		var flag="Skin_Cookie="+n;
		document.cookie=flag+";expires="+expires.toGMTString();
	}
	//返回用户设置的皮肤样式
	skin.readCookie=function(){
		var skin=0
		var mycookie=document.cookie;
		var name="Skin_Cookie";
		var start1=mycookie.indexOf(name+"=");
		if(start1==-1){
			skin=0;//如果没有设置则显示默认样式
		}
		else{
			var start=mycookie.indexOf("=",start1)+1;
			var end=mycookie.indexOf(";",start);
			if(end=-1){
				end=mycookie.length;
			}
			var values= unescape(mycookie.substring(start,end));
			if (values!=null)
			{
				skin=values;
			}
		}
		return skin;
		
	}
// 3.绑定换肤按钮事件
	skin.addEvent=function(){
		var skins =$("skin").getElementsByTagName("li");
		for (i=0;i<skins.length;i++)
		{
			skins[i].onclick=function(){skin.setSkin(this.id.substring(5))};
		}
	}

// 4.页面加载完成后设置皮肤样式
	window.onload=function(){
		skin.setSkin(skin.readCookie());//根据读取cookie返回值设置皮肤样式
		skin.addEvent();//绑定按钮事件
	}
