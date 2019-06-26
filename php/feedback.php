<?php

include_once 'connection.php';

	$name = $_POST['name'];
	$phone = $_POST['phone'];

	if(mysqli_query($db,"INSERT INTO feedback(phone_number, name_feedback) VALUES ('$phone', '$name')") === TRUE)
	{
	  echo 1;
	}
	else {
	  echo 2;
	}

?>
