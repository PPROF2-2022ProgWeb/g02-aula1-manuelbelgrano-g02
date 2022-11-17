<?php

class Conexion{

    public static function ConexionDB(){
        $host = 'localhost';
        $dbname = 'bibliotecaphp';
        $username = 'root';
        $password = '';

        try {
            $conn = new PDO ("mysql:host=$host; dbname=$dbname", $username, $password);
            echo "Se conectò correctamente a la base de datos";
        }catch (PDOException $exc) {
            echo ("No se pudo conectar a la base de datos $dbname, por el error $exc");
        }

        return $conn;
    }
}

?>