<?php
	// Inactivación de mensajes de PHP
	error_reporting(E_ALL);
    ini_set('display_errors', false);
    ini_set('display_startup_errors', false);
    ini_set('max_execution_time', 0); 

    // Llamamos a la conexion
	require_once('conexion.php');

	$idCliente = $_POST['idCliente'];

	// Consulta a la BD
	$consulta = "
		SELECT 
			cl.codigo,
			nombres,
			apellidos,
			cl.email,
			cl.direccion,
			cl.telefono_cel,
			cl.telefono_fijo,
			d.id as idDepto,
			m.id as idMun,
			d.dep_nombre,
			m.mun_nombre
		FROM clientes cl
		JOIN departamentos d 
			ON d.id = cl.idDepto 
		JOIN municipios m 
			ON m.id = cl.idMunicipio
		WHERE cl.estado = 0
		and cl.idCliente = ".$idCliente;

	$resultado = mysqli_query($conexion, $consulta) or die('no se consulto el usuario');
	$cliente = mysqli_fetch_array($resultado);

	// Retornamos la info a la tabla
	echo json_encode($cliente);

?>