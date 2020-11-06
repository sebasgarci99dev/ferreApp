<?php
	// Inactivación de mensajes de PHP
	error_reporting(E_ALL);
    ini_set('display_errors', false);
    ini_set('display_startup_errors', false);
    ini_set('max_execution_time', 0); 

    // Llamamos a la conexion
	require_once('conexion.php');	

	// Consulta a la BD
	
	
	$consulta ="
	SELECT
	 u.idModulo, 
	 u.nombre_modulo
	FROM modulo u where u.idModulo !=6";

	 	

	$resultado = mysqli_query($conexion, $consulta) or die('no se consultó el modulo');
	



	// Recorremos la unidad de M
	while($data = mysqli_fetch_assoc($resultado)) {
		$datos["data"][] = $data;
		
	}

	// Retornamos la info a la tabla
	echo json_encode($datos);

?>