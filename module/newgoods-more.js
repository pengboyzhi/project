//商品页的加载更多

export    class Moregoods{
        constructor(options){
            this.change = options.change;
            this.more = options.more;
            this.ul = options.ul;
		    this.displayNum= options.displayNum;
		    this.ulheight = options.ulheight
			this.min = options.min;
			this.max = options.max;
            this.index = 1;
            this.arr = [];
            this.timerId="";
            this.init();
        }
        init(){
//      	console.log(this.prev,this.next,this.ul)
			this.load()
			this.addevent();
        }
        load(){
        	var that = this;
        	$.ajax({
        		url:"data/newgoods.json",
        		success:function(res){
//      			console.log(res)
        			that.res = res;
        			that.goodsmore()
        		}
        	});
        }
        display(){
        	var str="";
        	for(var j=0;j<this.arr.length;j++){
	        	for(var i=0;i<this.res.length;i++){
	        		if(this.res[i].goodId==this.arr[j]){
		        		str +=`
							<li>
									<a href="#" class="goodsdet" goodsId="${this.res[i].goodId}">
										
										<div class="imgbox">
											<img src="${this.res[i].src}""/>
										</div>	
										<h5>${this.res[i].dis}"</h5>
										<p>${this.res[i].name}</p>
										<div class="buyIt">
											<span class="price">${this.res[i].price}</span>
											<span class="old_price">${this.res[i].price}</span>
										</div>
									</a>
									
								</li>
		        		`		
	        		}
	        	}
        	}
        	this.ul.css({height:this.index*this.ulheight});
        	this.ul.parent(".box").css({height:this.index*this.ulheight});
        	this.ul.parent(".box").parent(".show").css({height:this.index*this.ulheight});
        	this.ul.html(str);
        	this.more.text("加载更多")
        	this.more.parent().find("img").hide();
        	
        }
        goodsmore(){
        	var that=this;
        	//做换一批的功能
        	
        	var num =0;
        	do{
        		num = this.random(this.min,this.max);
        		
        			this.arr.push(num)
        		
        	}while(this.arr.length<this.index*this.displayNum){
        		console.log(this.arr);
        		this.display();
        		
        	}
        }
        addevent(){
        	var that = this;
        	if(this.more){
        		this.more.on("click",function(){
        			that.more.text("正在加载中...");
        			that.more.parent().find("img").show();
        			clearTimeout(that.timerId)
        			that.timerId = setTimeout(()=>{
        				that.index++;
        				that.goodsmore();
        				
        			},1000)
        		})
        		
        	}
        	$("body").on("click",".goodsdet",function(event){
        		event.preventDefault();
        		location.href = `goodsdetails.html?goodsId=${$(this).attr("goodsId")}`;
        	})
        	
        }
        random(min,max){
        	return Math.round(Math.random()*(max-min)+min)
        }
     
    }


