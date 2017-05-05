$(function(){
	var myAarr=[];
	
	$.ajax({
		type:"get",//请求方式
		url:"Json/goods.json",
		data:{},//参数
		async:true,//是否异步
		//请求成功
		success:function(data){
			myAarr=data;
			for (var i=0;i<myAarr.length;i++) {
				var obj=myAarr[i];
//				console.log(obj)
				$("<li class='show-Ul-li'><img src="+obj.img+"><h3>"+obj.h3+"</h3><p><i>¥</i><span>"+obj.price+"</span></p><p>"+obj.con+"</p></li>").appendTo(".show-Ul")
			
				$(".show-Ul").on("click",".show-Ul-li",function(){
					var index=$(this).index(".show-Ul-li");
					var obja=myAarr[index];
					console.log(index);
					location.href="detailed.html?"+obja.id;
				})
				
			
			
			}
		},
		error:function(){
//			console.log("fail")
		},
		complete:function(){
//			console.log("请求完成")
		}
	
	
	})
		
	
	
	
	
	
	
	
	
	
})