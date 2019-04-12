//轮播
export  class Swiper{
	        constructor(){
	            this.li = $("#banner").find("li");
	            this.btns = $("#banner .btn").find("u");
	            
	            this.swiper = $("#banner").find(".swiper-pic");
	            this.pre = 0;
	            this.next = 1;
	            this.timer = "";
	
	            this.init();
	       	}
	        init(){
	        	this.li.eq(0).css({"z-index":1,"opacity":1})
	        	this.autoPlay();
	        	this.chick();
	        }
	        show(pre,next){
	        	this.li.eq(pre).css("z-index",0);
	        	this.li.eq(next).css("z-index",1);
	        	this.li.eq(pre).stop().animate({"opacity":0},1000);
	        	this.li.eq(next).stop().animate({"opacity":1},1000);
	        	this.btns.find("span").removeClass("active");
	        	this.btns.find("span").eq(next).addClass("active");
	        	
	        }
	        autoPlay(){
	        	var that = this;
//	        	console.log(that.swiper);
	        	that.swiper.hover(function(){
	        		clearInterval(that.timer);
	        		
	        	},function(){
	        		
	        		that.timer = setInterval(()=>{
	        			if(that.next == 4){
	        				that.next = 0;
	        				that.pre = 4;
	        			}else{
	        				that.next++;
	        				that.pre = that.next - 1;
	        			}
	        			
	        			that.show(that.pre,that.next)
	        		},3000)
	        	})
	        }
	        chick(){
	        	var that=this;
	        	that.btns.on("click",function(){
	        		that.pre = that.next;
	        		that.next = $(this).index();
	        		console.log($(this).index(),that.pre,that.next)
	        		that.show(that.pre,that.next);
	        		console.log(6666)
	        	})
	        }
      }
