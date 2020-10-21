<?php 	
	require_once('conexion.php');

	//$idproducto	= $_POST["idproducto"];
	$nombreprd	= $_POST["nombrePrd"];
	$descripcionprd	= $_POST["descripcionPrd"];
	$unidadmedida = $_POST["UM"];
	$codigobarras = $_POST["EAN"];
    $categoria	= $_POST["categoria"];
    $estado =$_POST["estado"]
	$fechacreacionprd = $_POST["fechaCreacionPrd"];

    echo('ingreso a registro producto')
	$str = "
		INSERT INTO producto(
		nombre, 
		descripcion, 
		idUnidadMedida, 
		codigoBarras, 
		idCategoria, 
        estado,
        fechaCreacion)
		VALUES(
		
		'".$nombreprd."',
		'".$descripcionprd."',
		".$unidadmedida.",
		".$codigobarras.",
        ".$categoria.",
        ".$estado.",
		".$fechacreacionprd.");
	";
	$crearProducto = mysqli_query($conexion, $str) or die('no se creo el producto');
/*
	$str2 = "
		SELECT *
		FROM usuario
		WHERE email = '".$email."'
		AND contrasena = '".$contrasena."';
    ";
    
	$resultado = mysqli_query($conexion, $str2) or die('no se consulto el usuario');
	$user = mysqli_fetch_array($resultado);

	if($user['0'] != "") {
		echo "0";
	}else {
		echo "1";
	}

?>