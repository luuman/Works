define("http-2.js"/*tpa=https://mp.weixin.qq.com/mpres/zh_CN/htmledition/js/wap_js/common/utils/wap_js/common/utils/http.js*/,["zepto-4.js"/*tpa=https://mp.weixin.qq.com/mpres/zh_CN/htmledition/js/wap_js/common/utils/biz_wap/zepto/zepto.js*/,"ajax-3.js"/*tpa=https://mp.weixin.qq.com/mpres/zh_CN/htmledition/js/wap_js/common/utils/biz_wap/zepto/ajax.js*/],function(t){
"use strict";
function o(){}
function n(t,n,e,a){
var p=t;
p.data=$.extend(p.data||{},{
token:window.wx&&window.wx.token,
lang:"zh_CN",
mod:"wap",
r:Math.random().toString().substr(2),
f:"json"
}),p.success=n||o,p.error=e||o,p.complete=a||o,$.ajax(p);
}
function e(t,o,e,a){
t.type="GET",n(t,o,e,a);
}
function a(t,o,e,a){
t.type="POST",n(t,o,e,a);
}
return t("zepto-4.js"/*tpa=https://mp.weixin.qq.com/mpres/zh_CN/htmledition/js/wap_js/common/utils/biz_wap/zepto/zepto.js*/),t("ajax-3.js"/*tpa=https://mp.weixin.qq.com/mpres/zh_CN/htmledition/js/wap_js/common/utils/biz_wap/zepto/ajax.js*/),{
get:e,
post:a
};
});