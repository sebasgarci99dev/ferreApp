<?php 	
	require_once('conexion.php');

    $idUnidadMedida  = $_POST["idUnidadMedida"];
    //$idProducto=15;


	$str = "
		DELETE FROM unidadMedida
		WHERE idUnidadMedida = '".$idUnidadMedida."';
	";
	$borrarUnidad = mysqli_query($conexion, $str) or die('no se elimino el producto');

	$str2 = "
		SELECT *
		FROM unidadMedida;
		
	";
    $resultado = mysqli_query($conexion, $str2) or die('no se consultó producto');
    
    $unidadMedida = mysqli_fetch_array($resultado); 
    

    
    ?>