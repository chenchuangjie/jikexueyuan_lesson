<?php
  header("Content-type:application/json;charset=utf-8");
  /*连接数据库*/
  $link = mysqli_connect('localhost','root','ccjadzy');

  if(!$link){
  	 die('Could not connect' .mysqli_error());
  }else{
      echo "success";
  	  // 获取数据
  	  $title = $_REQUEST['title'];
  	  $img = $_REQUEST['img'];
  	  $src = $_REQUEST['src'];
  	  $date = $_REQUEST['date'];

  	  $sql = "INSERT INTO `new`(`title`,`img`,`con`,`data`) VALUES ('{$title}','{$img}','{$src}','{$date}')";
      // $sql = "INSERT INTO `new`(`title`,`img`,`con`,`data`) VALUES('{$newstitle}','{$newstype}','{$newsimg}','{$newstime}','{$newssrc}')";
      // mysqli_select_db() 函数用于更改连接的默认数据库。
      mysqli_select_db($link,"phplesson");

  	  // 防止乱码
  	  mysqli_query($link,"set names 'utf8'");
  	  $result = mysqli_query($link,$sql);
      if(!$result){
        die('Error:' .mysqli_error($link));
      }else{
        echo"inset success";
      }

  }


?>