<?php
	$servidor = "localhost";
	$usuario = "user_admin";
	$clave = "1234";
	$based = "ferreApp";
	
	$conexion = mysqli_connect($servidor, $usuario, $clave) or die('No se conecto al servidor');
	
	mysqli_select_db($conexion, $based) or die('No se encontro la base de datos');
?>