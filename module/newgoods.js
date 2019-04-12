//商品页

export    class Newgoods{
        constructor(options){
            this.change = options.change; 
            this.ul = options.ul;
		    this.displayNum= options.displayNum;
			this.min = options.min;
			this.max = options.max;
            this.index = 0;
            this.arr = [];
            this.init()
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
        			that.goodschange()
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
        	this.ul.html(str);
        	 
        }
        goodschange(){
        	var that=this;
        	//做换一批的功能
        	this.arr=[];
        	var num =0;
        	do{
        		num = this.random(this.min,this.max);
        		if(this.arr.indexOf(num) == -1){
        			this.arr.push(num)
        		}
        	}while(this.arr.length<this.displayNum){
//      		console.log(this.arr);
        		this.display();
        		
        	}
        }
        addevent(){
        	var that = this;
        	if(this.change){
        		this.change.on("click",function(){
        			that.goodschange();
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


