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
		<link rel="icon" type="image/png" href="../librerias/images/icons/favicon.ico"/>
		<link rel="stylesheet" type="text/css" href="../librerias/js/bootstrap/css/bootstrap.min.css">
		<link rel="stylesheet" type="text/css" href="../librerias/fonts/font-awesome-4.7.0/css/font-awesome.min.css">
		<link rel="stylesheet" type="text/css" href="../librerias/css/main.css">
	</head>
	<style type="text/css">
		.navbar {
			background-color: #91b4c3;
		}

		.contenedorTarjetas {
			display: flex;
			justify-content: center;
			text-align: center;
			padding-top: 1rem;
		}

		.card {
			margin: 1rem;
		}

		.cardProductos, 
		.cardBodega, 
		.cardReportes {
			cursor: pointer;
			border-radius: 1.5rem;
			background-color: #91b4c3;
			color: white; 
		}

		#menuUsuario {
			display: none;
			margin-top: 1rem;
			border-radius: 2rem;
			background-color: #91b4c3;
			color: white;
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

		#imgPrincipal {
			object-fit: cover;
			width: 100%;
			height: 100%;
			position: absolute;
			filter: blur(2px);

		}

		.card-img-top {
			height: 19rem;
			object-fit: cover;
			margin-top: 1rem;
			border-radius: 1rem;
		}
		.card-body {
			color: white;
		}
		.card-text {
			color: white;
		}

	</style>
<img src="../librerias/images/fondoPrincipal1.jpg" id="imgPrincipal">
<body>
	<div class="sidebar-menu">
	  	<nav class="navbar navbar-dark">
	    	<button class="navbar-toggler col-1" id="abrirMenu" type="button">
	      		<span class="navbar-toggler-icon"></span>
	    	</button>
	    	<div class="col-11 d-flex justify-content-center" style="color: white;">
	    		<h3> | FerreApp | </h3>
	    	</div>
	  	</nav>
	</div>
	<div class="col-lg-12 d-flex">
		<div id="menuUsuario" class="col-lg-2">
	      	<ul>
	      		<li>Hola <br><?php echo $user['Nombre'];?></li>
	      		<li><?php echo $user['Apellido'];?></li>
	      		<br>
	      		<li><?php echo $user['Email'];?></li>
	      		<br>
	      		<li><?php echo $user['Direccion'];?></li>
	      	</ul>
	      	<a href="../server/Clases/salir.php" >
	  			<button id="btnCerrarSesion" class="btn btn-secondary">
	  				Cerrar sesión
	  			</button>
	  		</a>
	    </div>

		<div class="col-lg-12 contenedor2">
			<div class="contenedorTarjetas">
<!-- 				<div class="card col-lg-3 col-md-6 col-xs-12 cardUsuarios">
					<a href="formularioBarberos.php">
					  	<img src="../librerias/images/barberos.PNG" class="card-img-top" alt="...">
					  	<div class="card-body">
					    	<h5 class="card-title">Usuarios</h5>
					    	<p class="card-text">Administra tus usuarios del sistema</p>
					  	</div>
					</a>
				</div> -->
				<div class="card col-lg-3 col-md-6 col-xs-12 cardProductos">
					<a href="formularioAgenda.php">
					  	<img src="../librerias/images/productos.jpg" class="card-img-top" alt="...">
					  	<div class="card-body">
					    	<h5 class="card-title">Productos</h5>
					    	<p class="card-text">Administra los productos de la Ferreteria</p>
					  	</div>
					</a>
				</div>
				<div class="card col-lg-3 col-md-6 col-xs-12 cardBodega">
					<a href="formularioTurnos.php">
					  	<img src="../librerias/images/bodega.jpg" class="card-img-top" alt="...">
					  	<div class="card-body">
					    	<h5 class="card-title">Bodega</h5>
					    	<p class="card-text">Ten tu inventario listo</p>
					  	</div>
					</a>
				</div>
				<div class="card col-lg-3 col-md-6 col-xs-12 cardReportes">
					<a href="formularioTurnos.php">
					  	<img src="../librerias/images/reportes.PNG" class="card-img-top" alt="...">
					  	<div class="card-body">
					    	<h5 class="card-title">Reportes</h5>
					    	<p class="card-text">Toda la información del sistema</p>
					  	</div>
					</a>
				</div>
			</div>
		</div>
	</div>

	<script src="../librerias/js/jquery/jquery-3.2.1.min.js"></script>
	<script src="../librerias/js/bootstrap/js/popper.js"></script>
	<script src="../librerias/js/bootstrap/js/bootstrap.min.js"></script>
	<script src="../main.js"></script>

</body>

</html>