<?php 	
    require_once('conexion.php');
    /*$idProducto     = $_POST["idProducto"];
    $nombreprd		=  strtoupper( $_POST["nombreprd"]);
    $descripcionprd	= $_POST["descripcionPrd"];
    $unidadmedida 	= $_POST["UM"];
    $codigobarras 	= $_POST["EAN"];
    $categoria		= $_POST["categoria"];
    $estado 		= $_POST["estado"];*/

	$idProducto     = 11;
	$nombreprd		=  "LLAVE MAYOR";
	$descripcionprd	="llave mayor 5/8";
	$unidadmedida 	= 2;
	$codigobarras 	= 7701008;
	$categoria		= 4;
	$estado 		= 0;


	$str = "
		UPDATE producto
		SET 
			nombre = '".$nombreprd."', 
			descripcion = '".$descripcionprd."', 
			idUnidadMedida = '.$unidadmedida.',
			codigoBarras = '.$codigobarras.",
            idCategoria = ".$categoria.",
            estado=".$estado."

		WHERE idProducto = .$idProducto
	";


	$editarProducto = mysqli_query($conexion, $str) or die('no se edito el producto');
	
	echo($editarProducto);
    

	$str2 = "
		SELECT *
		FROM producto
		WHERE idProducto = '".$idProducto."';;
	";
	$resultado = mysqli_query($conexion, $str2) or die('no se consulto el producto');
	$producto = mysqli_fetch_array($resultado);

	if($producto['0'] != "") {
		echo "0";
	}else {
		echo "1";
	}

	

?>