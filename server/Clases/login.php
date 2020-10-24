<?php
	// Inactivación de mensajes de PHP
	error_reporting(E_ALL);
    ini_set('display_errors', false);
    ini_set('display_startup_errors', false);
    ini_set('max_execution_time', 0);   

    // Llamamos a la conexion
	require_once('conexion.php');	
	
	// Variables que enviamos
	$usuario = $_POST['usuario'];
	$clave = sha1($_POST['pass']);

	// Consulta a la BD
	$consulta = "
		SELECT * 
		FROM usuario 
		WHERE email='".$usuario."'
		AND contrasena = '".$clave."'
		and borrado = 0";
	$resultado = mysqli_query($conexion, $consulta);
	$user = mysqli_fetch_array($resultado);
	
	// Validación si la BD responde algun dato
	if($user['0']!="") {
		session_start();
		$_SESSION['usuario'] = $user;
		echo "0";
	}else {
		echo "1";
	}	

?>