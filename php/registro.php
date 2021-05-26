<?php
include("conexion.php");

$temperatura = $_POST["temperatura"];
$ritmo = $_POST["ritmo"];
$oxigenacion = $_POST["oxigenacion"];
$presion = $_POST["presion"];

$query = "INSERT INTO signosVitales
            (temperatura,ritmo,oxigenacion,presion) VALUES('temperatura','$ritmo','$oxigenacion','$presion')";

$result = mysqli_query($conexion, $query);

    echo'<script type="text/javascript">
    window.location.href="../index.php";
    </script>';

?>