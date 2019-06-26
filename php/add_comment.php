<?php

include_once 'connection.php';

$db = mysqli_connect($host, $user, $password, $database) or die("Ошибка " . mysqli_error($db));

	$email = $_POST['email'];
	$comment = $_POST['comment'];
	$name_key = mysqli_query($db,"SELECT id_user FROM users WHERE (email = '{$email}')");
	$row = mysqli_fetch_assoc($name_key);
  $userId = $row["id_user"];
	if(mysqli_query($db,"INSERT INTO comments(comment, fkey_user) VALUES ('$comment', '$userId')") === TRUE)
	{
	  echo 1;
	}
	else {
	  echo 2;
	}

?>
