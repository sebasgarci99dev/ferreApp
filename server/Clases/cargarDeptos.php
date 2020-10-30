<?php
	// Inactivación de mensajes de PHP
	error_reporting(E_ALL);
	header('Content-Type: application/json');
    ini_set('display_errors', true);
    ini_set('display_startup_errors', true);
    ini_set('max_execution_time', 0); 

    // Llamamos a la conexion
	require_once('conexion.php');	

	// Consulta a la BD
	$consulta = "
		SELECT 
			id,
			dep_nombre
		FROM departamentos
	";
	$resultado = mysqli_query($conexion, $consulta);

	// Recorremos a los usuarios
	while($data = mysqli_fetch_assoc($resultado)) {
		$datos["data"][] = $data;
		// var_dump($datos);
	}

	// Retornamos la info a la tabla
	echo json_encode($datos, JSON_FORCE_OBJECT);

?>
