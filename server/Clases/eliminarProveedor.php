<?php 	
	require_once('conexion.php');

	$idProveedor  = $_POST["idProveedor"];

	$str = "
		UPDATE proveedores
		SET estado = 1
		WHERE idProveedores = '".$idProveedor."';
	";
	$borrarUsuario = mysqli_query($conexion, $str) or die('no se elimino el proveedor');

	$str2 = "
		SELECT *
		FROM proveedores
		WHERE idProveedores = '".$idProveedor."'
		and estado = 1;
	";
	$resultado = mysqli_query($conexion, $str2) or die('no se consulto el proveedor');
	$proveedor = mysqli_fetch_array($resultado);

	if($proveedor['0'] != "") {
		echo "0";
	}else {
		echo "1";
	}

?>