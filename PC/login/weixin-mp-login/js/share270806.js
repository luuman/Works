!function(){
var e=function(){
var e=window.WeixinJSBridge,n="",i="微信公众平台手机版（内测中）",t="通过微信公众平台手机版管理你的公众号",o="https://mp.weixin.qq.com/cgi-bin/loginpage?t=wxm2-login&lang=zh_CN&mod=wap#wechat_redirect",a="http://mmbiz.qpic.cn/mmbiz/Q3auHgzwzM5wLlGTou7JL2h7arP8KScktlOXUl0xkO5XO4eE1yz93nkib2rGen6FLaATpXUSFmicmlJHK2Fh49ag/300";
e.call("hideToolbar"),e.on("menu:share:appmessage",function(){
e.invoke("sendAppMessage",{
appid:n,
img_url:a,
img_width:"640",
img_height:"640",
link:o,
desc:t,
title:i
},function(){});
}),e.on("menu:share:timeline",function(){
e.invoke("shareTimeline",{
img_url:a,
img_width:"640",
img_height:"640",
link:o,
desc:t,
title:i
},function(){});
}),e.on("menu:share:email",function(){
e.invoke("sendEmail",{
content:o,
title:i
},function(){});
});
};
"undefined"!=typeof window.WeixinJSBridge&&window.WeixinJSBridge.invoke?e():document.addEventListener?document.addEventListener("WeixinJSBridgeReady",e,!1):document.attachEvent&&(document.attachEvent("WeixinJSBridgeReady",e),
document.attachEvent("onWeixinJSBridgeReady",e)),window.navigator.userAgent.match(/(android)\s([\d\.]+)/i)&&((new Image).src="/misc/jslog?level=error&id=55&content=[pageurl:"+encodeURIComponent(location.href)+",ua:"+encodeURIComponent(window.navigator.userAgent)+"]"),
window.navigator.userAgent.match(/ip(od|ad|hone)/i)&&((new Image).src="/misc/jslog?level=error&id=56&content=[pageurl:"+encodeURIComponent(location.href)+",ua:"+encodeURIComponent(window.navigator.userAgent)+"]");
}();