<?php
	$servidor = "66.147.240.182";
	$usuario = "recaudos_ferrApp";
	$clave = "Ts2y6q{?z!gX";
	$based = "recaudos_ferreApp";
	
	$conexion = mysqli_connect($servidor, $usuario, $clave) or die('No se conecto al servidor');
<<<<<<< Updated upstream

	mysqli_set_charset( $conexion, 'utf8');
	
	mysqli_select_db($conexion, $based) or die('No se encontro la base de datos');


/*$str="
	ALTER TABLE unidadmedida AUTO_INCREMENT = 1
	";


	$resultado = mysqli_query($conexion, $str) or die('no se consulto el stock');*/
	
?>
=======
	mysqli_set_charset( $conexion, 'utf8');
	mysqli_select_db($conexion, $based) or die('No se encontro la base de datos');

?>
>>>>>>> Stashed changes
