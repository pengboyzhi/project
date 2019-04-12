//首页JS
import {} from "../libs/jquery.js";
import {} from "../libs/jquery.cookie.js";
import {Swiper} from "../module/swiper.js";
import {Qglive} from "../module/qglive.js";
import {Newgoods} from "../module/newgoods.js";
import {Pagescroll} from "../module/pagescroll.js";
import {Islogin} from "../module/isLogin.js";
import {Login} from "../module/login.js";

new Swiper();
new Qglive(
	{prev:$("#QGlive").find(".prev"),
	 next:$("#QGlive").find(".next"),
	 ul:$("#QGlive").find("ul")
	}
)
new Newgoods(
	{change:$("#newgoods").find("s"),
	 ul:$("#newgoods").find("ul"),
	 displayNum:4,
	 min:17,
	 max:41
	}
)
new Newgoods(
	{
	 ul:$("#activity").find("ul"),
	 displayNum:4,
	 min:22,
	 max:25
	}
)
new Newgoods(
	{
	 ul:$("#light-energy").find("ul"),
	 displayNum:4,
	 min:26,
	 max:29
	}
)
new Newgoods(
	{
	 ul:$("#easycook").find("ul"),
	 displayNum:4,
	 min:30,
	 max:33
	}
)
new Newgoods(
	{
	 ul:$("#clothes").find("ul"),
	 displayNum:4,
	 min:34,
	 max:37
	}
)
new Newgoods(
	{
	 ul:$("#decoration").find("ul"),
	 displayNum:4,
	 min:38,
	 max:41
	}
)
new Newgoods(
	{
	 ul:$("#good-things").find("ul"),
	 displayNum:8,
	 min:17,
	 max:41
	}
)
new Pagescroll(
	{
	 headtop:$("#top-search"),
	 floor:$("#floor"),
	 arr:[$("#QGlive"),$("#newgoods"),$("#activity"),$("#light-energy"),$("#easycook"),$("#clothes"),$("#decoration"),$("#good-things"),$("#footer")]
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















