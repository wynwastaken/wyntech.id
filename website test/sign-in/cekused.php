<?php
require "konek.php";

if(isset($_POST["email"])){
    $email = $_POST["email"];
    $stmt = $konek->prepare("SELECT * FROM wf_users WHERE EMAIL = :a ");
    $stmt->bindValue(":a",$email,PDO::PARAM_STR);
    $stmt->execute();
    $hasil = $stmt->fetch(PDO::FETCH_ASSOC);
    if($hasil){
        echo "ada";
    }else{
        echo "tidak_ada";
    }
}