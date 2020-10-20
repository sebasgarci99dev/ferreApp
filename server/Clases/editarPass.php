<?php 	
	require_once('conexion.php');

	$idUsuario  = $_POST["idUsuario"];
	$passAnt 	= sha1($_POST["passAnt"]);
	$passNueva  = sha1($_POST["passNueva"]);

	$str = "
		select count(*)
		from usuario 
		where idUsuario = ".$idUsuario."
		and contrasena = '".$passAnt."';";
	$datos = mysqli_query($conexion, $str) or die('no se edito el usuario');
	$verificacion = mysqli_fetch_array($datos);

	if($verificacion['0'] < 1) {
		echo "1";
	} else {

		$str = "
			UPDATE usuario
			SET 
				contrasena = '".$passNueva."'
			WHERE idUsuario = '".$idUsuario."';
		";
		$editarUsuario = mysqli_query($conexion, $str) or die('no se edito el usuario');

		$str2 = "
			SELECT *
			FROM usuario
			WHERE idUsuario = '".$idUsuario."';;
		";
		$resultado = mysqli_query($conexion, $str2) or die('no se consulto el usuario');
		$user = mysqli_fetch_array($resultado);

		if($user['0'] != "") {
			echo "0";
		}else {
			echo "1";
		}
	}
?>