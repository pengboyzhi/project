//商品页分页

export    class Pagescroll{
        constructor(options){
            this.headtop = options.headtop;
            this.floor = options.floor;
		    this.arr = options.arr;
		    this.init()
        }
        init(){
//      	console.log(999)
			this.fixShow();
			this.addevent();
        }
        fixShow(){
        	var that = this;
        	$(window).on("scroll",function(){
        		if($(window).scrollTop()>that.arr[0].offset().top){
        			that.headtop.slideDown(500);
        			that.floor.fadeIn(800);
        		}else{
        			that.headtop.slideUp(500);
        			that.floor.fadeOut(800);
        		}
        		for(var i=0;i<that.arr.length;i++){
   					if($(window).scrollTop()>that.arr[i].offset().top-120 && $(window).scrollTop()<=that.arr[i+1].offset().top-120){
        				that.floor.children("ul").children("li").removeClass("active")
        				that.floor.children("ul").children("li").eq(i).addClass("active");
        			}
        		}
	
        	})
        }
        addevent(){
        	var that = this;
        	for(let i=0;i<that.arr.length;i++){
        			that.floor.children("ul").children("li").eq(i).on("click",function(){
        				$("html").stop().animate({scrollTop :that.arr[i].offset().top-30});
        			})
        		

        		}
        	
        }
        
     
    }


