<?php

include_once 'connection.php';

$db = mysqli_connect($host, $user, $password, $database) or die("Ошибка " . mysqli_error($db));

		
if(isset($_POST['email']) && isset($_POST['pass'])){
	$email = $_POST['email'];
	$pass = $_POST['pass'];
	$query = "SELECT email, password FROM users WHERE (email = '{$email}') AND (password = '{$pass}')";
	$result = mysqli_query($db, $query);
	$count = mysqli_num_rows($result);
		if($count == 1){
			$_SESSION['email'] = $email;
			echo 1;
		}
		else{
			echo 2;
		}
}

	// if(mysqli_query($db,"SELECT email, password FROM users WHERE (email = '{$email}') AND (password = '{$pass}')") === TRUE)
	// {
  //     setcookie("email", $email, time()+48000);
	//   echo 1;
	// }
	// else {
	//   echo 2;
	// }

?>
