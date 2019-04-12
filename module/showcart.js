//购物车
export    class Showcart{
        constructor(options){
            this.tbody = options.tbody;
            this.goodsnum=options.goodsnum;
            this.res="";
            this.goodsid = "";
            this.goodsloc = "";
            this.goodssum=0;
            this.totalnum=0;
            this.nowtr = "";
            this.totalprices=0;
            this.init();
            this.onoff=true;
            
        }
        init(){
        	this.load();
        	this.addevent();
        	
        }
        load(){
        	var that = this;
        	$.ajax({
        		url:"data/newgoods.json",
        		success:function(res){
//      			console.log(res)
        			that.res = res;
        			that.display();
        		}
        	});
        }
        display(){
        	this.goodsloc = JSON.parse($.cookie("goodsloc"))
        	console.log(this.goodsloc)
			if(this.goodsloc != null&&this.goodsloc.length>0){
				
        		var str="";
        		for(var i=0;i<this.goodsloc.length;i++){
        			for(var j=0;j<this.res.length;j++){
        				if(this.goodsloc[i].goodsid ==this.res[j].goodId){
//      					console.log(this.goodsloc[i].num , this.res[j].price.substring(1))
        					str +=`
        						<tr goodsid="${this.res[j].goodId}">
							      <th scope="row"><input type="checkbox" /></th>
							      <td><img src="${this.res[j].src}"/></td>
							      <td><a href="" class="goodsdet" goodsid="${this.res[j].goodId}">${this.res[j].name}</a></td>
							      <td><i class="price" style="color:#3c3c3c;font-weight: 700;">${this.res[j].price}</i></td>
							      <td>
							      		<div class="quantity_form">
							      			<span class="sub"> - </span>
							      			<input type="number" name="" class="squreNum" value="${this.goodsloc[i].num}" min="1" max="99"/>
							      			<span class="add"> + </span>
							      		</div>
							      </td>
							      <td><i class="subtotal">￥${this.goodsloc[i].num * this.res[j].price.substring(1)}</i></td>
							      <td><u class="delete">删除</u></td>
							    </tr>
        					`
        				}
        			}
        		}
        		this.tbody.html(str);
        		
        		this.tbody.prev().find("input:checkbox").prop("checked",false);
//      		console.log(this.goodssum)
			}else{
				this.tbody.html("<th><th><td colspan='6'><a href='index.html'><img src='images/empty.gif' height='400'></a></td>");
			}
        }
        addevent(){
        	var that = this;
        	this.tbody.on("click",".sub",function(){
        		that.goodsid = $(this).parent().parent().parent("tr").attr("goodsid");
        		console.log(that.goodsid);
        		that.goodsloc = JSON.parse($.cookie("goodsloc"));
        		for(var i=0;i<that.goodsloc.length;i++){
        			if(that.goodsloc[i].goodsid==that.goodsid){
        				if(that.goodsloc[i].num>1){
        					that.goodsloc[i].num--;
        					$.cookie("goodsloc",JSON.stringify(that.goodsloc));
        					$(this).next().val(that.goodsloc[i].num);
        					$(this).parent().parent().next().find(".subtotal").text("￥"+that.goodsloc[i].num * $(this).parent().parent().prev().find(".price").text().substring(1))
        					that.statistics();
        				}
        				
        			}
        		}
        	})
        	this.tbody.on("click",".add",function(){
        		that.goodsid = $(this).parent().parent().parent("tr").attr("goodsid");
//      		console.log(that.goodsid);
        		that.goodsloc = JSON.parse($.cookie("goodsloc"));
        		for(var i=0;i<that.goodsloc.length;i++){
        			if(that.goodsloc[i].goodsid==that.goodsid){
        				if(that.goodsloc[i].num<99){
        					that.goodsloc[i].num++;
        					$.cookie("goodsloc",JSON.stringify(that.goodsloc));
        					$(this).prev().val(that.goodsloc[i].num);
        					$(this).parent().parent().next().find(".subtotal").text("￥"+that.goodsloc[i].num * $(this).parent().parent().prev().find(".price").text().substring(1))
        					that.statistics();
        				}
        				
        			}
        		}
        	})
        	this.tbody.on("change",".squreNum",function(){
        		that.goodsid = $(this).parent().parent().parent("tr").attr("goodsid");
//      		console.log(that.goodsid);
        		that.goodsloc = JSON.parse($.cookie("goodsloc"));
        		for(var i=0;i<that.goodsloc.length;i++){
        			if(that.goodsloc[i].goodsid==that.goodsid){
        				if($(this).val()>0 && $(this).val()<100){
        					that.goodsloc[i].num = $(this).val();
        					$.cookie("goodsloc",JSON.stringify(that.goodsloc));
        					
        					$(this).parent().parent().next().find(".subtotal").text("￥"+that.goodsloc[i].num * $(this).parent().parent().prev().find(".price").text().substring(1))
        					that.statistics();
        				}
        			}
        		}
        	})
        	this.tbody.prev().find("input:checkbox").on("click",function(){
        		 that.tbody.find("input:checkbox").prop("checked",$(this).prop("checked"));
        		 that.statistics();
        	})
        	this.tbody.on("click","input:checkbox",function(){
        		console.log(111)
        		if(that.tbody.find("input:checkbox").length === that.tbody.find("input:checked").length){
                    
                    that.tbody.prev().find("input:checkbox").prop("checked",true);
                }else{
                    that.tbody.prev().find("input:checkbox").prop("checked",false);
                }
                that.statistics();
                
        	})
        	this.tbody.on("click",".delete",function(){
        		that.nowtr = $(this).parent().parent()
        		that.goodsid = that.nowtr.attr("goodsid");
        		that.onoff = true;
        		
        		$("#yes").on("click",function(){
        			if(that.onoff){
        				console.log(that.goodsid);
        				that.onoff = false;
        				that.nowtr.remove();
        				that.goodsloc = JSON.parse($.cookie("goodsloc"));
        				for(var i=0;i<that.goodsloc.length;i++){
        					if(that.goodsloc[i].goodsid==that.goodsid){
        						that.goodsloc.splice(i,1);
        						$.cookie("goodsloc",JSON.stringify(that.goodsloc));
        					}
        				}
        				that.statistics();
        				if(JSON.parse($.cookie("goodsloc")).length==0){
        					that.tbody.html("<th><th><td colspan='6'><a href='index.html'><img src='images/empty.gif' height='400'></a></td>");
        				}
        				
        				
        			}
        		})
        	})
        	
        }
        statistics(){
        	var that = this;
        	that.totalnum = 0;
            that.totalprices = 0;
            for(var i=0;i<that.tbody.children().length;i++){
            	that.totalnum += that.tbody.children().eq(i).find("input:checkbox").prop("checked") * that.tbody.children().eq(i).find(".squreNum").val();
        		that.totalprices += that.tbody.children().eq(i).find("input:checkbox").prop("checked") * that.tbody.children().eq(i).find(".subtotal").text().substring(1);
            }
            if(!isNaN(that.totalnum))$("tfoot").find(".totalsum").text(that.totalnum);
            if(!isNaN(that.totalprices))$("tfoot").find(".total").text("￥"+that.totalprices);
            this.goodssum=0;
        		for(var i=0;i<this.goodsloc.length;i++){
        			this.goodssum += parseInt(this.goodsloc[i].num)
        		}
//      		$.cookie("goodsloc",JSON.stringify(this.goodsloc));
        		if(this.goodssum<100){
        			this.goodsnum.html(parseInt(this.goodssum));
        		}else{
        			this.goodsnum.html('<s style="font-size:8px;color:#fff">99+<s>');
        		}
        }
        
	}
        


