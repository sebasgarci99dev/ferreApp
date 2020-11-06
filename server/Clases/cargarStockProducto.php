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
	$consulta ="
		SELECT
		 	u.stock as cantExistente,
		 	p.nombre as nombreProd,
		 	pr.precio
		FROM stockproductos u
		JOIN producto p
			ON p.idProducto = u.idProducto
		JOIN precioproducto pr 
			ON pr.idProducto = p.idProducto
		WHERE p.idProducto = ".$idProducto;
	$resultado = mysqli_query($conexion, $consulta) or die('no se consulto el stock');
	$producto = mysqli_fetch_array($resultado);

	// Retornamos la info a la tabla
	echo json_encode($producto);

?>