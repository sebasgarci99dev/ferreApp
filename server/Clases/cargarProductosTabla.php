<?php
	// Inactivación de mensajes de PHP
	error_reporting(E_ALL);
    ini_set('display_errors', false);
    ini_set('display_startup_errors', false);
    ini_set('max_execution_time', 0); 

    // Llamamos a la conexion
	require_once('conexion.php');	

	// Consulta a la BD
	
	
	$consulta ="
	SELECT
	 u.idProducto, 
	 u.nombre, 
	 u.descripcion, 
	 um.unidadMedida, 
	 u.codigoBarras, 
	 cp.categoria, 
	 u.estado, 
	 u.fechaCreacion 
	FROM producto u
	JOIN categoriaproducto cp ON u.idCategoria = cp.idCategoria
	JOIN unidadmedida um ON u.idUnidadMedida = um.idUnidadMedida
	";

	 	

	$resultado = mysqli_query($conexion, $consulta) or die('no se consulto el producto');
	



	// Recorremos a los usuarios
	while($data = mysqli_fetch_assoc($resultado)) {
		$datos["data"][] = $data;
		
	}

	// Retornamos la info a la tabla
	echo json_encode($datos);

?>