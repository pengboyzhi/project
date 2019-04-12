//商品详情页

export    class Detlive{
        constructor(options){
            this.prev = options.prev;
            this.next = options.next;
            this.ul = options.ul;
            this.goodsId=options.goodsId;
            this.bImg = options.bImg;
			this.sImg = options.sImg;
			this.name = options.name;
			this.dis = options.dis;
			this.price = options.price;
			this.oldprice = options.oldprice;
			this.buy = options.buy;
			
            this.index = 0;
            this.init()
        }
        init(){
//      	console.log(this.prev,this.next,this.ul)
			this.load()
        }
        load(){
        	var that = this;
        	$.ajax({
        		url:"data/newgoods.json",
        		success:function(res){
//      			console.log(res)
        			that.res = res;
        			that.display()
        		}
        	});
        }
        display(){
        	var str="";
        	var str2 = `
	        			<li goodsId="${this.res[4].goodId}">
							
							<div class="imgbox">
								<img src="${this.res[4].src}"/>
							</div>	
							
							
						</li>`;
	        		
        	for(var i=0;i<this.res.length;i++){
        		if(this.res[i].goodId == this.goodsId){
	        		str +=`
	        			<li goodsId="${this.res[i].goodId}">
							
							<div class="imgbox">
								<img src="${this.res[i].src}"/>
							</div>	
							
							
						</li>
	        		
	        		`
        			this.bImg.attr({src:this.res[i].src});
        			this.sImg.attr({src:this.res[i].src});
        		
        			this.name.html(`${this.res[i].name}`);
        			this.dis.html(`${this.res[i].dis}`);
        			this.price.html(`${this.res[i].price}`);
        			this.oldprice.html(`${this.res[i].price_old}`);
        			this.buy.html(`<b goodsId="${this.res[i].goodId}">立即购买</b>	<s goodsId="${this.res[i].goodId}">加入购物车</s>`);			
        		}
        		
        	}
        	str=str+str2+str+str2+str+str2+str+str2;
        	this.ul.html(str);        	
        	this.addevent();
        }
        addevent(){
        	var that=this;
        	that.prev.on("click",function(){
        		if(that.index<=that.ul.find("li").length-3){
        			that.index += 3;
        			var l=-1 * that.ul.find("li").eq(that.index)[0].offsetLeft;
       			console.log(that.index,l,that.ul.find("li").length)
        			that.ul.stop().animate({left:l})	
        			if(that.index>that.ul.find("li").length-3){
        				that.prev.hide()
        			}else if(that.index>=3&&that.index<=that.ul.find("li").length-3){
        				that.prev.show();
        				that.next.show();
        			}
        		}
        	})
        	that.next.on("click",function(){
        		if(that.index>=3){
        			that.index -= 3;
        			var l=-1 * that.ul.find("li").eq(that.index)[0].offsetLeft;
        			console.log(that.index,l,that.ul.find("li").length)
        			that.ul.stop().animate({left:l})	
        			if(that.index<3){
        				that.next.hide()
        			}else if(that.index>=3&&that.index<=that.ul.find("li").length-3){
        				that.prev.show();
        				that.next.show();
        			}
        		}
        	})
        	that.ul.on("click","img",function(){
        		that.bImg.attr({src:$(this).attr("src")});
        		that.sImg.attr({src:$(this).attr("src")});
        			
        	})
        	
        	
        	
        }
     
    }

