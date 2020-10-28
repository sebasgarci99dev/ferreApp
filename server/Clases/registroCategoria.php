<?php 	
	require_once('conexion.php');

	//$idproducto	= $_POST["idproducto"];
	$categoria		=  strtoupper( $_POST["categoria"]);
	//$descripcionUnidad	= strtoupper($_POST["descripcionUnidad"]);
	/*
	$unidadMedida="UN";
	$descripcionUnidad="UNIDAD";*/


	

	$str = "
		INSERT INTO categoriaproducto(
		categoria 
		)
		VALUES(
		'".$categoria."');
	
	";

	$crearCategoria = mysqli_query($conexion, $str) or die('no se creo la categoria');

	if($crearCategoria) {
		echo "0";
	}else {
		echo "1";
	}

?>