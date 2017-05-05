<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/3/10
 * Time: 17:13
 */
header('Access-Control-Allow-Origin:* ');
//前端的名字.密码
$name=$_REQUEST["name"];
$pwd=$_REQUEST["pwd"];

class Res{
    public $status;
    public $msg;
}

//登录   //分为三种状态 status msg
$conn=new mysqli("127.0.0.1","root","","dr_regist") or die("连接失败") ;
$sql="select * from dr_regist";
$reslut=$conn->query($sql);

if($reslut->num_rows>0){
    $issuccess=false;
    while($row=$reslut ->fetch_assoc() ){
        if($row["user"]==$name && $row["pwd"] == $pwd ){
//          echo "success";
            $issuccess = true;
        }
    }
            if($issuccess == true){
                $res= new Res();
                $res->status=1;
                $res->msg="success";
                echo json_encode($res);
            }
            else{
                $res= new Res();
                $res->status=0;
                $res->msg="fail";
                echo json_encode($res);
            }
}else{
    $res=new Res();
    $res->status=0;
    $res->msg="fail";
    echo json_encode($res);
}