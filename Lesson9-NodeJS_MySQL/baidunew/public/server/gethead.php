<?php 
	header("Content-type:application/json;charset=utf-8");
	/*连接数据库*/
	require_once('db.php');
	if($link){
	 		// 执行成功的过程
			$sql = 'SELECT * FROM headnews';
			//防止获取的数据乱码（utf8和utf-8是有区别的。可能是mysql版本原因）
			mysqli_query($link,"SET NAMES utf8");
			$result= mysqli_query($link,$sql);
			$senddata = array();
			while($row = mysqli_fetch_assoc($result)){
				array_push($senddata,array(
					'id' => $row['id'],
					'headtitle' => $row['headtitle'],
					'headimg' => $row['headimg'],

				));			
			}
			echo json_encode($senddata);
			
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