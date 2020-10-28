<?php 	
	require_once('conexion.php');
	
	$idCategoria  = $_POST["idCategoria"];
    $categoria		=  strtoupper( $_POST["categoria"]);
    
   
	/*$idUnidadMedida    = 2;
    $unidadMedida		= "CJ";
    $descripcionUnidad	= "CAJA 2";*/
   



	$str = "
		UPDATE categoriaproducto
		SET 
			categoria = '".$categoria."'
			WHERE idCategoria = '".$idCategoria."';
	";


	$editarCategoria = mysqli_query($conexion, $str) or die('no se edito la categoria');
	
	//print($str);
    

	$str2 = "
		SELECT *
		FROM categoriaproducto
		WHERE idCategoria = ".$idCategoria."
	";


	$resultado = mysqli_query($conexion, $str2) or die('no se consulto la categoria');
	$categoria = mysqli_fetch_array($resultado);

	//echo json_encode($unidad);

	if($categoria['0'] != "") {
		echo "0";
	}else {
		echo "1";
	}

	

?>