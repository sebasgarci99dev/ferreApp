<?php
	// Inactivación de mensajes de PHP
	error_reporting(E_ALL);
    ini_set('display_errors', false);
    ini_set('display_startup_errors', false);
    ini_set('max_execution_time', 0); 

    // Llamamos a la conexion
	require_once('conexion.php');

	$idProveedor = $_POST['idProveedor'];

	// Consulta a la BD
	$consulta = "
		SELECT 
			pr.codigo,
			nombres,
			apellidos,
			pr.email,
			pr.direccion,
			pr.telefono_cel,
			pr.telefono_fijo,
			d.id as idDepto,
			m.id as idMun
		FROM proveedores pr
		JOIN departamentos d 
			ON d.id = pr.idDepto 
		JOIN municipios m 
			ON m.id = pr.idMunicipio
		WHERE pr.estado = 0
		and pr.idProveedores = ".$idProveedor;

	$resultado = mysqli_query($conexion, $consulta) or die('no se consulto el usuario');
	$proveedor = mysqli_fetch_array($resultado);

	// Retornamos la info a la tabla
	echo json_encode($proveedor);

?>