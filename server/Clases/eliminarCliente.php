<?php 	
	require_once('conexion.php');

	$idCliente  = $_POST["idCliente"];

	$str = "
		UPDATE clientes
		SET estado = 1
		WHERE idCliente = '".$idCliente."';
	";
	$borrarUsuario = mysqli_query($conexion, $str) or die('no se elimino el usuario');

	$str2 = "
		SELECT *
		FROM clientes
		WHERE idCliente = '".$idCliente."'
		and estado = 1;
	";
	$resultado = mysqli_query($conexion, $str2) or die('no se consulto el usuario');
	$cliente = mysqli_fetch_array($resultado);

	if($cliente['0'] != "") {
		echo "0";
	}else {
		echo "1";
	}

?>