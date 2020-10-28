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

		#tablaUsuarios tbody td,
		#tablaUsuarios thead th {
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
	    		<h1> FerreApp > Admin. Productos</h1>
	    	</div>
	  	</nav>
	</div>
	<br>
	<div
	 class="col-lg-12 col-12 d-flex flex-row-reverse">
	 	<a href="adminPrecio.php" >
	 	<button class="btn btn-lg btn-info" id="btnPrecios" data-toggle="modal" data-target="#modalPrecios">Precios</button>
		 </a>
		 &nbsp;
		 &nbsp;
		 <a href="adminStock.php" >
	 	<button class="btn btn-lg btn-info" id="btnStock" data-toggle="modal" data-target="#modalStock">Stock</button>
		 </a>
		 &nbsp;
		 &nbsp;
		 <a href="adminCategorias.php" >
		<button class="btn btn-lg btn-info" id="btnCategorias" data-toggle="modal" data-target="#modalCategorias">Categorias</button>
		</a>
		 &nbsp;
		 &nbsp;
		 <a href="adminUM.php" >
		   	<button class="btn btn-lg btn-info" id="btnUnidadMedida" type="button">Unidad de Medida  </button>
	    </a>
		&nbsp;
		&nbsp;
		<button class="btn btn-lg btn-info" id="btnCrearProducto" data-toggle="modal" data-target="#modalProducto">Crear Producto</button>
		
	</div>
	<br>
	<div class="col-lg-12 w-100 contenedorTabla">
		<table id="tablaProductos" class="display" style="width:100%">
	        <thead>
	            <tr>
	                <th>ID Producto</th>
					<th>Nombre</th>
					<th>Descripcion</th>
					<th>UM</th>
					<th>Cod. Barras</th>
					<th>Categoria</th>
					<th>Estado</th>
					<th>Fecha de Creación</th>
					<th>Opciones</th>
	            </tr>
	        </thead>
	        <tbody>
	        </tbody>
	    </table>
	</div>

	<!-- Modal de Creacion de Productos -->
	<!-- Modal -->
	<div class="modal fade" id="modalProducto" tabindex="-1" role="dialog" aria-labelledby="modalProductoLabel" aria-hidden="true">
	  	<div class="modal-dialog" role="document">
	    	<div class="modal-content">
	      		<div class="modal-header">
	        		<h5 class="modal-title tituloModalCrear" id="titulo">Crear Producto</h5>
	        		<h5 class="d-none modal-title tituloModalEditar" id="titulo">Editar Producto</h5>
	        		<button type="button" class="close" data-dismiss="modal" aria-label="Close">
	          			<span aria-hidden="true">&times;</span>
	        		</button>
	      		</div>
	      		<div class="modal-body">
	        		<!--<input type="number" id="idproducto" name="idproducto" class="form-control" placeholder="Codigo Producto" required> -->
					<input type="text" id="nombrePrd" name="nombrePrd" class="form-control" placeholder="Nombre Producto" required>
					<br>
					<input type="text" id="descripcionPrd" name="descripcionPrd" class="form-control" placeholder="Descripción Producto" required>
					<br>
					<!--<input type="text" id="UM" name="UM" class="form-control" placeholder="Unidad de Medida" required>-->
					<select id="UM" name="UM" class="form-control" required>
					<option selected disabled >Selecciona una Unidad de Medida</option>
					<?php
					require_once('../../server/Clases/conexion.php');
					// Realizamos la consulta para extraer los datos
					$consulta ="
						SELECT
						u.idUnidadMedida, 
						u.descripcionUnidad 
						FROM unidadMedida u";
 					$valores = mysqli_query($conexion, $consulta) or die('no se consulto la unidad');
					//$query = $mysqli_query ("SELECT * FROM paises");
					while ($seleccion = mysqli_fetch_array($valores)) {
		 			 // En esta sección estamos llenando el select con datos extraidos de una base de datos.
					  echo '<option value="'.$seleccion[idUnidadMedida].'">'.$seleccion[descripcionUnidad].'</option>';
					}
				  	?>
				</select>	
					<br>
					<input type="number" id="EAN" name="EAN" class="form-control" placeholder="Codigo de Barras" required>
					<br>
					<!--<input type="number" id="categoria" name="categoria" class="form-control" placeholder="Categoria" required>-->
					<select id="categoria" name="categoria" class="form-control" required>
					<option selected disabled >Selecciona una Categoria</option>
					<?php
					// Realizamos la consulta para extraer los datos
					$consultaCategoria ="
						SELECT
						u.idCategoria, 
						u.categoria 
						FROM categoriaproducto u";
 					$valorescategoria = mysqli_query($conexion, $consultaCategoria) or die('no se consulto la categoria');
					while ($seleccionCategoria = mysqli_fetch_array($valorescategoria)) {
		 			echo '<option value="'.$seleccionCategoria[idCategoria].'">'.$seleccionCategoria[categoria].'</option>';
					}
				  	?>
				</select>	
					<br>
					<select id="estado" name="estado" class="form-control" required>
					<option selected disabled >Selecciona un Estado</option>
					<option value="1" selected>Activo</option>
					<option value="0">Inactivo</option>					
					</select>
					<br>			
				  </div>
	      		<div class="modal-footer">
	        		<button type="button" class="btn btn-secondary btnCerrarModal" data-dismiss="modal">Cerrar</button>
	        		<button type="button" class="btn btn-info d-none" id="btnEditarProducto">Editar Producto</button>
	        		<button type="button" class="btn btn-info" id="btnRegistrarProducto">Crear Producto</button>
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

	<script src="index.js"></script>
</body>

</html>