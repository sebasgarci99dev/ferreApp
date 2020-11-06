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

	$str = "
		UPDATE pedidos 
			SET idEstadoPedido = ".$idEstado."
		WHERE idPedido = ".$idPedido.";";
	$resultado = mysqli_query($conexion, $str);

	if($resultado) {
		echo "0";
	} else {
		echo "1";
	}

?>