<?php
	// Inactivación de mensajes de PHP
	error_reporting(E_ALL);
    ini_set('display_errors', false);
    ini_set('display_startup_errors', false);
    ini_set('max_execution_time', 0); 

    // Llamamos a la conexion
	require_once('conexion.php');

	$idDepto = $_POST['idDepto'];	

	// Consulta a la BD
	$consulta = "
		SELECT 
			id,
			mun_nombre
		FROM municipios
		WHERE dep_id = ".$idDepto;
	$resultado = mysqli_query($conexion, $consulta);

	// Recorremos a los usuarios
	while($data = mysqli_fetch_assoc($resultado)) {
		$datos["data"][] = $data;
	}

	// Retornamos la info a la tabla
	echo json_encode($datos);

?>
