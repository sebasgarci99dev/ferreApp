<?php 	
	require_once('conexion.php');
	
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
		INSERT INTO proveedores(
			codigo, 
			nombres, 
			apellidos, 
			direccion, 
			telefono_fijo, 
			telefono_cel, 
			email, 
			idDepto, 
			idMunicipio, 
			estado) 
		VALUES (
			'".$codigo."',
			'".$nombre."',
			'".$apellido."',
			'".$direccion."',
			'".$tel_fijo."',
			'".$tel_cel."',
			'".$email."',
			'".$selectDepto."',
			'".$selectMunic."',
			0
		);";
	$crearUsuario = mysqli_query($conexion, $str);

	if($crearUsuario != "") {
		echo "0";
	} else {
		echo "1";
	}


?>