<?php

$host="localhost";
$usuario="root";
$clave="";
$basededatos="belgrano";

$conn = new mysqli ($host, $usuario, $clave, $basededatos);
    mysqli_query($conn , "SET character_set_result=utf8");
    if($conn->connect_error){
        die ("Datebase Error : " . $conn->connect_error);
    }

?>