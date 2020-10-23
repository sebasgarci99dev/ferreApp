<?php
	session_start();
	$user = $_SESSION['usuario'];

	if($user == null) {
		header('Location: ../index.php');
	}
?>

<html>
	<head>
		<title>FerreApp</title>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link rel="icon" type="image/png" href="../librerias/images/icons/favicon.ico"/>
		<link rel="stylesheet" type="text/css" href="../librerias/js/bootstrap/css/bootstrap.min.css">
		<link rel="stylesheet" type="text/css" href="../librerias/fonts/font-awesome-4.7.0/css/font-awesome.min.css">
		<link rel="stylesheet" type="text/css" href="../librerias/css/main.css">
	</head>
	<style type="text/css">
		body {
			background-color: #efefef;
		}

		.navbar {
			background-color: #c5c5c5;
		}

		.contenedorTarjetas {
			display: flex;
			text-align: center;
			padding-top: 1rem;
			overflow-x: auto;
		}

		.card {
			margin: 1rem;
		}

		.cardProductos, 
		.cardBodega, 
		.cardReportes {
			cursor: pointer;
			border-radius: 1.5rem;
			background-color: #c5c5c5;
			color: black; 
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

		#imgPrincipal {
			object-fit: cover;
			width: 100%;
			height: 100%;
			position: absolute;
			filter: contrast(0.5);
		}

		.card-img-top {
			height: 19rem;
			object-fit: cover;
			margin-top: 1rem;
			border-radius: 1rem;
		}
		.card-body {
			color: black;
			text-align: center;
		}
		.card-text {
			color: black;
		}

	</style>
<!-- <img src="../librerias/images/fondoPrincipal1.jpg" id="imgPrincipal"> -->
<body>
	<div class="sidebar-menu">
	  	<nav class="navbar navbar-dark">
	    	<button class="navbar-toggler col-1" id="abrirMenu" type="button">
	      		<span class="navbar-toggler-icon"></span>
	    	</button>
	    	<div class="col-11 d-flex justify-content-center" style="color: black;">
	    		<h1> | FerreApp | </h1>
	    	</div>
	  	</nav>
	</div>
	<div class="col-lg-12 d-flex">
		<div id="menuUsuario" class="col-lg-2">
	      	<ul>
	      		<li>Hola <i><br><?php echo $user['Nombre'];?></li>
	      		<li><?php echo $user['Apellido'];?></li> </i>
	      		<li>- <?php echo $user['Email'];?></li>
	      		<li>- <?php echo $user['Direccion'];?></li>
	      	</ul>
	      	<a href="../server/Clases/salir.php" >
	  			<button id="btnCerrarSesion" class="btn btn-secondary">
	  				Cerrar sesión
	  			</button>
	  		</a>
	    </div>

		<div class="col-lg-12 col-12">
			<div class="card-group">
			  	<div class="card">
			  		<a href="adminUsuarios/adminUsuarios.php">
			    		<img class="card-img-top" src="../librerias/images/users.png"alt="Card image cap">
			    	</a>
			    	<div class="card-body">
			      		<h5 class="card-title">Admin. usuarios</h5>
			      		<p class="card-text">Administra los usuarios del sistema de información.</p>
			    	</div>
			  	</div>
			  	<div class="card">
				  <a href="adminProducto/adminProductos.php">
			    	<img class="card-img-top" src="../librerias/images/productos.jpg" alt="Card image cap">
				</a>	
			    	<div class="card-body">
				      	<h5 class="card-title">Productos</h5>
				      	<p class="card-text">Administra toda la fuente de tu organización.</p>
			    	</div>
			  	</div>
			  	<div class="card">
			    	<img class="card-img-top" src="../librerias/images/pedidos.png" alt="Card image cap">
			    	<div class="card-body">
				      	<h5 class="card-title">Pedidos</h5>
				      	<p class="card-text">Maneja todas las compras de tus clientes.</p>
			    	</div>
			  	</div>
			  	<div class="card">
			    	<img class="card-img-top" src="../librerias/images/bodega.jpg" alt="Card image cap">
			    	<div class="card-body">
				      	<h5 class="card-title">Bodega</h5>
				      	<p class="card-text">Maneja todo tu inventario desde aquí.</p>
			    	</div>
			  	</div>
			  	<div class="card">
			    	<img class="card-img-top" src="../librerias/images/reportes.png" alt="Card image cap">
			    	<div class="card-body">
				      	<h5 class="card-title">Reportes</h5>
				      	<p class="card-text">Administra la trazabilidad de tu organización.</p>
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