<?php
include_once 'connection.php';

$data = array();
$ta = mysqli_query($db, "SELECT comment,login FROM comments, users WHERE comments.fkey_user = users.id_user");
while($row = mysqli_fetch_assoc($ta)){
    $data[] = $row;
}
echo json_encode($data);
?>