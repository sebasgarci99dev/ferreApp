<?php
	$servidor = "localhost";
	$usuario = "user_developer";
	$clave = "1a2b3c";
	$based = "ferreApp";
	
	$conexion = mysqli_connect($servidor, $usuario, $clave) or die('No se conecto al servidor');
	
	mysqli_select_db($conexion, $based) or die('No se encontro la base de datos');
?>