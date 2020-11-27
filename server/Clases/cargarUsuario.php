<?php
	// Inactivación de mensajes de PHP
	error_reporting(E_ALL);
    ini_set('display_errors', false);
    ini_set('display_startup_errors', false);
    ini_set('max_execution_time', 0); 

    // Llamamos a la conexion
	require_once('conexion.php');

	$idUsuario = $_POST['idUsuario'];

	// Consulta a la BD
	$consulta = "
		SELECT 
			u.idUsuario,
			u.Email,
			u.Nombre,
			u.Apellido,
			u.Direccion,
			u.Telefono,
			u.idTipoUsuario
		FROM usuario u 
		JOIN tipo_usuario tp 
			ON tp.idTipoUsuario = u.idTipoUsuario
		WHERE u.idUsuario = ".$idUsuario;
		
	$resultado = mysqli_query($conexion, $consulta) or die('no se consulto el usuario');

	$user = mysqli_fetch_array($resultado);

	// Retornamos la info a la tabla
	echo json_encode($user);

?>