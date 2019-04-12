//商品列表页JS
import {} from "../libs/jquery.js";
import {Moregoods} from "../module/newgoods-more.js";
import {} from "../libs/jquery.cookie.js";
import {Islogin} from "../module/isLogin.js";
import {Login} from "../module/login.js";

new Moregoods(
	{
	 ul:$("#goodslist").find("ul"),
	 more:$("#more").find("span"),
	 displayNum:8,
	 ulheight:776,
	 min:17,
	 max:41
	}
)
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













