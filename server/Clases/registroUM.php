<?php 	
	require_once('conexion.php');

	//$idproducto	= $_POST["idproducto"];
	$unidadMedida		=  strtoupper( $_POST["unidadMedida"]);
	$descripcionUnidad	= strtoupper($_POST["descripcionUnidad"]);
	/*
	$unidadMedida="UN";
	$descripcionUnidad="UNIDAD";*/


	

	$str = "
		INSERT INTO unidadmedida(
		unidadMedida, 
		descripcionUnidad
		)
		VALUES(
		'".$unidadMedida."',
		'".$descripcionUnidad."');
	
	";

	$crearUnidadMedida = mysqli_query($conexion, $str) or die('no se creo la unidad de Medida');

	if($crearUnidadMedida) {
		echo "0";
	}else {
		echo "1";
	}

?>