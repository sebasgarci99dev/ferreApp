<?php
	// Inactivación de mensajes de PHP
	error_reporting(E_ALL);
    ini_set('display_errors', false);
    ini_set('display_startup_errors', false);
    ini_set('max_execution_time', 0); 

    // Llamamos a la conexion
	require_once('conexion.php');	

	// Consulta a la BD
	$consulta = "
		SELECT 
			u.idUsuario,
			u.Email,
			u.Nombre,
			u.Apellido,
			u.Direccion,
			u.Telefono,
			tp.tipoUsuario
		FROM usuario u 
		JOIN tipo_usuario tp 
			ON tp.idTipoUsuario = u.idTipoUsuario
		WHERE u.borrado = 0
			and u.idTipoUsuario <> 1;";
	$resultado = mysqli_query($conexion, $consulta) or die('no se consulto el usuario');

	// Recorremos a los usuarios
	while($data = mysqli_fetch_assoc($resultado)) {
		$datos["data"][] = $data;
	}

	// Retornamos la info a la tabla
	echo json_encode($datos);

?>