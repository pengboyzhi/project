//详情页JS
import {} from "../libs/jquery.js";
import {} from "../libs/jquery.cookie.js";
import {Islogin} from "../module/isLogin.js";
import {Login} from "../module/login.js";
import {Enlarge} from "../module/enlarge.js";
import {Detlive} from "../module/detlive.js";
import {Addcart} from "../module/addcart.js";

new Login(
	{
	 name:$("#user"),
	 usertip1:$("#usertip1"),
	 pass1:$("#pass1"),
	 usertip2:$("#usertip2"),
	 usertip3:$("#usertip3"),
	 log:$("#log"),
	 remember:$("#remember"),
	 url:"http://www.liyangyf.com/ctrl/login.php",
	 rightAccount:$("#right-account").find(".log-in")
	}
)
new Islogin(
	{
	hello:$("#hello"),
	cart:$(".cart"),
	rightAccount:$("#right-account").find(".log-in"),
	goodsnum:$(".cart").find(".num")
	
	}
)
new Enlarge(
	{oleft:$("#left")[0],
	 oright:$("#right")[0],
	 op:$("#left").find("p")[0],
	 oimg:$("#right").find("img")[0],
	 ospan:$("#left").find("span")[0],
	 bImg:$("#right").find("img"),
	 sImg:$("#left").find("img")
	 
	}
)
var href = location.href;
var obj ={};
if (href.indexOf("?") != -1){
	 	href = href.substr(href.indexOf("?") + 1);
    	href = href.split('&');
    	for(var i=0;i<href.length;i++){
    		obj[href[i].split('=')[0]]=href[i].split('=')[1]
    		
    	}
	
	 
}

new Detlive(
	{prev:$("#details").find(".prev"),
	 next:$("#details").find(".next"),
	 ul:$("#details").find("ul"),
	 bImg:$("#right").find("img"),
	 sImg:$("#left").find("img"),
	 goodsId:obj.goodsId,
	 name:$(".details-r").children(".name"),
	 dis:$(".details-r").children(".dis"),
	 price:$(".details-r").children(".price").children('u'),
	 oldprice:$(".details-r").children(".price").children('span'),
	 buy:$(".details-r").children(".buy")
	}
)
new Addcart(
	{
	 buy:$(".details-r").children(".buy"),
	 goodsnum:$(".cart").find(".num"),
	 ball:$("#ball")
	}
)















