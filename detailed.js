$(function(){
	var MyArr=[];
//	console.log(location.search)//获取本页面的ID
	var goodsId=location.search.slice(1);
//	console.log(goodsId)//切割后的ID
	$.get("Json/goods.json",function(data){
		var arr=data;
		for (var i=0;i<arr.length;i++) {
			/*每个商品的数据*/
			var obj=arr[i];
//			console.log(obj.id);
//			console.log(goodsId);
			if (goodsId == obj.id) {
					creat(obj)
					//18k的选中效果
					Aclick();
					//放大镜
					magnifier();
					//添加cart
					cart(obj);
				}
			} 
	})
	function creat(obj){
		$(".midImg").attr("src",obj.img);
			$(".BigImg").attr("src",obj.img);
			$(".conshow").html(obj.con);
			$(".price").html(obj.price);
			
			//全局MyArr保存了大图片的数组
			//创建一个数组保存大图片的数组	
			var arrsmall = obj.imgbig;
//			console.log(arrsmall);
			//遍历图片的次数,和创建li个数相同
			
			for (var j=0;j<arrsmall.length;j++){
//				console.log("a")
				//rrsmall[j] j是自增的,所以可以遍历所有的图片
				$("<li><img src="+arrsmall[j]+"></li>").appendTo(".weeList");
				$(".weeList li").mouseenter(function(obj){
					var index=$(this).index();
					//获取下标和大图片的下标
					$(".midImg").attr("src",arrsmall[index]);
					$(".BigImg").attr("src",arrsmall[index]);
				})
			}
	}
	function Aclick(){
	$(".king-p1 a").click(function(){
			$(this).addClass("kingBG").siblings().removeClass("kingBG")
		})
		$(".king-p2 a").click(function(){
			$(this).addClass("kingBG").siblings().removeClass("kingBG")
		})
	//		$(".king-p1 a").hover(function(){
	//			$(this).addClass("kingBor").siblings().removeClass("kingBor")
	//		},function(){
	//			$(this).removeClass("kingBor");
	//		})
	//		$(".king-p2 a").hover(function(){
	//			$(this).addClass("kingBor").siblings().removeClass("kingBor")
	//		},function(){
	//			$(this).removeClass("kingBor");
	//		})
	//	
		}
	function magnifier(){
			//放大镜
			var mdiv=$(".middle");
			var mImg=$(".midImg");
			var sAre=$(".smallAre");
			
			var bigAre=$(".bigAre");
			var bImg=$(".BigImg");
			
			sAre.width( mImg.width()/bImg.width()*bigAre.width() );	
			sAre.height( mImg.height()/bImg.height()*bigAre.height() );
			
			mdiv.mouseenter(function(){
					sAre.show();
					bigAre.show();
				})
			mdiv.mousemove(function(e){
				var x=e.pageX-$(this).offset().left-sAre.width()/2;
				var y=e.pageY-$(this).offset().top-sAre.height()/2;
				var sam=bImg.width()/mImg.width();
				if (x<0) {
					x=0;
				} else if (x>(mdiv.width()-sAre.width() ) ){
					x=mdiv.width()-sAre.width();
				}
				if(y<0){
					y=0;
				}else if(y>(mdiv.height()-sAre.height() )){
					y=mdiv.height()-sAre.height();
				}
				sAre.css({left:x,top:y})
				bImg.css({left:-x*sam,top:-y*sam})
			})
			mdiv.mouseleave(function(){
				sAre.hide();
				bigAre.hide();
			})
	}	
	//点击加入购物车
	function cart(obj){
		var goodsObj=obj;
		console.log(goodsObj);
		$(".addbuy").on("click",".addcart",function(){
			var arr = $.cookie("cart") ? JSON.parse( $.cookie("cart") ) : [];/*获取cookie如果不为空则解析 */
			console.log(arr)
			var iscart=false;//设为不存在相同商品
			//遍历cookie中的数组,获取每个对象的ID,与加载的匹配
			for(var i=0;i<arr.length;i++){
				 if(goodsObj.id == arr[i].id){
				 	arr[i].num++;
				 	iscart=true;
				 	//改为存在了
				 	break;
				 }
			}
			//如果不存在
			if(!iscart){
				goodsObj.num=1;
				arr.push(goodsObj);
			}
			$.cookie("cart" , JSON.stringify( arr ) , {expires:7 , path:"/"} );//创建的cart名称的数组转换成字符串存入		
		})
	}
})