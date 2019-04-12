//加入购物车

export    class Addcart{
        constructor(options){
			this.buy = options.buy;
			this.goodsloc = "";
			this.goodsid = "";
            this.onoff = true;
            this.goodsnum=options.goodsnum;
            this.goodssum=0;
            this.ball=options.ball;
            this.init();
            this.timer="";
            this.count=0;
        }
        init(){
			this.addevent();
		}
        addevent(){
        	var that = this;
        	this.onoff = true;
        	
        	this.buy.on("click","s",function(){
        		that.goodsid = $(this).attr("goodsid");
        		if($.cookie("goodsloc") == null){
        			that.goodsloc = [];
        		}else{
        			that.goodsloc = JSON.parse($.cookie("goodsloc"))
        		}
        		if(that.goodsloc.length<1){
        			that.goodsloc.push({"goodsid":that.goodsid,"num":1});
        		}else{
        			for(var i=0;i<that.goodsloc.length;i++){
        				if(that.goodsloc[i].goodsid == that.goodsid){
        					that.goodsloc[i].num++;
        					that.onoff = false;
        				}
        				
        			}
        			if(that.onoff){
        				that.goodsloc.push({"goodsid":that.goodsid,"num":1});
        			}
        		}
        		that.goodssum=0;
        		for(var i=0;i<that.goodsloc.length;i++){
        			that.goodssum += that.goodsloc[i].num
        		}
        		$.cookie("goodsloc",JSON.stringify(that.goodsloc));
        		if(that.goodssum<100){
        			that.goodsnum.text(that.goodssum);
        		}else{
        			that.goodsnum.html('<s style="font-size:8px;color:#fff">99+<s>');
        		}
        		
        	})
        	that.jump();
        }
     	jump(){
     		var that = this;
     		console.log(this.goodsnum.parent().offset().left)
     		this.buy.on("click","s",function(evevt){
     			var t =$(window).scrollTop()
     			console.log(t)
     			//鼠标点击加入购物车  出现效果
  			that.ball.css({left:event.clientX-10,top:$(window).scrollTop()+event.clientY-10})
     			that.ball.show();
     			var x1 = event.clientX-10;
                var y1 = $(window).scrollTop()+event.clientY-10;
                var x2 = that.goodsnum.parent().offset().left;
                var y2 = that.goodsnum.parent().offset().top;
                var a = 0.0023;
                that.count=0; 
                var b = (y2-y1 - a*(x2-x1)*(x2-x1))/(x2-x1);
                 clearInterval(that.timer);
                that.timer = setInterval(function(){
                    that.count+=40;
                    var x = that.count;
                    var y = a*x*x + b*x;
                    that.ball.css({
                    	left:x1 + x,
                    	top:y1 + y
                    })
                    if(that.ball.offset().left >= x2+10){
                        clearInterval(that.timer);
                        that.ball.hide();
                    }
                },30)
     		})
     	}
    }
        

