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
			pr.idProveedores,
			pr.codigo,
			CONCAT(
				nombres, ' ', apellidos
			) AS nombre,
			pr.email,
			pr.direccion,
			pr.telefono_cel,
			pr.telefono_fijo,
			d.dep_nombre,
			m.mun_nombre
		FROM proveedores pr
		JOIN departamentos d 
			ON d.id = pr.idDepto 
		JOIN municipios m 
			ON m.id = pr.idMunicipio
		WHERE pr.estado = 0;";
	$resultado = mysqli_query($conexion, $consulta) or die('no se consulto el proveedor');

	// Recorremos a los usuarios
	while($data = mysqli_fetch_assoc($resultado)) {
		$datos["data"][] = $data;
	}

	// Retornamos la info a la tabla
	echo json_encode($datos);

?>