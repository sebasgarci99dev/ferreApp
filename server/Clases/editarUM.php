<?php 	
	require_once('conexion.php');
	
	$idUnidadMedida  = $_POST["idUnidadMedida"];
    $unidadMedida		=  strtoupper( $_POST["unidadMedida"]);
    $descripcionUnidad	=strtoupper( $_POST["descripcionUnidad"]);
   
	/*$idUnidadMedida    = 2;
    $unidadMedida		= "CJ";
    $descripcionUnidad	= "CAJA 2";*/
   



	$str = "
		UPDATE unidadMedida
		SET 
			unidadMedida = '".$unidadMedida."', 
			descripcionUnidad = '".$descripcionUnidad."' 
			WHERE idUnidadMedida = '".$idUnidadMedida."';
	";


	$editarUnidad = mysqli_query($conexion, $str) or die('no se edito el producto');
	
	//print($str);
    

	$str2 = "
		SELECT *
		FROM unidadMedida
		WHERE idUnidadMedida = ".$idUnidadMedida."
	";


	$resultado = mysqli_query($conexion, $str2) or die('no se consulto la unidad');
	$unidad = mysqli_fetch_array($resultado);

	//echo json_encode($unidad);

	if($unidad['0'] != "") {
		echo "0";
	}else {
		echo "1";
	}

	

?>