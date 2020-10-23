<?php 	
	require_once('conexion.php');

	//$idproducto	= $_POST["idproducto"];
	$nombreprd		=  strtoupper( $_POST["nombreprd"]);
	$descripcionprd	= $_POST["descripcionPrd"];
	$unidadmedida 	= $_POST["UM"];
	$codigobarras 	= $_POST["EAN"];
    $categoria		= $_POST["categoria"];
    $estado 		= $_POST["estado"];

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
		NOW());
	";

	$crearProducto = mysqli_query($conexion, $str) or die('no se creo el producto');

	if($crearProducto) {
		echo "0";
	}else {
		echo "1";
	}

?>