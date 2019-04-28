<?php

include_once 'connection.php';

$db = mysqli_connect($host, $user, $password, $database) or die("Ошибка " . mysqli_error($db));
	$name = $_POST['name'];
	$phone = $_POST['phone'];

	if(mysqli_query($db,"INSERT INTO feedback(phone_number, name_feedback) VALUES ('$name', '$phone')") === TRUE)
	{
	  echo 1;
	}
	else {
	  echo 2;
	}

?>
