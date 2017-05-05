$(function(){
	//移入切换语言繁体中文
	$(".lang,.lang-f").mouseover(function(){
		$(".lang-f").show();
	})
	$(".lang,.lang-f").mouseout(function(){
		$(".lang-f").hide();
	})
	//移入显现APP二维码
	$(".app, .appImg").mouseover(function(){
		$(".appImg").show();
	})
	$(".app, .appImg").mouseout(function(){
		$(".appImg").hide();
	})
	//点击切换输入框颜色
	$(".top-bottom input").focusin(function(){
		$(this).css("borderColor","#DBC7BA");
//		$(this).css("outline","auto");
	})
		$(".top-bottom input").focusout(function(){
		$(this).css("borderColor","#D7D7D7");
//		$(this).css("outline","auto");
	})
	//导航栏切换
//	var y=0;
	$(".Liall").hover(function(){
		var liNum=$(this).index(".Liall");
//		console.log(liNum)
//		if (liNum==1) {
//			y=0;
//		} else if(liNum==2){
//			y=1;
//		}else{
//			y==undefined;
//		}console.log(y+"yyyyyyyyyyyyyy")
		$(this).find(".liall").show();
	},function(){
		$(this).find(".liall").hide();
	})
//	console.log("a")
	var z=0;
	$(".li-ulall").mouseenter(function(){
		z=$(this).index();
		console.log(z+"zzzzzzzzzzzzz")
	})
//	

//	$(".ulall li").mouseenter(function(){
//		var j=$(this).index();
//		$.get("Json/navImg.json",function(data){
//			var arr=data;//获取的数组
//			var arr2=arr[y];//第几个导航栏的数组
//			var arr3=arr2[z];//左边还是右边
//			//长度为五张图
//			for (var i=0;i<arr3.length;i++) {
//				console.log(arr2[z])
//				console.log(y +"y个li",z+"z个左右",j+"j个小ul")
//				$(".Imgnav").find("img").eq(z).attr("src",arr3[j]);
//	//			$("<img src="+arr3[i]+">").appendTo($("Imgnav"))
//			}
//		})
//	}
			$.get("Json/navImg.json",function(data){
				var arr=data;
				var arr1=arr[0];//第一个tab 左右数组
				
				var arr2=arr1[0];//1111左数组
				var arr3=arr1[1];//1111右数组
				
				var arra=arr[1];//第二个数组
				console.log(arra)
				var arrb=arr1[0];//左边
				var arrc=arr1[1];//右边
				
				$("#li1IMG li").mouseenter(function(){
					var li1index=$(this).index();
					$(".aimg1").attr("src",arr2[li1index]);
//					$(".aimg").eq(a).attr("src",arr3[b]);
				})
					$("#li2IMG li").mouseenter(function(){
					var li2index=$(this).index();
					$(".aimg2").attr("src",arr3[li2index]);
//					$(".aimg").eq(a).attr("src",arr3[b]);
				})
				$("#li3IMG li").mouseenter(function(){
					var li3index=$(this).index();
					$(".abmg3").attr("src",arrb[li3index]);
//					$(".aimg").eq(a).attr("src",arr3[b]);
				})
				
				$("#li4IMG li").mouseenter(function(){
					var li4index=$(this).index();
					$(".abmg4").attr("src",arrc[li4index]);
//					$(".aimg").eq(a).attr("src",arr3[b]);
				})
		$(".fix-ul li").mouseenter(function(){
			$(this).css("background","#FFFFFF")
			$(this).find("a").show();
			$(this).find("i").css("background-position-x","-41px")
		})
		$(".fix-ul li").mouseleave(function(){
			$(this).css("background","#d9b39b")
			$(this).find("a").hide();
			$(this).find("i").css("background-position-x",0)
		})		
				})	
//		回到顶部
	$(".returnTop").click(function() {
		$("body").animate({scrollTop: 0}, 500)
		return false;
	})		
			$(window).scroll(function(){
				var banner_bottom_top = $(".culture").offset().top;
				var winScroll = $(window).scrollTop();
				if(winScroll >= banner_bottom_top) {
					$("#fixRight").fadeIn(1000);
				} else {
					$("#fixRight").fadeOut(1000);
				}	
				
			})	
		//楼梯
		var ismoving = false;
	$(".fixed-r-ul li").click(function() {
			//		$(this).find("a").addClass("Active").parent().siblings().find("a").removeClass("Active");
			$(this).find("span").addClass("active").parent().siblings().find("span").removeClass("active");
			//滚动条(移动页面)
			var index = $(this).index();
			ismoving = true;
			var top = ($(".louti").eq(index).offset().top) - 30;
			$("html,body").stop().animate({
				"scrollTop": top
			}, 1000, function(){
				ismoving = false;
			})
		})
		/*吸顶fixed*/
	$(window).scroll(function() {
		var banner_bottom_top = $(".culture").offset().top;
		var winScroll = $(window).scrollTop();
		if(winScroll >= banner_bottom_top) {
			$("#fixRight").fadeIn(1000);
			$("#fixed-r").show(500);
		} else {
			$("#fixRight").fadeOut(1000);
			$("#fixed-r").hide(500);
		}
		//滚动
		if(ismoving == false) {
			var winScroll = $(window).scrollTop();
			var index = 0;
			$(".louti").each(function() {
					var divTop = parseInt($(this).offset().top) - 150;
					if(winScroll >= divTop) {
						index = $(this).index(".louti");
					}
				})
				//		$(".fixed-r-ul li").eq(index).find("a").addClass("Active").parent().siblings().find("a").removeClass("Active");
			$(".fixed-r-ul li").eq(index).find("span").addClass("active").parent().siblings().find("span").removeClass("active");
		}
	})
		
				
					
	

	
	
	
	
	
	
	
	
	
	
	
	
	
})