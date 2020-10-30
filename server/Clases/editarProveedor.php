<?php 	
	require_once('conexion.php');

	$idProveedor  	= 	$_POST["idProveedor"];
	$codigo 		= 	$_POST['codigo'];
	$nombre 		= 	$_POST['nombre'];
	$apellido 		= 	$_POST['apellido'];
	$direccion 		= 	$_POST['direccion'];
	$tel_fijo 		= 	$_POST['tel_fijo'];
	$tel_cel 		= 	$_POST['tel_cel'];
	$email 			= 	$_POST['email'];
	$selectDepto 	= 	$_POST['selectDepto'];
	$selectMunic 	= 	$_POST['selectMunic'];

	$str = "
		UPDATE proveedores
		SET 
			codigo = '".$codigo."',
			nombres = '".$nombre."',
			apellidos = '".$apellido."',
			direccion = '".$direccion."',
			telefono_fijo = '".$tel_fijo."',
			telefono_cel = '".$tel_cel."',
			email = '".$email."',
			idDepto = '".$selectDepto."',
			idMunicipio = '".$selectMunic."'
		WHERE idProveedores = '".$idProveedor."';
	";
	$editarUsuario = mysqli_query($conexion, $str) or die('no se edito el proveedor');

	$str2 = "
		SELECT *
		FROM proveedores
		WHERE idProveedores = '".$idProveedor."';;
	";
	$resultado = mysqli_query($conexion, $str2) or die('no se consulto el proveedor');
	$cliente = mysqli_fetch_array($resultado);

	if($cliente['0'] != "") {
		echo "0";
	}else {
		echo "1";
	}

?>