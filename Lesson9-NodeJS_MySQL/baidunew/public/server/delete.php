<?php
	header("Content-type:application/json;charset=utf-8");
	// 连接数据库
	require_once('db.php');

	if($link){
		$newsid = $_POST['newsid'];
		/*防止有乱码*/
		mysqli_query($link,"SET NAMES utf8");
		/*删除语句*/
		$sql = "DELETE FROM `news` WHERE `news`.`id`={$newsid}";

		mysqli_query($link,$sql);
		echo json_encode(array('删除状态'=>'成功'));

	}

	mysqli_close($link);

?>