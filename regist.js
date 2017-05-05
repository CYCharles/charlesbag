$(function(){
		function focus(){
			
			$("#misstake").hide();
		}
		var istext=true;
		$(".inp_text").focus(function(){
			focus();
			$(".inp_text").css("border-color","#DDDDDD");
		})
		$(".inp_text").blur(function(){
			var valUser=$(".inp_text").val();
			if( valUser!="" && /^1[1|3|5|7|8]\d{9}$/.test(valUser) ){
				$(this).css("border-color","#ADFF2F")
				istext=!istext;
			}
			else{
				$("#misstake").html("账号输入有误");
				$("#misstake").show();
				$(this).css("border-color","red");
			}
		})
		
		var ispwd=true;
		$(".inp_pwd").focus(function(){
				focus();
				$(".inp_pwd").css("border-color","#DDDDDD");
		})
		$(".inp_pwd").blur(function(){
		var pwd=$(this).val();
			if(pwd!="" && /\d{6}/.test(pwd) ){
				$(this).css("border-color","#ADFF2F");
				ispwd=!ispwd;
			}
			else{
				$("#misstake").html("密码输入有误");
				$("#misstake").show();
				
				$(this).css("border-color","red");
			}
		})
		var isdb=true;
		$(".inp_dbpwd").focus(function(){
			focus();
			$(".inp_dbpwd").css("border-color","#DDDDDD");
		});
		$(".inp_dbpwd").blur(function(){
			var dbpwd=$(this).val();
				if (dbpwd!="" && dbpwd==$(".inp_pwd").val() ) {
					$(this).css("border-color","#ADFF2F");
					isdb=!isdb;
				} else{
					$("#misstake").html("确认密码有误");
					$("#misstake").show();
					$(this).css("border-color","red");
				}			
		})
		var iscodo=true;
		$.idcode.setCode();/*加载验证码*/
		$(".F4input").focus(function(){
			focus();
			$(".F4input").css("border-color","#DDDDDD");
		})
		$(".F4input").blur(function(){
			var isBy=$.idcode.validateCode();/*调用返回值,结果为布尔*/
			
		if(isBy){
			$(this).css("border-color","#ADFF2F");//true
			iscodo=!iscodo;
		}else{
			$("#misstake").html("验证码输入有误");
			$("#misstake").show();
			$(this).css("border-color","red");
		}
		})
		var ischeck=true;
		$("#check").click(function(){
			ischeck=!ischeck;
//		console.log(ischeck) false
		})
//		console.log(ischeck)
		var inputArr=$(".form").find("input");
		console.log(inputArr)		
		/*
		0:input.inp_text
		1:input.inp_pwd
		2:input.inp_dbpwd
		3:input#argen.argen
		4:input#check
		5:input#btn
			*/

		$("#btn").click(function(){
//			console.log(istext,ispwd,isdb,iscodo,ischeck);
//			console.log(!istext,!ispwd,!isdb,!iscodo,!ischeck);
			if (!istext && !ispwd && !isdb &&!iscodo && !ischeck) {
				console.log("success")
					var xhr=new XMLHttpRequest();
					var url="http://10.36.135.27/DarryRing/php/regist.php?name="+inputArr[0].value+"&pwd="+inputArr[1].value;
					xhr.open("get",url,true);
					xhr.send(null);
					xhr.onreadystatechange=function(){
						if(xhr.readyState == 4 && xhr.status==200){
							//console.log(xhr.responseText)
							var obj=JSON.parse(xhr.responseText);
		//					console.log(obj);
							
							console.log("匹配成功=4")
		//					if(obj.)
							if(obj.status == 1){
								console.log("注册成功=1");
								
								alert("注册成功");
								setInterval(function(){
									location.href="load.html";
								},500)
								
							}
							else if(obj.status == 0){
								console.log("已经有用户存在=0");
								$("#misstake").html("验证码输入有误");
								$("#misstake").show();
							}
							else if(obj.status == 2){
								console.log("注册失败 =2");
							}
							else{
								console.log("匹配失败else");
							}
						
						}
					}
			} else{
				console.log("fail");
			}
			
		})

})
		













	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	