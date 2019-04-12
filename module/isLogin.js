//首页登录

export    class Islogin{
        constructor(options){
             
			 this.rem = "";
			 this.hello = options.hello;
			 this.cart = options.cart;
			 this.rightAccount = options.rightAccount;
			 this.goodsnum=options.goodsnum;
           	 this.goodssum=0;
           	 this.goodsloc=[];
//			 this.pass1 = options.pass1;
//			 this.usertip2 = options.usertip2;
			 
			 this.init();
        }
        init(){
			this.sayHello();
			this.logout();
			this.showcartsum();
			
        }
        sayHello(){
        	this.rem = $.cookie("remember")||$.cookie("tempRem");
//      	console.log(this.rem);
        	if(this.rem){
        		this.rem = JSON.parse(this.rem);
//      		console.log(this.rem.pass)
        		this.hello.html(`欢迎来到哈福网！${this.rem.user},你好    <u style="cursor:pointer"><a href="index.html" target="_parent">[注销]</a></u>`);
        		this.rightAccount.html(`<dt>欢迎来到哈福网</dt>
        								<img src="images/hg_img_0.png" style="text-align: center;width:120px;height:120px;margin-left:80px;"/>
										<b style="margin-left:100px;color:#999;">${this.rem.user},你好 </b>
        								`);
        		this.cart.on("click",function(){
        			location.href = "cart.html";
        		})
        		
        	}else{
        		this.hello.html('欢迎来到哈福网！<a href="login.html">[请登录]</a><a href="register.html">[免费注册]</a>');
        		this.rightAccount.html(`<dt>欢迎来到哈福网</dt>
					<dd><input type="text" name="user" id="user" placeholder="已验证手机/邮箱/用户名" /></dd>
					<dd><span id="usertip1">登录名可能是您的手机号、邮箱或用户名</span></dd>
					<dd><input type="password" name="pass" id="pass" placeholder="请输入密码" /></dd>
					<dd><span id="usertip2">您的密码可能为字母、数字或符号的组合</span></dd>
					<dd><span id="usertip3"></span></dd> 
					<dd><input type="button" name="log" id="log" value="立即登陆" /></dd>
					<dd><a href="#"> 忘记密码？</a><a href="register.html"> 立即注册</a></dd>`);
					
        		this.cart.on("click",function(){
        			location.href = "login.html";
        		})
        	}
        }
        logout(){
        	this.hello.on("click","u",function(){
//      		console.log("事件委托注销")
				$.cookie("remember",null);
				$.cookie("tempRem",null);
				$.cookie("goodsloc",null);
				history.go(0);
				
        	})
        }
        showcartsum(){
        	if($.cookie("goodsloc") == null){
        			this.goodssum=0;
        		}else{
        			this.goodsloc = JSON.parse($.cookie("goodsloc"))
        			this.goodssum=0;
        			for(var i=0;i<this.goodsloc.length;i++){
        			this.goodssum += this.goodsloc[i].num;
        			}
        		}
        		if(this.goodssum<100){
        			this.goodsnum.text(this.goodssum);
        		}else{
        			this.goodsnum.html('<s style="font-size:8px;color:#fff">99+<s>');
        		}
        }
        
    }


