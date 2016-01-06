define("cookie-2.js"/*tpa=https://mp.weixin.qq.com/mpres/zh_CN/htmledition/js/biz_common/utils/biz_common/utils/cookie.js*/,[],function(){
var e={
get:function(e){
if(""==e)return"";
var t=new RegExp(e+"=([^;]*)"),n=document.cookie.match(t);
return n&&n[1]||"";
},
set:function(e,t,n){
var o=new Date;
return o.setDate(o.getDate()+(n||1)),n=o.toGMTString(),document.cookie=e+"="+t+";expires="+n,
!0;
}
};
return e;
});