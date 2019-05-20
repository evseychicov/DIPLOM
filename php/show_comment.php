<?php
include_once 'connection.php';
$db = mysqli_connect($host, $user, $password, $database) or die("Ошибка " . mysqli_error($db));
$data = array();
$ta = mysqli_query($db, "SELECT comment,email FROM comments, users WHERE comments.fkey_user = users.id_user");
while($row = mysqli_fetch_assoc($ta)){
    $data[] = $row;
}
echo json_encode($data);
?>