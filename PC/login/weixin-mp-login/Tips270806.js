define("Tips-2.js"/*tpa=https://mp.weixin.qq.com/mpres/zh_CN/htmledition/js/wap_js/common/ui/wap_js/common/ui/Tips.js*/,["zepto-3.js"/*tpa=https://mp.weixin.qq.com/mpres/zh_CN/htmledition/js/wap_js/common/ui/biz_wap/zepto/zepto.js*/,"page_tips.css"/*tpa=https://mp.weixin.qq.com/mpres/zh_CN/htmledition/js/wap_js/common/ui/wap_style/widget/page_tips.css*/],function(s){
"use strict";
s("zepto-3.js"/*tpa=https://mp.weixin.qq.com/mpres/zh_CN/htmledition/js/wap_js/common/ui/biz_wap/zepto/zepto.js*/),s("page_tips.css"/*tpa=https://mp.weixin.qq.com/mpres/zh_CN/htmledition/js/wap_js/common/ui/wap_style/widget/page_tips.css*/),$("body").append('<div class="page_tips" id="js_page_tips" style="display:none;"></div>');
var e=$("#js_page_tips"),p={
err:function(s){
e.html(s).show(),setTimeout(function(){
e.hide();
},3e3);
}
};
return p;
});