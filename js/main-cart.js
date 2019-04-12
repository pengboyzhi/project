//购物车页面JS
import {} from "../libs/jquery.js";
import {} from "../libs/jquery.cookie.js";
import {Islogin} from "../module/isLogin.js";
import {Login} from "../module/login.js";
import {Showbox} from "../module/showbox.js";
import {Showcart} from "../module/showcart.js";


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
new Showbox({
	tbody:$(".table").find("tbody"),
	alert:$("#alert"),
	close:$("#alert").find("h3").children("span"),
	yes:$("#yes"),
	no:$("#no")
})
new Showcart({
	tbody:$(".table").find("tbody"),
	goodsnum:$(".cart").find(".num")
})















