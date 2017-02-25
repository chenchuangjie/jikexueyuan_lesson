<?php 
	header("Content-type:application/json;charset=utf-8");
	// 连接数据库
	require_once('db.php');
	if($link){
		/*插入新闻*/
		// 获取所有内容
		// htmlspecialchars防止安全漏洞
		$newstitle = htmlspecialchars($_POST['newstitle']);
		$newstype = htmlspecialchars($_POST['newstype']);
		$newsimg = htmlspecialchars($_POST['newsimg']);
		$newstime = htmlspecialchars($_POST['newstime']);
		$newssrc = htmlspecialchars($_POST['newssrc']);
		$newsid = htmlspecialchars($_POST['id']);

		/*查询语句*/
		$sql = "UPDATE `news` SET `newstitle` = '{$newstitle}',`newstype` = '{$newstype}',`newsimg` = '{$newsimg}',`newstime` = '{$newstime}',`newssrc` = '{$newssrc}' WHERE `id`={$newsid}";

		mysqli_query($link,"SET NAMES utf8");
		$result= mysqli_query($link,$sql);
		echo json_encode(array('success'=>'ok'));
	}	
?>