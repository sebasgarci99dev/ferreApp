<?php 	
	require_once('conexion.php');

	$idUsuario   = $_POST["idUsuario"];
	$email		 = $_POST["email"];
	$nombre		 = $_POST["nombre"];
	$apellido	 = $_POST["apellido"];
	$direccion	 = $_POST["direccion"];
	$telefono	 = $_POST["telefono"];
	$tipoUsuario = $_POST["tipoUsuario"];


	$str = "
		UPDATE usuario
		SET 
			email = '".$email."', 
			nombre = '".$nombre."', 
			apellido = '".$apellido."',
			direccion = '".$direccion."',
			telefono = ".$telefono.",
			idTipoUsuario = ".$tipoUsuario."
		WHERE idUsuario = '".$idUsuario."';
	";
	$editarUsuario = mysqli_query($conexion, $str) or die('no se edito el usuario');

	$str2 = "
		SELECT *
		FROM usuario
		WHERE idUsuario = '".$idUsuario."';
	";
	$resultado = mysqli_query($conexion, $str2) or die('no se consulto el usuario');
	$user = mysqli_fetch_array($resultado);

	if($user['0'] != "") {
		echo "0";
	}else {
		echo "1";
	}

?>