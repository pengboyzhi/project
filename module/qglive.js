//首页-限时抢购

export    class Qglive{
        constructor(options){
            this.prev = options.prev;
            this.next = options.next;
            this.ul = options.ul;
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
        		url:"data/qglive.json",
        		success:function(res){
//      			console.log(res)
        			that.res = res;
        			that.display()
        		}
        	});
        }
        display(){
        	var str="";
        	for(var i=0;i<this.res.length;i++){
        		str +=`
        			<li>
        				<a href="#" class="goodsdet" goodsId="${this.res[i].goodId}">
						<div class="time"><span class="iconfont">&#xe6d0;</span>${this.res[i].time}</div>
						<div class="imgbox">
							<img src="${this.res[i].src}"/>
						</div>	
						<p>${this.res[i].name}</p>
						<div class="buyIt">
							<span class="price">${this.res[i].price}</span>
							<span class="old_price">${this.res[i].price_old}</span>
							<u class="buyBtn">立即订购</u>
						</div>
						</a>
					</li>
        		
        		`
        		
        	}
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
        	
        	
        }
     
    }

