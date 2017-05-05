$(function(){
	var CookObj={};

		$("#btn").click(function(){
//			console.log($(".inp_text").val() , $(".inp_pwd").val())
//			e.preventDefault();
			var xhr=new XMLHttpRequest();
			var url="http://10.36.135.27/DarryRing/php/load.php?name="+$(".inp_text").val()+"&pwd="+$(".inp_pwd").val();
			xhr.open("GET",url,true);
			xhr.send(null);
			xhr.onreadystatechange=function(){
				if(xhr.readyState==4 && xhr.status==200){
					console.log(xhr.responseText)
					var obj=JSON.parse(xhr.responseText );
					if (obj.status == 1) {
						alert("登录成功")
								CookObj.name=$(".inp_text").val();
								$.cookie("user",JSON.stringify(CookObj),{expires:7,path:"/"});
								console.log( $.cookie("user") );
					} else{
						console.log("fail")
					}
				}
			}
		})
//					 	$(".check").click(function(){
//					 		var checktrue=$(".check").prop("checked");//true
////					 		console.log(checktrue)
//					 			checktrue=!checktrue;//false
//					 	if( !checktrue) {
//					 					CookObj=JSON.parse($.cookie("user") );
//											console.log(CookObj)
//											CookObj.split(1);
//											$.cookie("user",JSON.stringify(CookObj),{expires:0,path:"/"});
//					 					}
//									else{
//											CookObj=JSON.parse($.cookie("user"))
//												name=CookObj.name;
//												$(".inp_text").val(name);
//												
//										}
//						})
//					 	console.log($(".check").prop("checked"))
					 	if( $(".check").prop("checked") ) {
									CookObj =$.cookie("user");
										if(CookObj){
											CookObj=JSON.parse(CookObj)
											name=CookObj.name;
											console.log(CookObj);
											$(".inp_text").val(name);
										}
									} 
})