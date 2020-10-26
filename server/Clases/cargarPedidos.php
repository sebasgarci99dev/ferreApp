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
			p.idPedido,
			cl.idCliente,
			p.fechaPedido,
			p.fechaEnvio,
			d.nombre_depto,
			c.nombre_ciudad,
			p.direccion
			e.estado,
			p.descripcion
		FROM pedidos p 
		JOIN clientes cl ON cl.idCliente = p.idCliente
		JOIN departamentos d ON d.idDepto = p.idDepto
		JOIN ciudad c ON c.idCiudad = p.idCiudad
		JOIN estadopedido e ON e.idEstadoPedido = p.idEstadoPedido";


	$resultado = mysqli_query($conexion, $consulta) or die('no se consulto el usuario');

	// Recorremos a los usuarios
	while($data = mysqli_fetch_assoc($resultado)) {
		$datos["data"][] = $data;
	}

	// Retornamos la info a la tabla
	echo json_encode($datos);

?>
