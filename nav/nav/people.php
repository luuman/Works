<?php
	header("Content-type:text/html;charset=utf-8");
		$link=@mysql_connect(SAE_MYSQL_HOST_M.':'.SAE_MYSQL_PORT,SAE_MYSQL_USER,SAE_MYSQL_PASS);

		if($link)
		{
		    mysql_select_db(SAE_MYSQL_DB,$link);
		
		}	
			mysql_set_charset('utf8');
	require("functions.php");
	//Userinfo型授权
	$appid = "wxf40da012199af6f2";
	$appsecret = "039bfa95637e2dcbda8c1d48e2efae31";
	$redirect_uri = "http://1.ercikaifa.sinaapp.com/people.php";
	//第一步：用户同意授权，获取code（需要用户同意授权）
	$snsapi_userinfo_url = "https://open.weixin.qq.com/connect/oauth2/authorize?appid={$appid}&redirect_uri={$redirect_uri}&response_type=code&scope=snsapi_base&state=123#wechat_redirect
";						
	if(!isset($_GET['code']))
	{
		header("Location:{$snsapi_userinfo_url}");
		exit;
	}
	//获取code
	$code = $_GET['code'];

	//第二步：通过code换取网页授权access_token（同Base一样）
	$url = "https://api.weixin.qq.com/sns/oauth2/access_token?appid={$appid}&secret={$appsecret}&code={$code}&grant_type=authorization_code";
	$access_token_arr = https_request($url);

	// $access_token = $access_token_arr['access_token'];
	// $openid = $access_token_arr['openid'];
	// //第四步：拉取用户信息(需scope为 snsapi_userinfo)
	// $userinfo_url = "https://api.weixin.qq.com/sns/userinfo?access_token={$access_token}&openid={$openid}&lang=zh_CN";
	// $userinfo_arr = https_request($userinfo_url);

	$sql="select * from users where openid='$access_token_arr[openid]'";
	$result=mysql_query($sql);
	$user=mysql_fetch_assoc($result);
?>
<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<title>U范堂</title>
	<meta name="keywords" content="U范堂,美食," />
	<meta name="description" content="U范堂——简单吃好饭！" />
	<!-- <link rel="shortcut icon" href="image/favicon.ico"> -->
	<meta name="viewport" content="width=device-width,height=device-height,initial-scale=1.0,maximum-scale=1.0,user-scalable=no">
	<link type="text/css" rel="stylesheet" href="css/style.css" />
</head>
<body>
    <div class="bg1"></div>
    <div class="content">
    	<div class="logo">
    	</div>
		<form action="add.php" method="post">
			<div class="add">
				<input id="user" required="required" type="text" name="addres" placeholder="请输入收餐地址" value="<?php echo $user['addres'];?>">
				<input type="hidden" name="openid" value="<?php echo $access_token_arr['openid'];?>">
			<div id="adds"></div>
			</div>
			<div class="arr">
				<button class="sub" type="submit"></button>
			</div>
		</form>
    </div>
</body>
	<script>
		btn=document.getElementById('user');
		adds=document.getElementById('adds');
		btn.onkeyup=function() {
			user=eval(document.getElementById('user')).value;
			//创建Ajax对象
			xhr=new XMLHttpRequest();
			xhr.onreadystatechange=function(){
				if(xhr.readyState==4){
					str=xhr.responseText;
					if (user) {
						adds.innerHTML=str;
					}else{
						adds.innerHTML=null;
					}
					users=document.getElementById('user');
					obj_lis = document.getElementsByTagName("li");
					for(i=0;i<obj_lis.length;i++){
						obj_lis[i].onclick = function(){
							users.value=this.innerHTML;
						}
					}
				}
			}
			xhr.open('post','ajax.php',true);
			xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
			xhr.send('add='+user);
		}
	</script>
    <script>
        var imgUrl = 'https://img.yzcdn.cn/upload_files/2015/12/06/FkP1kFyAXIEOzPieN2gRIwogX-Cx.jpg';
        var lineLink = 'http://1.ercikaifa.sinaapp.com/people.php';
        var descContent = "你的专属云端食堂！简单吃好饭！点击订餐！";
        var shareTitle = 'U范堂';
        var appid = 'wx0830d34aa0503af4';
        function shareFriend() {
            WeixinJSBridge.invoke('sendAppMessage',{
                "appid": appid,
                "img_url": imgUrl,
                "img_width": "640",
                "img_height": "640",
                "link": lineLink,
                "desc": descContent,
                "title": shareTitle
                }, function(res) {
                _report('send_msg', res.err_msg);
            })
        }
        function shareTimeline() {
            WeixinJSBridge.invoke('shareTimeline',{
                "img_url": imgUrl,
                "img_width": "640",
                "img_height": "640",
                "link": lineLink,
                "desc": descContent,
                "title": shareTitle
                }, function(res) {
                _report('timeline', res.err_msg);
            });
        }
        function shareWeibo() {
            WeixinJSBridge.invoke('shareWeibo',{
                "content": descContent,
                "url": lineLink,
                }, function(res) {
                _report('weibo', res.err_msg);
            });
        }
        // 当微信内置浏览器完成内部初始化后会触发WeixinJSBridgeReady事件。
        document.addEventListener('WeixinJSBridgeReady', function onBridgeReady() {
            // 发送给好友
            WeixinJSBridge.on('menu:share:appmessage', function(argv){
                shareFriend();
                });
            // 分享到朋友圈
            WeixinJSBridge.on('menu:share:timeline', function(argv){
                shareTimeline();
                });
            // 分享到微博
            WeixinJSBridge.on('menu:share:weibo', function(argv){
                shareWeibo();
                });
            }, false);
    </script>
</body>
</html>