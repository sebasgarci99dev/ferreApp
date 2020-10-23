<?php
	// Inactivación de mensajes de PHP
	error_reporting(E_ALL);
    ini_set('display_errors', false);
    ini_set('display_startup_errors', false);
    ini_set('max_execution_time', 0); 

    // Llamamos a la conexion
	require_once('conexion.php');

	$idProducto = $_POST['idProducto'];
	

	// Consulta a la BD
	$consulta = "
		SELECT
		 u.idProducto, 
		 u.nombre, 
		 u.descripcion, 
		 u.idUnidadMedida, 
		 u.codigoBarras, 
		 u.idCategoria, 
		 u.estado, 
		 u.fechaCreacion 
		FROM producto u
		WHERE u.idProducto = ".$idProducto;

	$resultado = mysqli_query($conexion, $consulta) or die('no se consulto el producto');

	$producto = mysqli_fetch_array($resultado);

	

	// Retornamos la info a la tabla
	echo json_encode($producto);

?>