<?php 	
	require_once('conexion.php');
	
	$idProducto  = $_POST["idProducto"];
    $precio		=  strtoupper( $_POST["precio"]);
    
   
	/*$idUnidadMedida    = 2;
    $unidadMedida		= "CJ";
    $descripcionUnidad	= "CAJA 2";*/
   



	$str = "
		UPDATE precioproducto
		SET 
			precio = '".$precio."'
			WHERE idProducto = '".$idProducto."';
	";


	$editarPrecio = mysqli_query($conexion, $str) or die('no se edito el precio');
	
	//print($str);
    

	$str2 = "
		SELECT *
		FROM precioproducto
		WHERE idProducto = ".$idProducto."
	";


	$resultado = mysqli_query($conexion, $str2) or die('no se consulto el precio');
	$precio = mysqli_fetch_array($resultado);

	//echo json_encode($unidad);

	if($precio['0'] != "") {
		echo "0";
	}else {
		echo "1";
	}

	

?>