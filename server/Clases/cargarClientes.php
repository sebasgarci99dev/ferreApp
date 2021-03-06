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
			cl.idCliente,
			cl.codigo,
			CONCAT(
				nombres, ' ', apellidos
			) AS nombre,
			cl.email,
			cl.direccion,
			cl.telefono_cel,
			cl.telefono_fijo,
			d.dep_nombre,
			m.mun_nombre
		FROM clientes cl
		JOIN departamentos d 
			ON d.id = cl.idDepto 
		JOIN municipios m 
			ON m.id = cl.idMunicipio
		WHERE cl.estado = 0;";
	$resultado = mysqli_query($conexion, $consulta) or die('no se consulto el usuario');

	// Recorremos a los usuarios
	while($data = mysqli_fetch_assoc($resultado)) {
		$datos["data"][] = $data;
	}

	// Retornamos la info a la tabla
	echo json_encode($datos);

?>