<?php
session_start();
include("conexion.php");

$username = $_POST ['username'];
$password = $_POST ['password'];

$password = hash ('sha512', $password);

$validar_login = mysqli_query($conn, "SELECT * FROM users WHERE username='$username' and
password ='$password'");

if(mysqli_num_rows($validar_login) > 0){
    $_SESSION['usuarios'] = $username;
    header("location: bienvenida.php");
    exit;
} else{
    echo '
    <script>
    alert("Usuario no existe, por favor verifique los datos introducidos"); 
    windows.location = "index.php";
    </script>
    ';
    exit;
}

?>