<?php 	
	require_once('conexion.php');

    $idCategoria  = $_POST["idCategoria"];
    //$idProducto=15;


	$str = "
		DELETE FROM categoriaproducto
		WHERE idCategoria = '".$idCategoria."';
	";
	$borrarCategoria = mysqli_query($conexion, $str) or die('no se elimino la Categoria');

	$str2 = "
		SELECT *
		FROM categoriaproducto;
		
	";
    $resultado = mysqli_query($conexion, $str2) or die('no se consultó la unidad de medida');
    
    $categoria = mysqli_fetch_array($resultado); 
    

    
    ?>