$(function(){
	var checkArr=[];//定义一个获取勾选的空数组
	//如果有值就解析
	//获取cook 解析
	var cartArr=$.cookie("cart");
	
	if(cartArr){
		cartArr=JSON.parse(cartArr);
		
		$.each(cartArr,function(){
			
			checkArr.push(true);
//			console.log(checkArr)
		});
	}
	$(".tbody").empty();
	addtr();//刷新
	function addtr(){
	var alltotal=0;//总价
		var cartArr=$.cookie("cart");
		if (cartArr) {
			cartArr=JSON.parse(cartArr);
		}
		$(".tbody").empty();
//		var total=0;//小计
		var allnum=0;
//		var allnum=0;
		for(var i=0;i<cartArr.length;i++){
			var obj=cartArr[i];
		var total=0;//小计
			var tr=$("<tr></tr>");
			tr.appendTo(".tbody");
			total=obj.price*obj.num-0;
			console.log(obj.price  , obj.num )
			//如果checkArr有数组    创建有勾选状态的input
			if( checkArr[i]){
				$("<td><input type='checkbox' checked='checked' class='check' /></td>").appendTo(tr);
			}else{
				$("<td><input type='checkbox' class='check' /></td>").appendTo(tr);
			}
//			$("<td><div class='che'><input type='checkbox' checked='checked' name='' id='' /></div></td>").appendTo(tr)
			$("<td><img src="+obj.img+"><span>"+obj.con+"</span></td>").appendTo(tr);
			$("<td><div class='pridiv'><i>$</i><span class='price'>"+obj.price+"</span></div></td>").appendTo(tr);
			$("<td><input type='button' value='-' class='btndown'/><input type='text'  value='"+obj.num+"' class='textInp' /><input type='button' value='+' class='btnup'/></td>").appendTo(tr);
			$("<td><div class='sum'><i>$</i><span class='objsum'>"+total+"</span></div></td>").appendTo(tr);
			$("<td><a class='del' href='##'>删除</a></td>").appendTo(tr);
		//如果是选中true
			console.log(checkArr[i])
			if (checkArr[i]) {
				alltotal += obj.price*obj.num-0;
				allnum += obj.num;
			}
		}
			$(".allnum").text(allnum);
			$(".allpric").text(alltotal);
	}
	//减
	$(".tbody").on("click",".btndown" , function(){
		var index=$(this).index(".btndown");
		//点击当前的减号的下标,index加class增加下标准确性,排除同级别标签
		var arr=JSON.parse($.cookie("cart") ) ;//取COOK 解析
//		console.log(arr[index].num);//取出btndown的下标对应的对象
		arr[index].num-- ;
//		console.log(arr[index].num)
		if(arr[index].num<=0){
									
			arr.splice(index , 1);
			checkArr.splice(index, 1)
//			console.log(arr);
		}
		$.cookie("cart" , JSON.stringify(arr),{expires:7 , path:"/" } )
		//刷新
		addtr();
	})
	//加
	$(".tbody").on("click",".btnup", function(){
		var index=$(this).index(".btnup");
		//点击当前的减号的下标,index加class增加下标准确性,排除同级别标签
		var arr=JSON.parse($.cookie("cart") ) ;//取COOK 解析
//		console.log(arr[index].num);//取出btndown的下标对应的对象
		arr[index].num++ ;
//		console.log(arr[index].num)
	
		$.cookie("cart" , JSON.stringify(arr),{expires:7 , path:"/" } )
		addtr();
	})
		//删除
		$(".tbody").on("click",".del", function(){
		var index=$(this).index(".del");
		//点击当前的减号的下标,index加class增加下标准确性,排除同级别标签
		var arr=JSON.parse($.cookie("cart") ) ;//取COOK 解析
//		console.log(arr[index].num);//取出btndown的下标对应的对象
//		console.log(arr);
		arr.splice(index , 1) ;
		checkArr.splice(index , 1);
		//删除勾选完马上更新
		eachCheck();
//		console.log(arr)
		$.cookie("cart" , JSON.stringify(arr),{expires:7 , path:"/" } )
		addtr();
		})
	//动态遍历小check的状态,如果全都true,,,大全选就true
	function eachCheck(){
		var sum=0;
		$.each(checkArr , function (index , value) {
			console.log(index, value);
			sum += value;
		})
		if(sum == checkArr.length){
			$(".allchek").prop("checked" , true);
		}else{
			$(".allchek").prop("checked" , false);
		}
	
	}
	//全选改变小标签的状态
	$(".allchek").click(function(){
		console.log($(".allchek").prop("checked") )
		if ($(this).prop("checked") ) {
			$.each(checkArr, function(i) {
				checkArr[i]=true;
			});
		} else{
			$.each(checkArr,function(i){
				checkArr[i]=false;
			})
		}
		addtr();
	})
	//小勾选的状态改变
	$(".tbody").on("click",".check",function(){
		var index= $(this).index(".check");
		//点击一下就改变
		checkArr[index] = ! checkArr[index];
		console.log(checkArr[index])
		
		//改变勾选状态
		eachCheck();
		//刷新界面
		addtr();
	})
	//删除未选中
	$(".Delno").click(function(){
		console.log("a")
		var arr=JSON.parse($.cookie("cart") );
		var newArr=[];
		var newCheckArr=[];
		for (var i=0;i<arr.length;i++) {
			if (checkArr[i]) {
				newArr.push(arr[i]);
//				console.log(newArr);
				newCheckArr.push(checkArr[i]);
//				console.log(newCheckArr);
			}
		}
		checkArr=newCheckArr;
		$.cookie("cart" , JSON.stringify(newArr) , {expires:4,path:"/"})
		eachCheck();
		addtr();
	})
})