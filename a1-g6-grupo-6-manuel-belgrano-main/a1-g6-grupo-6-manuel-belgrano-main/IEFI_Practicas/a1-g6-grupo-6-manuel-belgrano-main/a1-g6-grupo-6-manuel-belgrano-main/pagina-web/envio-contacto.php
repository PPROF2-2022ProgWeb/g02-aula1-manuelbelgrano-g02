<?php

$nombre = $_POST["nombre"];
$apellido = $_POST["nombre"];
$email = $_POST["email"];
$username = $_POST ["username"];
$password = $_POST ["password"];
$edad = $_POST["edad"];
$fdnac = $_POST["fdnac"];


$password = hash ('sha512', $password);


include("conexion.php");
$con = mysqli_connect($host,$usuario,$clave,$basededatos) or die ("No se ha podido conectar al servidor de Base de Datos");
    if(!$con) {
    die("Conexion fallida: " . mysqli_connect_error());
    }

$db = mysqli_select_db($con, $basededatos) or die ("Upps! no se ha podido conectar a la base de datos");
$consulta = "INSERT INTO users (nombre, apellido, email, username, password, edad, fdnac) VALUES ('$nombre', '$apellido', '$email', '$username', '$password',
'$edad', '$fdnac')"; 

if(mysqli_query ($con, $consulta)){
    echo "<h1>Registro Agregado con exito!</h1>";
} else {
    echo "<p>No se agrego nuevo registro</p>";
    echo "Error: " . $consulta . "<br>" . mysqli_error($con);
}
mysqli_close($con);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bienvenidos</title>
</head>
<body>
    <a href="cerrar_sesion.php">Volver al login</a>
</body>
</html>