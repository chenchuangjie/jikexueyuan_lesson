<?php 
	header("Content-type:application/json;charset=utf-8");
	// 连接数据库
	require_once('db.php');
	if($link){
		/*插入新闻*/
		// 获取所有内容
		$newstitle = $_POST['newstitle'];
		$newstype = $_POST['newstype'];
		$newsimg = $_POST['newsimg'];
		$newstime = $_POST['newstime'];
		$newssrc = $_POST['newssrc'];

		/*查询语句*/
		$sql = "INSERT INTO `news`(`newstitle`,`newstype`,`newsimg`,`newstime`,`newssrc`) VALUES('{$newstitle}','{$newstype}','{$newsimg}','{$newstime}','{$newssrc}')";

		mysqli_query($link,"SET NAMES utf8");
		$result= mysqli_query($link,$sql);
		echo json_encode(array('success'=>'ok'));
	}	
?>