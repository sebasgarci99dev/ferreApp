<?php
	// Inactivación de mensajes de PHP
	error_reporting(E_ALL);
    ini_set('display_errors', false);
    ini_set('display_startup_errors', false);
    ini_set('max_execution_time', 0); 

    // Llamamos a la conexion
	require_once('conexion.php');

	$idPedido = $_POST['idPedido'];	

	// Consulta a la BD
	$consulta = "
		SELECT 
			pp.idProducto,
			p.nombre,
			pp.cantidad,
			sp.stock
		FROM pedidosproductos pp
		JOIN producto p
			ON p.idProducto = pp.idProducto
		JOIN stockproductos sp
			ON sp.idProducto  = pp.idProducto
		WHERE pp.idPedido = ".$idPedido;

	$resultado = mysqli_query($conexion, $consulta) or die('no se consulto el usuario');

	// Recorremos a los usuarios
	while($data = mysqli_fetch_assoc($resultado)) {
		$datos["data"][] = $data;
	}

	// Retornamos la info a la tabla
	echo json_encode($datos);

?>
