<?php 
    header("Access-Control-Allow-Origin: http://localhost:3000");
    $firstName = $_POST['firstName'];
    $lastName = $_POST['lastName'];
    $dob = $_POST['dob'];
    $gender = $_POST['gender'];
    echo ("Hello $lastName, $firstName... You are born in $dob and you are a $gender");
?>
