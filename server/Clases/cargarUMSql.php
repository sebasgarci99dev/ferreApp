<?php
	// Inactivación de mensajes de PHP
	error_reporting(E_ALL);
    ini_set('display_errors', false);
    ini_set('display_startup_errors', false);
    ini_set('max_execution_time', 0); 

    // Llamamos a la conexion
	require_once('conexion.php');

	$idUnidadMedida= $_POST['idUnidadMedida'];
	//$idProducto=13;

	// Consulta a la BD
	$consulta = "
		SELECT
		 u.idUnidadMedia, 
		 u.unidadMedida, 
		 u.descripcionUnidad 
		FROM unidadMedia u
		WHERE u.idUnidadMedida = $idUnidadMedia";



	$resultado = mysqli_query($conexion, $consulta) or die('no se consulto la unidad de Medida');

	$um = mysqli_fetch_array($resultado);

	

	// Retornamos la info a la tabla
	echo json_encode($producto);

?>