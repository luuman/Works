define("login-1.js"/*tpa=https://mp.weixin.qq.com/mpres/zh_CN/htmledition/js/wap_js/home/wap_js/home/login.js*/,["zepto-1.js"/*tpa=https://mp.weixin.qq.com/mpres/zh_CN/htmledition/js/wap_js/home/biz_wap/zepto/zepto.js*/,"event-1.js"/*tpa=https://mp.weixin.qq.com/mpres/zh_CN/htmledition/js/wap_js/home/biz_wap/zepto/event.js*/,"ajax-1.js"/*tpa=https://mp.weixin.qq.com/mpres/zh_CN/htmledition/js/wap_js/home/biz_wap/zepto/ajax.js*/,"cookie-1.js"/*tpa=https://mp.weixin.qq.com/mpres/zh_CN/htmledition/js/wap_js/home/biz_common/utils/cookie.js*/,"hud-1.js"/*tpa=https://mp.weixin.qq.com/mpres/zh_CN/htmledition/js/wap_js/home/wap_js/common/ui/hud.js*/,"Tips-1.js"/*tpa=https://mp.weixin.qq.com/mpres/zh_CN/htmledition/js/wap_js/home/wap_js/common/ui/Tips.js*/,"http-1.js"/*tpa=https://mp.weixin.qq.com/mpres/zh_CN/htmledition/js/wap_js/home/wap_js/common/utils/http.js*/],function(e){
"use strict";
function t(){
return""==$.trim(i.val())?-1:""==$.trim(s.val())?-1:1==v&&""==$.trim(u.val())?-2:!0;
}
function n(){
1==v&&b.attr("src","/cgi-bin/verifycode?username="+$.trim(i.val())+"&r="+ +new Date);
}
function r(){
i=$("#js_input_username"),s=$("#js_input_password"),u=$("#js_input_imgcode"),m=$("#js_input_remember"),
f=$("#js_btn_submit"),l=$("#js_btn_changeimg"),b=$("#js_img_code"),p=$("#js_div_imgcode"),
_=$("#js_form_login");
}
function a(){
var e=localStorage.getItem(k);
e&&"EXPIRED"!=e&&i.val(e),t();
}
function o(){
l.on("click",function(){
n();
}),i.on("blur change input",function(){
t();
}),s.on("blur change input",function(){
t();
}),u.on("blur change input",function(){
t();
}),_.on("submit",function(){
var e=t();
if(1!=e)return h.showText(-1==e?"请填写帐号密码":"请填写验证码",g),!1;
if(f.hasClass("actived")){
var r={
username:$.trim(i.val()),
pwd:$.md5(s.val().substr(0,16)),
imgcode:$.trim(u.val()),
uin:wx.uin,
key:wx.key,
pass_ticket:wx.pass_ticket
};
return m.is(":checked")?localStorage.setItem(k,r.username):localStorage.removeItem(k),
f.html("登录中...").removeClass("actived"),j.post({
url:"/cgi-bin/mobilelogin",
data:r
},function(e){
f.html("登录").addClass("actived");
var t="";
switch(e.base_resp.ret+""){
case"0":
var r=e.redirect_url.replace("/cgi-bin/home?t=home/index","/cgi-bin/home?t=wap_templates/home/index");
r==e.redirect_url?t="系统错误，请稍候再试。":(location.href=r+"&mod=wap",h.showText("成功登录"));
break;

case"-1":
t="系统错误，请稍后再试";
break;

case"-2":
i.focus(),d.err("帐号或密码错误");
break;

case"-7":
t="该帐号访问受限";
break;

case"-8":
v=!0,p.show(),u.val("").focus(),d.err("请输入图中的验证码");
break;

case"-21":
t="不存在该帐户";
break;

case"-23":
s.focus(),t="帐号或密码错误";
break;

case"-25":
t="海外帐号请在海外版登录";
break;

case"-26":
t="该会议号已过期";
break;

case"-27":
u.val("").focus(),d.err("验证码不正确");
break;

case"15400":
t="帐号未实名认证，请用PC版登录";
break;

case"15401":
t="帐号未完成注册，请用PC版登录";
break;

case"15402":
t="帐号已被冻结，请用PC版登录";
break;

case"15403":
t="帐号需要修改密码，请用PC版登录";
break;

case"15404":
case"15405":
case"15406":
t="帐号存在安全隐患，请用PC版登录";
break;

case"15407":
t="企业帐号无法登录";
break;

case"15408":
alert("暂只支持在管理员或运营者的微信中登录");
break;

case"15409":
t="请在微信内登录";
break;

case"15410":
alert("微信公众平台（手机版）正在内测，你的公众号不在白名单中，无法登录");
break;

case"15412":
location.href=e.redirect_url;
break;

case"15413":
t="帐号存在安全隐患，请用PC版登录";
break;

default:
t="未知错误";
}
""!=t&&h.showText(t,g),0!=e.base_resp.ret&&n();
},function(){
h.showText("网络错误",1500);
}),!1;
}
});
}
function c(){
r(),a(),o();
}
e("zepto-1.js"/*tpa=https://mp.weixin.qq.com/mpres/zh_CN/htmledition/js/wap_js/home/biz_wap/zepto/zepto.js*/),e("event-1.js"/*tpa=https://mp.weixin.qq.com/mpres/zh_CN/htmledition/js/wap_js/home/biz_wap/zepto/event.js*/),e("ajax-1.js"/*tpa=https://mp.weixin.qq.com/mpres/zh_CN/htmledition/js/wap_js/home/biz_wap/zepto/ajax.js*/);
var i,s,u,m,f,l,p,b,_,h=(e("cookie-1.js"/*tpa=https://mp.weixin.qq.com/mpres/zh_CN/htmledition/js/wap_js/home/biz_common/utils/cookie.js*/),e("hud-1.js"/*tpa=https://mp.weixin.qq.com/mpres/zh_CN/htmledition/js/wap_js/home/wap_js/common/ui/hud.js*/)),d=e("Tips-1.js"/*tpa=https://mp.weixin.qq.com/mpres/zh_CN/htmledition/js/wap_js/home/wap_js/common/ui/Tips.js*/),j=e("http-1.js"/*tpa=https://mp.weixin.qq.com/mpres/zh_CN/htmledition/js/wap_js/home/wap_js/common/utils/http.js*/),v=!1,g=2e3,k="remember_acct_"+wx.uin;
c(),function(e){
function t(e,t){
var n=(65535&e)+(65535&t),r=(e>>16)+(t>>16)+(n>>16);
return r<<16|65535&n;
}
function n(e,t){
return e<<t|e>>>32-t;
}
function r(e,r,a,o,c,i){
return t(n(t(t(r,e),t(o,i)),c),a);
}
function a(e,t,n,a,o,c,i){
return r(t&n|~t&a,e,t,o,c,i);
}
function o(e,t,n,a,o,c,i){
return r(t&a|n&~a,e,t,o,c,i);
}
function c(e,t,n,a,o,c,i){
return r(t^n^a,e,t,o,c,i);
}
function i(e,t,n,a,o,c,i){
return r(n^(t|~a),e,t,o,c,i);
}
function s(e,n){
e[n>>5]|=128<<n%32,e[(n+64>>>9<<4)+14]=n;
var r,s,u,m,f,l=1732584193,p=-271733879,b=-1732584194,_=271733878;
for(r=0;r<e.length;r+=16)s=l,u=p,m=b,f=_,l=a(l,p,b,_,e[r],7,-680876936),_=a(_,l,p,b,e[r+1],12,-389564586),
b=a(b,_,l,p,e[r+2],17,606105819),p=a(p,b,_,l,e[r+3],22,-1044525330),l=a(l,p,b,_,e[r+4],7,-176418897),
_=a(_,l,p,b,e[r+5],12,1200080426),b=a(b,_,l,p,e[r+6],17,-1473231341),p=a(p,b,_,l,e[r+7],22,-45705983),
l=a(l,p,b,_,e[r+8],7,1770035416),_=a(_,l,p,b,e[r+9],12,-1958414417),b=a(b,_,l,p,e[r+10],17,-42063),
p=a(p,b,_,l,e[r+11],22,-1990404162),l=a(l,p,b,_,e[r+12],7,1804603682),_=a(_,l,p,b,e[r+13],12,-40341101),
b=a(b,_,l,p,e[r+14],17,-1502002290),p=a(p,b,_,l,e[r+15],22,1236535329),l=o(l,p,b,_,e[r+1],5,-165796510),
_=o(_,l,p,b,e[r+6],9,-1069501632),b=o(b,_,l,p,e[r+11],14,643717713),p=o(p,b,_,l,e[r],20,-373897302),
l=o(l,p,b,_,e[r+5],5,-701558691),_=o(_,l,p,b,e[r+10],9,38016083),b=o(b,_,l,p,e[r+15],14,-660478335),
p=o(p,b,_,l,e[r+4],20,-405537848),l=o(l,p,b,_,e[r+9],5,568446438),_=o(_,l,p,b,e[r+14],9,-1019803690),
b=o(b,_,l,p,e[r+3],14,-187363961),p=o(p,b,_,l,e[r+8],20,1163531501),l=o(l,p,b,_,e[r+13],5,-1444681467),
_=o(_,l,p,b,e[r+2],9,-51403784),b=o(b,_,l,p,e[r+7],14,1735328473),p=o(p,b,_,l,e[r+12],20,-1926607734),
l=c(l,p,b,_,e[r+5],4,-378558),_=c(_,l,p,b,e[r+8],11,-2022574463),b=c(b,_,l,p,e[r+11],16,1839030562),
p=c(p,b,_,l,e[r+14],23,-35309556),l=c(l,p,b,_,e[r+1],4,-1530992060),_=c(_,l,p,b,e[r+4],11,1272893353),
b=c(b,_,l,p,e[r+7],16,-155497632),p=c(p,b,_,l,e[r+10],23,-1094730640),l=c(l,p,b,_,e[r+13],4,681279174),
_=c(_,l,p,b,e[r],11,-358537222),b=c(b,_,l,p,e[r+3],16,-722521979),p=c(p,b,_,l,e[r+6],23,76029189),
l=c(l,p,b,_,e[r+9],4,-640364487),_=c(_,l,p,b,e[r+12],11,-421815835),b=c(b,_,l,p,e[r+15],16,530742520),
p=c(p,b,_,l,e[r+2],23,-995338651),l=i(l,p,b,_,e[r],6,-198630844),_=i(_,l,p,b,e[r+7],10,1126891415),
b=i(b,_,l,p,e[r+14],15,-1416354905),p=i(p,b,_,l,e[r+5],21,-57434055),l=i(l,p,b,_,e[r+12],6,1700485571),
_=i(_,l,p,b,e[r+3],10,-1894986606),b=i(b,_,l,p,e[r+10],15,-1051523),p=i(p,b,_,l,e[r+1],21,-2054922799),
l=i(l,p,b,_,e[r+8],6,1873313359),_=i(_,l,p,b,e[r+15],10,-30611744),b=i(b,_,l,p,e[r+6],15,-1560198380),
p=i(p,b,_,l,e[r+13],21,1309151649),l=i(l,p,b,_,e[r+4],6,-145523070),_=i(_,l,p,b,e[r+11],10,-1120210379),
b=i(b,_,l,p,e[r+2],15,718787259),p=i(p,b,_,l,e[r+9],21,-343485551),l=t(l,s),p=t(p,u),
b=t(b,m),_=t(_,f);
return[l,p,b,_];
}
function u(e){
var t,n="";
for(t=0;t<32*e.length;t+=8)n+=String.fromCharCode(e[t>>5]>>>t%32&255);
return n;
}
function m(e){
var t,n=[];
for(n[(e.length>>2)-1]=void 0,t=0;t<n.length;t+=1)n[t]=0;
for(t=0;t<8*e.length;t+=8)n[t>>5]|=(255&e.charCodeAt(t/8))<<t%32;
return n;
}
function f(e){
return u(s(m(e),8*e.length));
}
function l(e,t){
var n,r,a=m(e),o=[],c=[];
for(o[15]=c[15]=void 0,a.length>16&&(a=s(a,8*e.length)),n=0;16>n;n+=1)o[n]=909522486^a[n],
c[n]=1549556828^a[n];
return r=s(o.concat(m(t)),512+8*t.length),u(s(c.concat(r),640));
}
function p(e){
var t,n,r="0123456789abcdef",a="";
for(n=0;n<e.length;n+=1)t=e.charCodeAt(n),a+=r.charAt(t>>>4&15)+r.charAt(15&t);
return a;
}
function b(e){
return unescape(encodeURIComponent(e));
}
function _(e){
return f(b(e));
}
function h(e){
return p(_(e));
}
function d(e,t){
return l(b(e),b(t));
}
function j(e,t){
return p(d(e,t));
}
e.md5=function(e,t,n){
return t?n?d(t,e):j(t,e):n?_(e):h(e);
};
}("function"==typeof Zepto?Zepto:this);
});