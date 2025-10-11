<?php
require '../sign-in/konek.php';
$token = $_GET['token'];
$stmt = $konek->prepare("UPDATE wf_users SET VERIFIED = 1 WHERE TOKEN = :a ");
$stmt->bindValue(':a',$token);
$stmt->execute();

?>  
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>wfdigistore</title>
</head>
<body>
    <h1>Succesfully Verified</h1>
    <h3>You can close this page!</h3>
</body>
</html>
