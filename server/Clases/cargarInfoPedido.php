<?php
	// Inactivación de mensajes de PHP
	error_reporting(E_ALL);
    ini_set('display_errors', false);
    ini_set('display_startup_errors', false);
    ini_set('max_execution_time', 0); 

    // Llamamos a la conexion
	require_once('conexion.php');

	$idPedido = $_POST['idPedido'];

	// Consulta a la BD
	$consulta = "
		SELECT 
			concat(cl.nombres, ' ', cl.apellidos) as cliente,
			cl.telefono_cel,
			(cl.direccion) as direccionCliente,
			cl.email,
			d.dep_nombre,
			m.mun_nombre,
			(p.direccion) as direccionPedido,
			p.fechaPedido,
			(ep.estado) as estPedido,
			(ed.estado) as estDomicilio
		FROM pedidos p 
		JOIN clientes cl 
			ON cl.idCliente = p.idCliente
		    AND cl.estado = 0
		JOIN departamentos d 
			ON d.id = p.idDepto
		JOIN municipios m
			ON m.id = p.idCiudad
		JOIN estadopedido ep
			ON ep.idEstadoPedido = p.idEstadoPedido
		JOIN estadomicilio ed 
			ON ed.idEstadoDomicilio = p.es_domicilio
		WHERE p.idPedido = ".$idPedido;

	$resultado = mysqli_query($conexion, $consulta) or die('no se consulto el usuario');

	$user = mysqli_fetch_array($resultado);

	// Retornamos la info a la tabla
	echo json_encode($user);

?>

