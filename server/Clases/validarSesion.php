<?php

	session_start();
	$user = $_SESSION['usuario'];

	echo json_encode($user);

?>