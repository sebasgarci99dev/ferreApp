<?php 	
	require_once('conexion.php');

	$idCliente  	= 	$_POST["idCliente"];
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
		UPDATE clientes
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
		WHERE idCliente = '".$idCliente."';
	";
	$editarUsuario = mysqli_query($conexion, $str) or die('no se edito el usuario');

	$str2 = "
		SELECT *
		FROM clientes
		WHERE idCliente = '".$idCliente."';;
	";
	$resultado = mysqli_query($conexion, $str2) or die('no se consulto el usuario');
	$cliente = mysqli_fetch_array($resultado);

	if($cliente['0'] != "") {
		echo "0";
	}else {
		echo "1";
	}

?>