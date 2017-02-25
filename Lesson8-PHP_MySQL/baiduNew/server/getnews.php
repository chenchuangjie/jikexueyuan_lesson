<?php 
	header("Content-type:application/json;charset=utf-8");
	/*连接数据库*/
	require_once('db.php');
	if($link){
		 // 执行成功的过程
		if($_GET['newstype']){
			$newstype=$_GET['newstype'];
			// limit是mysql语句，用来显示多少条数据，在前端避免很大的数据量一次显示，导致崩溃
			$sql = "SELECT * FROM `news` WHERE `newstype`='{$newstype}' limit 0,3";
			//防止获取的数据乱码（utf8和utf-8是有区别的。可能是mysql版本原因）
			mysqli_query($link,"SET NAMES utf8");
			$result= mysqli_query($link,$sql);
			$senddata = array();
			// mysqli_fetch_assoc() 函数从结果集中取得一行作为关联数组。-	·
			while($row = mysqli_fetch_assoc($result)){
				array_push($senddata,array(
					'id' => $row['id'],
					'newstype' => $row['newstype'],
					'newstitle' => $row['newstitle'],
					'newsimg' => $row['newsimg'],
					'newstime' => $row['newstime'],
					'newssrc' => $row['newssrc']
					));			
			}
			echo json_encode($senddata);
		}else{
	 		// 执行成功的过程
	 		// 这里要order by id desc 进行倒序
			$sql = 'SELECT * FROM news order by id desc';
			//防止获取的数据乱码（utf8和utf-8是有区别的。可能是mysql版本原因）
			mysqli_query($link,"SET NAMES utf8");
			$result= mysqli_query($link,$sql);
			$senddata = array();
			while($row = mysqli_fetch_assoc($result)){
				array_push($senddata,array(
					'id' => $row['id'],
					'newstype' => $row['newstype'],
					'newstitle' => $row['newstitle'],
					'newsimg' => $row['newsimg'],
					'newstime' => $row['newstime'],
					'newssrc' => $row['newssrc']

				));			
			}
			echo json_encode($senddata);
		}		
	}else{
		echo json_encode(array('success'=>'none'));
	}
	mysqli_close($link);
	// $arr = array(
	// 	'newstype' => '百家',
	// 	'newsimg' => 'img/xidada.jpg',
	// 	'newstime' => '2016-02-28',
	// 	'newssrc' =>'极客学院',
	// 	'newstitle' => '测试动态获取的新闻标题'
	// 	);

	// echo json_encode($arr);
?>