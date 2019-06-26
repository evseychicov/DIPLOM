<?php

include_once 'connection.php';

		
if(isset($_POST['email']) && isset($_POST['pass'])){
	$email = $_POST['email'];
	$pass = $_POST['pass'];
	$query = "SELECT email, password FROM users WHERE (email = '{$email}') AND (password = '{$pass}')";
	$result = mysqli_query($db, $query);
	$count = mysqli_num_rows($result);
		if($count == 1){
			echo 1;
		}
		else{
			echo 2;
		}
}
?>
