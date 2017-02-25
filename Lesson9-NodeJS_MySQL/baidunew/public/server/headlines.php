<?php
	//获取新闻内容 
	header("Content-type:application/json;charset=utf-8");
	// 连接数据库
	require_once('db.php');
	if($link){
		$newsid = $_GET['newsid'];
		/*防止有乱码*/
		mysqli_query($link,"SET NAMES utf8");
		/*修改语句*/
		$sql = "SELECT * FROM `headnews` WHERE `id`={$newsid}";
		$result= mysqli_query($link,$sql);
		$senddata = array();
		while($row = mysqli_fetch_assoc($result)){
			array_push($senddata,array(
				'id' => $row['id'],
				'headtitle' => $row['headtitle'],
				'headimg' => $row['headimg']
			));			
		}
		echo json_encode($senddata);

	}
	// mysqli_close($link);
?>
