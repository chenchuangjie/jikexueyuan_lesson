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
		$sql = "SELECT * FROM `news` WHERE `id`={$newsid}";
		$result= mysqli_query($link,$sql);
		$senddata = array();
		while($row = mysqli_fetch_assoc($result)){
			/*htmlspecialchars_decode将反转义，涉及安全漏洞*/
			array_push($senddata,array(
				'id' => htmlspecialchars_decode($row['id']),
				'newstype' => htmlspecialchars_decode($row['newstype']),
				'newstitle' => htmlspecialchars_decode($row['newstitle']),
				'newsimg' => htmlspecialchars_decode($row['newsimg']),
				'newstime' => htmlspecialchars_decode($row['newstime']),
				'newssrc' => htmlspecialchars_decode($row['newssrc'])

			));			
		}
		echo json_encode($senddata);

	}
	// mysqli_close($link);
?>
