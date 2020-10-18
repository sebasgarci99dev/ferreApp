<?php 	
	require_once('conexion.php');

	$email		= $_POST["email"];
	$contrasena	= sha1($_POST["pass"]);
	$nombre		= $_POST["nombre"];
	$apellido	= $_POST["apellido"];
	$direccion	= $_POST["direccion"];
	$telefono	= $_POST["telefono"];
	$tipoUsuario = $_POST['tipoUsuario'];

	$str = "
		INSERT INTO usuario(
		email, 
		contrasena, 
		nombre, 
		apellido, 
		direccion, 
		telefono, 
		idTipoUsuario)
		VALUES(
		'".$email."',
		'".$contrasena."',
		'".$nombre."',
		'".$apellido."',
		'".$direccion."',
		".$telefono.",
		".$tipoUsuario.");
	";
	$crearUsuario = mysqli_query($conexion, $str) or die('no se creo el usuario');

	$str2 = "
		SELECT *
		FROM usuario
		WHERE email = '".$email."'
		AND contrasena = '".$contrasena."';
	";
	$resultado = mysqli_query($conexion, $str2) or die('no se consulto el usuario');
	$user = mysqli_fetch_array($resultado);

	if($user['0'] != "") {
		echo "0";
	}else {
		echo "1";
	}

?>