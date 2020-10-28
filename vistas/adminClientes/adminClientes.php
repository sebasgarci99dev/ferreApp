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
		<link rel="icon" type="image/png" href="../../librerias/images/icons/favicon.ico"/>
		<link rel="stylesheet" type="text/css" href="../../librerias/js/bootstrap/css/bootstrap.min.css">
		<link rel="stylesheet" type="text/css" href="../../librerias/fonts/font-awesome-4.7.0/css/font-awesome.min.css">
		<link rel="stylesheet" type="text/css" href="../../librerias/css/main.css">
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA==" crossorigin="anonymous" />
		<link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.10.22/css/jquery.dataTables.css">

		<!-- Latest compiled and minified CSS SELECTPICKER--> 
		<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-select@1.13.14/dist/css/bootstrap-select.min.css">

	</head>
	<style type="text/css">
		body {
			background-color: #efefef;
		}

		.navbar {
			background-color: #c5c5c5;
		}

		#menuCliente {
			display: none;
			margin-top: 1.1%;
			border-radius: .25rem;
			border: 1px solid rgba(0,0,0,.125);
			background-color: white;
			color: black;
		}

		#menuCliente ul {
			margin: 1rem;
			font-size: 1.1rem;
			line-height: 2rem;
		}

		#menuCliente ul li {
			overflow: hidden;
			text-overflow: ellipsis;
		}

		#menuCliente a {
			display: flex;
			justify-content: center;
		}

		#btnCerrarSesion {
			position: absolute;
			bottom: 2rem;
		}

		.contenedorTabla {
			padding: 1% 2%;
		}

		#tablaClientes tbody td,
		#tablaClientes thead th {
		    text-align: center;
		}
	</style>
<body>
	<div class="sidebar-menu">
	  	<nav class="navbar navbar-dark">
	  		<a href="../principal.php" >
		    	<button class="btn btn-info" id="volverMenu" type="button"> Volver </button>
	    	</a>
	    	<div class="col-11 d-flex justify-content-center" style="color: black;">
	    		<h1> FerreApp > Admin. Clientes</h1>
	    	</div>
	  	</nav>
	</div>
	<br>
	<div class="col-lg-12 col-12 d-flex flex-row-reverse">
		<button class="btn btn-lg btn-info" id="btnCrearCliente" data-toggle="modal" data-target="#modalCliente">Crear cliente</button>
	</div>
	<br>
	<div class="col-lg-12 w-100 contenedorTabla">
		<table id="tablaClientes" class="display table table-info table-striped dt-responsive nowrap" style="width:100%">
	        <thead>
	            <tr>
	            	<th>Id. Client</th>
	                <th>Ident.</th>
					<th>Nombre</th>
					<th>E-mail</th>
					<th>Dirección</th>
					<th>Tel. cel</th>
					<th>Tel. fijo</th>
					<th>Depart.</th>
					<th>Municipio</th>
					<th>Opciones</th>
	            </tr>
	        </thead>
	        <tbody>
	        </tbody>
	    </table>
	</div>

	<!-- Modal de Creacion de Clientes -->
	<!-- Modal -->
	<div class="modal fade" id="modalCliente" tabindex="-1" role="dialog" aria-labelledby="modalClienteLabel" aria-hidden="true">
	  	<div class="modal-dialog" role="document">
	    	<div class="modal-content">
	      		<div class="modal-header">
	        		<h5 class="modal-title tituloModalCrear" id="titulo">Crear Cliente</h5>
	        		<h5 class="d-none modal-title tituloModalEditar" id="titulo">Editar Cliente</h5>
	        		<button type="button" class="close" data-dismiss="modal" aria-label="Close">
	          			<span aria-hidden="true">&times;</span>
	        		</button>
	      		</div>
	      		<div class="modal-body">
	      			<input type="text" id="codigo" name="codigo" class="form-control" placeholder="Cedula o NIT" required>
	      			<br>
	      			<input type="text" id="nombre" name="nombre" class="form-control" placeholder="Nombre" required>
					<br>
					<input type="text" id="apellido" name="apellido" class="form-control" placeholder="Apellido" required>
					<br>
					<input type="text" id="direccion" name="direccion" class="form-control" placeholder="Dirección" required>
					<br>
					<input type="text" id="tel_fijo" name="tel_fijo" class="form-control" placeholder="Telefono fijo" required>
					<br>
					<input type="text" id="tel_cel" name="tel_cel" class="form-control" placeholder="Telefono celular" required>
					<br>
	        		<input type="email" id="email" name="email" class="form-control" placeholder="Email" required>
					<br>
					<select class="selectpicker form-control" id="selectDepto" data-live-search="true" data-style="btn-info" name="selectDepto">
					</select>
					<br>
					<br>
					<select class="selectpicker form-control" id="selectMunic" data-live-search="true" data-style="btn-info" name="selectMunic">
					</select>
	      		</div>
	      		<div class="modal-footer">
	        		<button type="button" class="btn btn-secondary btnCerrarModal" data-dismiss="modal">Cerrar</button>
	        		<button type="button" class="btn btn-info d-none" id="btnEditarCliente">Editar Cliente</button>
	        		<button type="button" class="btn btn-info" id="btnRegistrarCliente">Crear Cliente</button>
	      		</div>
	    	</div>
	  	</div>
	</div>

	<script src="../../librerias/js/jquery/jquery-3.2.1.min.js"></script>
	<script src="../../librerias/js/bootstrap/js/popper.js"></script>
	<script src="../../librerias/js/bootstrap/js/bootstrap.min.js"></script>
	<script src="https://use.fontawesome.com/releases/v5.15.1/js/all.js" data-auto-replace-svg="nest"></script>
	<script type="text/javascript" charset="utf8" src="https://cdn.datatables.net/1.10.22/js/jquery.dataTables.js"></script>
	<script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>

	<!-- Latest compiled and minified JavaScript SELECTPICKER-->
	<script src="https://cdn.jsdelivr.net/npm/bootstrap-select@1.13.14/dist/js/bootstrap-select.min.js"></script>

	<script src="index.js"></script>
</body>

</html>