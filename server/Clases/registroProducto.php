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
		$id = $conexion->insert_id; // obtiene el ultimo idProducto Generado en el autoincremento
		echo "0";
		
		$str2 = "
		INSERT INTO stockproductos(
		idProducto
		)
		VALUES(
		".$id.")
	";

	$crearidstockproductos = mysqli_query($conexion, $str2) or die('no se creo el producto en stock productos');

	$str3 = "
		INSERT INTO precioproducto(
		idProducto
		)
		VALUES(
		".$id.")
	";

	$crearidproductoprecio = mysqli_query($conexion, $str3) or die('no se creo el producto en precio producto');


	}else {
		echo "1";
	}
	
	
/*	$rs = mysql_query("SELECT @@identity AS id");
	if ($row = mysql_fetch_row($rs)) {
	$id = trim($row[0]);
	}	*/

	

	

?>