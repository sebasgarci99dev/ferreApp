<?php 	
	require_once('conexion.php');

    $idUnidadMedida  = $_POST["idUnidadMedida"];
    //$idProducto=15;


	$str = "
		DELETE FROM unidadmedida
		WHERE idUnidadMedida = '".$idUnidadMedida."';
	";
	$borrarUnidad = mysqli_query($conexion, $str) or die('no se elimino la unidad de medida');

	$str2 = "
		SELECT *
		FROM unidadmedida;
		
	";
    $resultado = mysqli_query($conexion, $str2) or die('no se consultó la unidad de medida');
    
    $unidadMedida = mysqli_fetch_array($resultado); 
    

    
    ?>