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

		.contenedorTabla {
			padding: 1% 2%;
		}

		#tablaModuloReportes tbody td,
		#tablaModuloReportes thead th {
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
	    		<h1> FerreApp > Reportes</h1>
	    	</div>
	  	</nav>
	</div>
	<br>
	<div
	 class="col-lg-12 col-12 d-flex flex-row-reverse">
	 	<!--<a href="adminReportes.php" >-->
	 	<!--<button class="btn btn-lg btn-info" id="btnAdminReportes" >Administrar Reportes</button>-->
		<!-- </a>-->
	</div>
	<br>
	<div class="col-lg-12 w-100 contenedorTabla">
		<table id="tablaModuloReportes" class="display" style="width:100%">
	        <thead>
	            <tr>
	                <th>Id Reporte</th>
					<th>Nombre Reporte</th>
					<th>Generar</th>
	            </tr>
	        </thead>
	        <tbody>
	        </tbody>
	    </table>
	</div>

	<div class="modal fade" id="modalReportes" tabindex="-1" role="dialog" aria-labelledby="modalReporteLabel" aria-hidden="true">
	  	<div class="modal-dialog" role="document">
	    	<div class="modal-content">
	      		<div class="modal-header">
	        		<h5 class="modal-title tituloModalCrear" id="titulo">Escoger Grupo de Reporte</h5>
	        		<h5 class="d-none modal-title tituloModalEditar" id="titulo">Editar Producto</h5>
	        		<button type="button" class="close" data-dismiss="modal" aria-label="Close">
	          		<span aria-hidden="true">&times;</span>
	        		</button>
	      		</div>
	      		<div class="modal-body">
				  <br>
				  <select id="grupoReportes" name="grupoReportes" class="form-control" required>
				  <option selected disabled >Selecciona un Grupo de Reportes</option>
					<?php
						require_once('../../server/Clases/conexion.php');
						// Realizamos la consulta para extraer los datos
						$consulta="
							SELECT	
							u.idModulo, 
							u.nombre_modulo
							FROM modulo u where u.idModulo !=6 and u.idModulo !=1 and u.idModulo !=5";
						$valores = mysqli_query($conexion, $consulta) or die('no se consulto el Modulo');
						while ($seleccion = mysqli_fetch_array($valores)) {
						echo '<option value="'.$seleccion[idModulo].'">'.$seleccion[nombre_modulo].'</option>';
						}
					?>
				</select>	
					<br>
								
				  </div>
	      		<div class="modal-footer">
	        		<button type="button" class="btn btn-secondary btnCerrarModal" data-dismiss="modal">Cerrar</button>
	        		<button type="button" class="btn btn-info d-none" id="btnEditarProducto">Editar Producto</button>
	        		<button type="button" class="btn btn-info" id="btnListarReporte">Listar Reportes</button>
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

	<script src="indexReportes.js"></script>
</body>

</html>