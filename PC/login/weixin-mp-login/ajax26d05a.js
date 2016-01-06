define("ajax-2.js"/*tpa=https://mp.weixin.qq.com/mpres/zh_CN/htmledition/js/biz_wap/zepto/biz_wap/zepto/ajax.js*/,["zepto-2.js"/*tpa=https://mp.weixin.qq.com/mpres/zh_CN/htmledition/js/biz_wap/zepto/biz_wap/zepto/zepto.js*/],function(t){
"use strict";
t("zepto-2.js"/*tpa=https://mp.weixin.qq.com/mpres/zh_CN/htmledition/js/biz_wap/zepto/biz_wap/zepto/zepto.js*/),function(t){
function e(e,a,n){
var r=t.Event(a);
return t(e).trigger(r,n),!r.isDefaultPrevented();
}
function a(t,a,n,r){
return t.global?e(a||v,n,r):void 0;
}
function n(e){
e.global&&0===t.active++&&a(e,null,"ajaxStart");
}
function r(e){
e.global&&!--t.active&&a(e,null,"ajaxStop");
}
function o(t,e){
var n=e.context;
return e.beforeSend.call(n,t,e)===!1||a(e,n,"ajaxBeforeSend",[t,e])===!1?!1:void a(e,n,"ajaxSend",[t,e]);
}
function i(t,e,n,r){
var o=n.context,i="success";
n.success.call(o,t,i,e),r&&r.resolveWith(o,[t,i,e]),a(n,o,"ajaxSuccess",[e,n,t]),
c(i,e,n);
}
function s(t,e,n,r,o){
var i=r.context;
r.error.call(i,n,e,t),o&&o.rejectWith(i,[n,e,t]),a(r,i,"ajaxError",[n,r,t||e]),c(e,n,r);
}
function c(t,e,n){
var o=n.context;
n.complete.call(o,e,t),a(n,o,"ajaxComplete",[e,n]),r(n);
}
function u(){}
function p(t){
return t&&(t=t.split(";",2)[0]),t&&(t==T?"html":t==b?"json":g.test(t)?"script":w.test(t)&&"xml")||"text";
}
function l(t,e){
return""==e?t:(t+"&"+e).replace(/[&?]{1,2}/,"?");
}
function d(e){
e.processData&&e.data&&"string"!=t.type(e.data)&&(e.data=t.param(e.data,e.traditional)),
!e.data||e.type&&"GET"!=e.type.toUpperCase()||(e.url=l(e.url,e.data),e.data=void 0);
}
function f(e,a,n,r){
var o=!t.isFunction(a);
return{
url:e,
data:o?a:void 0,
success:o?t.isFunction(n)?n:void 0:a,
dataType:o?r||n:n
};
}
function x(e,a,n,r){
var o,i=t.isArray(a),s=t.isPlainObject(a);
t.each(a,function(a,c){
o=t.type(c),r&&(a=n?r:r+"["+(s||"object"==o||"array"==o?a:"")+"]"),!r&&i?e.add(c.name,c.value):"array"==o||!n&&"object"==o?x(e,c,n,a):e.add(a,c);
});
}
var m,j,y=0,v=window.document,h=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,g=/^(?:text|application)\/javascript/i,w=/^(?:text|application)\/xml/i,b="application/json",T="text/html",S=/^\s*$/;
t.active=0,t.ajaxJSONP=function(e,a){
if(!("type"in e))return t.ajax(e);
var n,r,c=e.jsonpCallback,u=(t.isFunction(c)?c():c)||"jsonp"+ ++y,p=v.createElement("script"),l=window[u],d=function(e){
t(p).triggerHandler("error",e||"abort");
},f={
abort:d
};
return a&&a.promise(f),t(p).on("load error",function(o,c){
clearTimeout(r),t(p).off().remove(),"error"!=o.type&&n?i(n[0],f,e,a):s(null,c||"error",f,e,a),
window[u]=l,n&&t.isFunction(l)&&l(n[0]),l=n=void 0;
}),o(f,e)===!1?(d("abort"),f):(window[u]=function(){
n=arguments;
},p.src=e.url.replace(/=\?/,"="+u),v.head.appendChild(p),e.timeout>0&&(r=setTimeout(function(){
d("timeout");
},e.timeout)),f);
},t.ajaxSettings={
type:"GET",
beforeSend:u,
success:u,
error:u,
complete:u,
context:null,
global:!0,
xhr:function(){
return new window.XMLHttpRequest;
},
accepts:{
script:"text/javascript, application/javascript, application/x-javascript",
json:b,
xml:"application/xml, text/xml",
html:T,
text:"text/plain"
},
crossDomain:!1,
timeout:0,
processData:!0,
cache:!0
},t.ajax=function(e){
var a=t.extend({},e||{}),r=t.Deferred&&t.Deferred();
for(m in t.ajaxSettings)void 0===a[m]&&(a[m]=t.ajaxSettings[m]);
n(a),a.crossDomain||(a.crossDomain=/^([\w-]+:)?\/\/([^\/]+)/.test(a.url)&&RegExp.$2!=window.location.host),
a.url||(a.url=window.location.toString()),d(a),a.cache===!1&&(a.url=l(a.url,"_="+Date.now()));
var c=a.dataType,f=/=\?/.test(a.url);
if("jsonp"==c||f)return f||(a.url=l(a.url,a.jsonp?a.jsonp+"=?":a.jsonp===!1?"":"callback=?")),
t.ajaxJSONP(a,r);
var x,y=a.accepts[c],v={},h=function(t,e){
v[t.toLowerCase()]=[t,e];
},g=/^([\w-]+:)\/\//.test(a.url)?RegExp.$1:window.location.protocol,w=a.xhr(),b=w.setRequestHeader;
if(r&&r.promise(w),a.crossDomain||h("X-Requested-With","XMLHttpRequest"),h("Accept",y||"*/*"),
(y=a.mimeType||y)&&(y.indexOf(",")>-1&&(y=y.split(",",2)[0]),w.overrideMimeType&&w.overrideMimeType(y)),
(a.contentType||a.contentType!==!1&&a.data&&"GET"!=a.type.toUpperCase())&&h("Content-Type",a.contentType||"application/x-www-form-urlencoded"),
a.headers)for(j in a.headers)h(j,a.headers[j]);
if(w.setRequestHeader=h,w.onreadystatechange=function(){
if(4==w.readyState){
w.onreadystatechange=u,clearTimeout(x);
var e,n=!1;
if(w.status>=200&&w.status<300||304==w.status||0==w.status&&"file:"==g){
c=c||p(a.mimeType||w.getResponseHeader("content-type")),e=w.responseText;
try{
"script"==c?(1,eval)(e):"xml"==c?e=w.responseXML:"json"==c&&(e=S.test(e)?null:t.parseJSON(e));
}catch(o){
n=o;
}
n?s(n,"parsererror",w,a,r):i(e,w,a,r);
}else s(w.statusText||null,w.status?"error":"abort",w,a,r);
}
},o(w,a)===!1)return w.abort(),s(null,"abort",w,a,r),w;
if(a.xhrFields)for(j in a.xhrFields)w[j]=a.xhrFields[j];
var T="async"in a?a.async:!0;
w.open(a.type,a.url,T,a.username,a.password);
for(j in v)b.apply(w,v[j]);
return a.timeout>0&&(x=setTimeout(function(){
w.onreadystatechange=u,w.abort(),s(null,"timeout",w,a,r);
},a.timeout)),w.send(a.data?a.data:null),w;
},t.get=function(){
return t.ajax(f.apply(null,arguments));
},t.post=function(){
var e=f.apply(null,arguments);
return e.type="POST",t.ajax(e);
},t.getJSON=function(){
var e=f.apply(null,arguments);
return e.dataType="json",t.ajax(e);
},t.fn.load=function(e,a,n){
if(!this.length)return this;
var r,o=this,i=e.split(/\s/),s=f(e,a,n),c=s.success;
return i.length>1&&(s.url=i[0],r=i[1]),s.success=function(e){
o.html(r?t("<div>").html(e.replace(h,"")).find(r):e),c&&c.apply(o,arguments);
},t.ajax(s),this;
};
var D=encodeURIComponent;
t.param=function(t,e){
var a=[];
return a.add=function(t,e){
this.push(D(t)+"="+D(e));
},x(a,t,e),a.join("&").replace(/%20/g,"+");
};
}(Zepto);
var e=function(t){
return function(e,a,n,r,o,i,s){
s=0==s?s:!0,i=i||"json",a=a||{},"json"==i&&(a.f="json"),"undefined"!=typeof uin&&"undefined"!=typeof key&&""!=uin&&""!=key&&(a.uin=uin,
a.key=key),a.ajax=1,$.ajax({
type:t,
url:e,
async:s,
data:a,
dataType:i,
scriptCharset:"utf8",
success:function(t){
"string"https://mp.weixin.qq.com/mpres/zh_CN/htmledition/js/biz_wap/zepto/==typeof t&&(t=$.parseJSON(t)),t&&t.base_resp&&0==t.base_resp.ret?n&&n(t,a):r&&r(t,a);},error:function(t){r&&r(t,a);},complete:o||function(){}});};};return{get:e("GET"),
post:e("POST")
};
});