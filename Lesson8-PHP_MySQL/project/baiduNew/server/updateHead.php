<?php 
	header("Content-type:application/json;charset=utf-8");
	// 连接数据库
	require_once('db.php');
	if($link){
		/*插入新闻*/
		// 获取所有内容
		$headtitle1 = $_POST['headtitle'];
		$headimg1 = $_POST['headimg'];
		$newsid = $_POST['id'];

		/*查询语句*/
		$sql = "UPDATE `headnews` SET `headtitle` = '{$headtitle1}',`headimg` = '{$headimg1}' WHERE `id`={$newsid}";

		mysqli_query($link,"SET NAMES utf8");
		$result= mysqli_query($link,$sql);
		echo json_encode(array('success'=>'ok'));
	}	
?>