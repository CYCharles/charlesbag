<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/3/10
 * Time: 17:12
 */

header('Access-Control-Allow-Origin:* ');

//从前端获取两个值user pwd
$user=$_REQUEST["name"];
$pwd=$_REQUEST["pwd"];

class Res{
    public $status;
    public $msg;
}//创建一个类
//先判断是否已经存在相同用户名

$conn2=new mysqli("127.0.0.1","root","","dr_regist") or die("连接失败");
$sql2="select * from dr_regist";
$result=$conn2 -> query( $sql2 );//执行数据库
$isExist=false;//设不存在
if($result->num_rows > 0){
	while ($row=$result->fetch_assoc() ){
		if($row["user"]==$user ){
			$isExist=true;
		}
	}
	if($isExist==true){ // 如果存在相同用户
		$res=new Res();
		$res->status=0;
		$res->msg="name exist";
		echo json_encode($res);
	}else{
		//echo "name no exist";
	}
}else{
	//不存在相同用户
	//echo "name no exist 2";
}
//如果不存在相同的数据,就可以
if($isExist == false){
	//echo "连接成功aaaaa";
	$conn2=new mysqli("127.0.0.1","root","","dr_regist") or die("连接失败");
	$sql="select * from dr_regist";
	$result=$conn2 -> query( $sql );
	$rand=rand();//随机值
	$sql="insert into dr_regist( user , pwd) values('$user','$pwd') ";
	$result=$conn2 -> query($sql);
	if($result == true){
		$res=new Res();
		$res -> status=1;
		$res -> msg="good success";
		echo json_encode( $res );
	}else{
		$res = new Res();
		$res -> status=2;
		$res -> msg="fail";
		echo json_encode( $res );
	}
	$conn2 -> close();
}












