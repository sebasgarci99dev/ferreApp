<?php 	
	require_once('conexion.php');

	$producto  = $_POST["producto"];
	$cantidad = $_POST["cantidad"];

	$str = "
		UPDATE stockproductos
		SET stock = stock-'".$cantidad."'
		WHERE idProducto = '".$producto."';
	";

	$retiroProducto = mysqli_query($conexion, $str);

	if($retiroProducto) {
		echo "0";
	} else {
		echo "1";
	}

?>

