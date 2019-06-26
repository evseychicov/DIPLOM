<?php

include_once 'connection.php';

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
