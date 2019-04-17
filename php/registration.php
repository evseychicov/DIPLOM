<?php

include_once 'connection.php';

$db = mysqli_connect($host, $user, $password, $database) or die("Ошибка " . mysqli_error($db));
	$email = $_POST['email'];
	$pass = $_POST['pass'];

	if(mysqli_query($db,"INSERT INTO users(email, password) VALUES ('$email', '$pass')") === TRUE)
	{
	  echo 1;
	}
	else {
	  echo 2;
	}

?>
