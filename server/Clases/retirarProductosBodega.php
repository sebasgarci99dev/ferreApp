<?php
	// Inactivación de mensajes de PHP
	error_reporting(E_ALL);
    ini_set('display_errors', false);
    ini_set('display_startup_errors', false);
    ini_set('max_execution_time', 0); 

    // Llamamos a la conexion
	require_once('conexion.php');

	$idPedido = $_POST['idPedido'];
	$idEstado = $_POST['idEstado'];

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
	$resultado = mysqli_query($conexion, $consulta);

	// Recorremos a los usuarios
	while($data = mysqli_fetch_assoc($resultado)) {
		$str = "
			UPDATE stockproductos
				SET stock = stock-".$data['cantidad']."
			WHERE idProducto = ".$data['idProducto'];
		$descontar = mysqli_query($conexion, $str);
	}

	$str = "
		UPDATE pedidos 
			SET idEstadoPedido = ".$idEstado."
		WHERE idPedido = ".$idPedido;
	$resultado = mysqli_query($conexion, $str);

	if($resultado) {
		echo "0";
	} else {
		echo "1";
	}

?>