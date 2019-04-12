//放大镜

export    class Enlarge{
        constructor(options){
             this.name = options.name;
			 this.oleft = options.oleft;
			 this.oright = options.oright;
			 this.op = options.op;
			 this.oimg = options.oimg;
			 this.ospan = options.ospan;
			 this.bImg = options.bImg;
			 this.sImg = options.sImg;
			 
			 
			 this.init();
        }
        init(){
        	this.addevent();
			
				
			}
        addevent(){
        	var that=this;
        		that.ospan.onmouseover=function(){
					that.op.style.display="block";
					that.oright.style.display="block"
				}
				that.ospan.onmouseout=function(){
					that.op.style.display="none";
					that.oright.style.display="none"
				}
				
			
				that.ospan.onmousemove=function(eve){
					var e=eve||window.event;
					var l=e.offsetX-47;
					var t=e.offsetY-47;
					if(l<0)l=0;
					if(l>285)l=285;
					if(t<0)t=0;
					if(t>285)t=285;
					that.op.style.left=l+"px";
					that.op.style.top=t+"px";
					that.oimg.style.left=-l*4+"px";
					that.oimg.style.top=-t*4+"px";	
				}
        }
			
    }


