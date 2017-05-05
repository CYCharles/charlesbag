$(function(){
	$.get("Json/banner.json",function(data){
//		console.log(data);
		var arr=data;
		for (var i=0;i<arr.length;i++) {
			var obj=arr[i];
			//创建节点
			$("<li><img src="+obj.img+" /></li>").appendTo(".banner-play");
			$("<li></li>").appendTo(".banner-small");
		}
		$(".banner-small li").first().addClass("small-li");
		banner();
	})
	function banner(){
		var list1=$(".banner-play");
		var list2=$(".banner-small");
		var Li1=$(".banner-play li");
		var Li2=$(".banner-small li");
		//复制第一张图到最后
		Li1.first().clone(true).appendTo(list1);
		//得到Li1数组的长度
		var size=Li1.size();
		list1.width( (size+1)*1920);//设置ul的长度
//		console.log(list1.width())
		var i=0;
		var timer=setInterval(function(){
			i++;
			move();
		},6000)
	function move(){
		if (i<0) {
			list1.css("left",-(size-1)*1920);
			i=size-2;
		} 
		if(i>size){
			list1.css("left" , 0);
			i=1;
		}
		list1.stop().animate({left:-i*1920},1500);
		Li2.eq(i).addClass("small-li").siblings().removeClass("small-li");
		if (i == size) {
			Li2.eq(0).addClass("small-li").siblings().removeClass("small-li");
		}
	}
	Li2.mouseenter(function(){
		i=$(this).index();
		move();
	})
	$(".banner-L").click(function(){
		i--;
		move();
	})
	$(".banner-R").click(function(){
		i++;
		move();
	})
	$(".banner-lunbo").hover(function(){
		
		clearInterval(timer);
	},function(){
		timer =setInterval(function(){
			i++;
			move();
		},6000)
	})
	}
	//banner 下面的三张图
	$.get("Json/loverbetter.json",function(data){
			var arr=data;
			for (var i=0;i<arr.length;i++) {
				var obj=arr[i];
				$(".better-all").find("img").eq(i).attr("src",obj.img);
				$(".better-all").find("h3").eq(i).html(obj.name);
				$(".better-all").find("p").eq(i).html(obj.con);
			}
	})
	//香港郑州故事
	$.get("Json/story.json",function(data){
		var arr=data;
		for (var i=0;i<arr.length;i++) {
			var obj=arr[i];
			$("<li><img src="+obj.img+"><p>"+obj.p1+"</p><p>"+obj.p2+"</p></li>").appendTo(".carouse-ul1");
			$("<li></li>").appendTo(".carouse-ul2");
		}
		$(".carouse-ul2 li").first().addClass("bgcolor");
		story();
	})
	function story(){
		var sList1=$(".carouse-ul1");
		var sList2=$(".carouse-ul2");
		var sLi1=$(".carouse-ul1 li");
		var sLi2=$(".carouse-ul2 li");
		var size=sLi1.size();
		var i=0;
		var timer=setInterval(function(){
			i++;
			storyMove();
		},4000)
		function storyMove(){
			if(i>=size){
				i=0;
			}
			sLi1.eq(i).stop().fadeIn('slow').siblings().stop().hide();
			sLi2.eq(i).addClass("bgcolor").siblings().removeClass("bgcolor");
		}
		sLi2.mouseenter(function(){
			i=$(this).index();
			storyMove();
		})
	}
	//三张图片戒指项链
	$.get("Json/Myheart.json",function(data){
		var arr=data;
		for(var i=0;i<arr.length;i++){
			var obj=arr[i];
			var NEWimg=$(".nGimg-all").eq(i);
//			console.log(NEWimg);
			$("<img src="+obj.img+">").appendTo(NEWimg);
			$("<h3>"+obj.con+"</h3>").appendTo(NEWimg);
			$("<a href='##'>更多 ></a>").appendTo(NEWimg)
		}
	})
	$(".gift-ul li").mouseenter(function(){
		var index= $(this).index();//获取li切换的下标3
		$.get("Json/gift.json",function(data){
			var arr=data;//获取第一层的数组
			var arr2 = arr[index];//获取第二次的对应下标
			for (var i=0;i<arr2.length;i++) {
//				var obj=arr[i];
//				var obja=obj.img()
				$(".gift-img").find("img").eq(i).attr("src",arr2[i])
			}
		})
	})
})