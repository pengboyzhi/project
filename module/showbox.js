//购物车页面的按钮
export    class Showbox{
        constructor(options){
            this.tbody = options.tbody;
			this.alert = options.alert;
			this.close = options.close;
			this.yes = options.yes;
			this.no = options.no;
			 this.init();
        }
        init(){
        	this.addevent();
			
			
        }
        addevent(){
        	var that = this;
        	this.tbody.on("click",".delete",function(){
        		that.alert.show();
        	})
        	this.close.on("click",function(){
        		that.alert.hide();
        	})
        	this.yes.on("click",function(){
        		that.alert.hide();
        	})
        	this.no.on("click",function(){
        		that.alert.hide();
        	})
        	$("body").on("click",".goodsdet",function(event){
        		event.preventDefault();
        		location.href = `goodsdetails.html?goodsId=${$(this).attr("goodsId")}`;
        	})
        	
        	
        }
        
			
		
		
     
    }


