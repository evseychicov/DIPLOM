<?php

include_once 'connection.php';

$db = mysqli_connect($host, $user, $password, $database) or die("Ошибка " . mysqli_error($db));
	$email = $_POST['email'];
	$pass = $_POST['pass'];
	$login = $_POST['login'];

	if(mysqli_query($db,"INSERT INTO users(email, password, login) VALUES ('$email', '$pass', '$login')") === TRUE)
	{
	  echo 1;
	}
	else {
	  echo 2;
	}

?>
