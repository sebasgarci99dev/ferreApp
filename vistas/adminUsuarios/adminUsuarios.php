<?php
	session_start();
	$user = $_SESSION['usuario'];

	if($user == null) {
		header('Location: ../index.php');
	}
?>

<html>
	<head>
		<title>BarberApp</title>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link rel="icon" type="image/png" href="../../librerias/images/icons/favicon.ico"/>
		<link rel="stylesheet" type="text/css" href="../../librerias/js/bootstrap/css/bootstrap.min.css">
		<link rel="stylesheet" type="text/css" href="../../librerias/fonts/font-awesome-4.7.0/css/font-awesome.min.css">
		<link rel="stylesheet" type="text/css" href="../../librerias/css/main.css">
		<link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.10.22/css/jquery.dataTables.css">
	</head>
	<style type="text/css">
		body {
			background-color: #efefef;
		}

		.navbar {
			background-color: #c5c5c5;
		}

		#menuUsuario {
			display: none;
			margin-top: 1.1%;
			border-radius: .25rem;
			border: 1px solid rgba(0,0,0,.125);
			background-color: white;
			color: black;
		}

		#menuUsuario ul {
			margin: 1rem;
			font-size: 1.1rem;
			line-height: 2rem;
		}

		#menuUsuario ul li {
			overflow: hidden;
			text-overflow: ellipsis;
		}

		#menuUsuario a {
			display: flex;
			justify-content: center;
		}

		#btnCerrarSesion {
			position: absolute;
			bottom: 2rem;
		}
	</style>
<body>
	<div class="sidebar-menu">
	  	<nav class="navbar navbar-dark">
	  		<a href="../principal.php" >
		    	<button class="btn btn-info" id="volverMenu" type="button"> Volver </button>
	    	</a>
	    	<div class="col-11 d-flex justify-content-center" style="color: black;">
	    		<h1> | FerreApp | </h1>
	    	</div>
	  	</nav>
	</div>
	<br>
	<div class="col-lg-12 col-12 d-flex flex-row-reverse">
		<button class="btn btn-lg btn-info" id="btnCrearUsuario">Crear usuario</button>
	</div>
	<br>
	<div class="col-lg-12 d-flex w-100">
		<table id="tablaUsuarios" class="display" style="width:100%">
	        <thead>
	            <tr>
	                <th>Name</th>
	                <th>Position</th>
	                <th>Office</th>
	                <th>Age</th>
	                <th>Start date</th>
	                <th>Salary</th>
	            </tr>
	        </thead>
	        <tbody>
	            <tr>
	                <td>Tiger Nixon</td>
	                <td>System Architect</td>
	                <td>Edinburgh</td>
	                <td>61</td>
	                <td>2011/04/25</td>
	                <td>$320,800</td>
	            </tr>
	            <tr>
	                <td>Garrett Winters</td>
	                <td>Accountant</td>
	                <td>Tokyo</td>
	                <td>63</td>
	                <td>2011/07/25</td>
	                <td>$170,750</td>
	            </tr>
	        </tbody>
	    </table>
	</div>
	<script src="../../librerias/js/jquery/jquery-3.2.1.min.js"></script>
	<script src="../../librerias/js/bootstrap/js/popper.js"></script>
	<script src="../../librerias/js/bootstrap/js/bootstrap.min.js"></script>
	<script type="text/javascript" charset="utf8" src="https://cdn.datatables.net/1.10.22/js/jquery.dataTables.js"></script>
	<script src="index.js"></script>
</body>

</html>