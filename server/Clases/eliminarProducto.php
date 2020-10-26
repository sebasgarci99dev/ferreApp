<?php 	
	require_once('conexion.php');

    $idProducto  = $_POST["idProducto"];
    //$idProducto=15;


	$str = "
		DELETE FROM producto
		WHERE idProducto = '".$idProducto."';
	";
	$borrarProducto = mysqli_query($conexion, $str) or die('no se elimino el producto');

	$str2 = "
		SELECT *
		FROM producto;
		
	";
    $resultado = mysqli_query($conexion, $str2) or die('no se consultó producto');
    
    $producto = mysqli_fetch_array($resultado); 
    

    
    ?>