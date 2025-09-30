<?php

    try{
        $konek = new PDO('mysql:host=localhost;dbname=wyntech_id','root','',[
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
        ]);
        
    }catch(PDOException $e){
        
        exit();
    }