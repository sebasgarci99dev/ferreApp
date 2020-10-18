<?php 	
	require_once('conexion.php');

	$idUsuario  = $_POST["idUsuario"];

	$str = "
		UPDATE usuario
		SET 
			borrado = 1
		WHERE idUsuario = '".$idUsuario."';
	";
	$borrarUsuario = mysqli_query($conexion, $str) or die('no se elimino el usuario');

	$str2 = "
		SELECT *
		FROM usuario
		WHERE idUsuario = '".$idUsuario."'
		and borrado = 1;
	";
	$resultado = mysqli_query($conexion, $str2) or die('no se consulto el usuario');
	$user = mysqli_fetch_array($resultado);

	if($user['0'] != "") {
		echo "0";
	}else {
		echo "1";
	}

?>