define("hud-2.js"/*tpa=https://mp.weixin.qq.com/mpres/zh_CN/htmledition/js/wap_js/common/ui/wap_js/common/ui/hud.js*/,["tips_light.css"/*tpa=https://mp.weixin.qq.com/mpres/zh_CN/htmledition/js/wap_js/common/ui/wap_style/widget/tips/tips_light.css*/,"zepto-3.js"/*tpa=https://mp.weixin.qq.com/mpres/zh_CN/htmledition/js/wap_js/common/ui/biz_wap/zepto/zepto.js*/,"spin-1.js"/*tpa=https://mp.weixin.qq.com/mpres/zh_CN/htmledition/js/wap_js/common/ui/biz_common/utils/spin.js*/],function(s){
"use strict";
function i(){
$("body").append(l),d=$("#js_hud"),p=$("#js_hud_icon"),u=$("#js_hud_text");
}
function t(s,i){
o(),u.html(s),d.show().addClass("hud_texting"),"undefined"!=typeof i&&setTimeout(e,i);
}
function n(){
o(),h.spin(p.get(0)),d.show();
}
function e(){
o(),d.hide();
}
function o(){
d.removeClass("hud_loading hud_texting"),u.html(""),h.stop(),clearTimeout(a);
}
s("tips_light.css"/*tpa=https://mp.weixin.qq.com/mpres/zh_CN/htmledition/js/wap_js/common/ui/wap_style/widget/tips/tips_light.css*/),s("zepto-3.js"/*tpa=https://mp.weixin.qq.com/mpres/zh_CN/htmledition/js/wap_js/common/ui/biz_wap/zepto/zepto.js*/);
var d,p,u,_=s("spin-1.js"/*tpa=https://mp.weixin.qq.com/mpres/zh_CN/htmledition/js/wap_js/common/ui/biz_common/utils/spin.js*/),l='<div id="js_hud"  class="toast_tips" style="display:none;"><div id="js_hud_icon"></div><p id="js_hud_text" class="tips_title"></p><span class="vm_box"></span></div>',a=null,h=new _({
lines:12,
width:2,
length:5,
radius:6,
color:"rgba(255,255,255,1)"
});
return i(),{
showText:t,
showLoading:n,
hide:e
};
});