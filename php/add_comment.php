<?php

include_once 'connection.php';

$db = mysqli_connect($host, $user, $password, $database) or die("Ошибка " . mysqli_error($db));
	$email = $_POST['email'];
	$comment = $_POST['comment'];

	if(mysqli_query($db,"INSERT INTO comments(phone_number, name_feedback) VALUES ('$name', '$phone')") === TRUE)
	{
	  echo 1;
	}
	else {
	  echo 2;
	}

?>
