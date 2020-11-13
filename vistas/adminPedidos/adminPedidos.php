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
		<link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.10.22/css/jquery.dataTables.css">
		<!-- CSS -->
		<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">

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

		#tablaTramitePedidos tbody td,
		#tablaTramitePedidos thead th {
		    text-align: center;
		}

		.my-custom-scrollbar {
			position: relative;
			height: 20rem;
			overflow: auto;
		}
			.table-wrapper-scroll-y {
			display: block;
		}

		@media (min-width: 768px) {
		  	.modal-xl {
		  	  	width: 90%;
		   		max-width:1300px;
		  	}
		}
	</style>
<body>
	<div class="sidebar-menu">
	  	<nav class="navbar navbar-dark">
	  		<a href="../principal.php" >
		    	<button class="btn btn-info" id="volverMenu" type="button"> Volver </button>
	    	</a>
	    	<div class="col-11 d-flex justify-content-center" style="color: black;">
	    		<h1> FerreApp > Admin. Pedidos</h1>
	    	</div>
	  	</nav>
	</div>
	<br>
	<div class="col-lg-12 col-12 d-flex flex-row-reverse">
		<button class="btn btn-lg btn-info" id="btnCrearPedidos" data-toggle="modal" data-target="#modalPedidoCliente">Nuevo pedido</button>
	</div>
	<br>
	<div class="col-lg-12 w-100 contenedorTabla">
		<table id="tablaPedidos" class="display" style="width:100%">
	        <thead>
	            <tr>
	                <th>Cód. pedido</th>
					<th>Cliente</th>
					<th>Email</th>
					<th>FechaPedido</th>
					<th>Departamento</th>
					<th>Ciudad</th>
					<th>Direccion</th>
					<th>Estado</th>
					<!-- <th>Opciones</th> -->
	            </tr>
	        </thead>
	        <tbody>
	        </tbody>
	    </table>
	</div>

	<!-- Modal de Creacion de pedidos -->
	<!-- Modal -->
	<div class="modal fade" id="modalPedidoCliente" tabindex="-1" aria-labelledby="modalPedidosLabel" aria-hidden="true">
	  	<div class="modal-dialog modal-xl" role="document">
	    	<div class="modal-content">
	      		<div class="modal-header">
	        		<h5 class="modal-title titulomodalPedidosCliente" id="titulo">Tramite de Pedidos</h5>
	        		<button type="button" class="close" data-dismiss="modal" aria-label="Close">
	          			<span aria-hidden="true">&times;</span>
	        		</button>
	      		</div>

	      		<div class="modal-body">
	      			<div class="container-fluid">
	      				<div class="row">
			      			<div class="col-5">
			      				<div class="input-group mb-3">
			      					<div class="input-group-prepend">
			      						<span class="input-group-text" id="inputGroup-sizing-default">Seleccionar: </span>
			      						<select class="selectpicker form-control" id="selectClientes" data-live-search="true" data-style="btn-info" data-width="20rem">
			      						</select>
			      					</div>
			      				</div>
			      				<div class="input-group mb-3">
			      					<div class="input-group-prepend">
			      						<span class="input-group-text" id="inputGroup-sizing-default">Cliente: </span>
			      					</div>
			      					<input type="text" class="form-control"  aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" id="cliente" name="cliente" placeholder="Cliente" disabled="disabled">
			      				</div>	
								
								<div class="input-group mb-3">
			      					<div class="input-group-prepend">
			      						<span class="input-group-text" id="inputGroup-sizing-default">Celular: </span>
			      					</div>
								<input type="text" class="form-control"  aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" id="telefono" name="telefono" class="form-control" placeholder="Telefono Movil" disabled="disabled">
								</div>	
								
								<div class="input-group mb-3">
			      					<div class="input-group-prepend">
			      						<span class="input-group-text" id="inputGroup-sizing-default">Dirección: </span>
			      					</div>
								<input type="text" class="form-control"  aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" id="direccion" name="direccion" class="form-control" placeholder="Dirección" disabled="disabled">
								</div>	

								<div class="input-group mb-3">
			      					<div class="input-group-prepend">
			      						<span class="input-group-text" id="inputGroup-sizing-default">E-Mail: </span>
			      					</div>
								<input type="text" class="form-control"  aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" id="email" name="email" class="form-control" placeholder="Email" disabled="disabled">
								</div>	
								
								<div class="input-group mb-3">
			      					<div class="input-group-prepend">
			      						<span class="input-group-text" id="inputGroup-sizing-default">Departamento: </span>
			      					</div>
								<input type="text" class="form-control"  aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" id="departamento" name="departamento" class="form-control" placeholder="Departamento" disabled="disabled">
								</div>	
								
								<div class="input-group mb-3">
			      					<div class="input-group-prepend">
			      						<span class="input-group-text" id="inputGroup-sizing-default">Municipio: </span>
			      					</div>
								<input type="text" class="form-control"  aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" id="municipio" name="municipio" class="form-control" placeholder="Municipio" disabled="disabled">
								</div>
							</div>
							<div class="col-7">
								<div class="input-group mb-4">
			      					<div class="input-group-prepend">
			      						<span class="input-group-text" id="inputGroup-sizing-default">Seleccionar: </span>
			      						<select class="selectpicker form-control" id="selectProductos" data-live-search="true" data-style="btn-info" data-width="21rem" data-size="5">
			      						</select>
			      						<input type="number" class="form-control" id="cantidadProd" placeholder="Cant.">
			      						<button type="button" id="btnAgregarProductos" class="btn btn-info">
			      							<i class="fas fa-plus-circle fa-1x"></i>
			      						</button>
			      					</div>
			      				</div>
								<table id="tablaTramitePedidos" class="display table table-info table-wrapper-scroll-y my-custom-scrollbar" style="width:100%">
				        			<thead>
				           				<tr>
				                			<th>Cód Producto</th>
											<th>Producto</th>
											<th>Cant. Solicitada</th>
											<th>Cant. Existente</th>
											<th>Precio</th>
											<th>Valor total</th>
											<th>Opciones</th>
				           				 </tr>
			        				</thead>
			       			 		<tbody>
			       			 			
			        				</tbody>
				    			</table>
			    			</div>
						</div>
						<div class="row">
							<div class="col-5">
								<hr>
								<div class="input-group mb-3">
			      					<div class="input-group-prepend">
			      						<div class="form-check">
										  	<input class="form-check-input" type="checkbox" value="0" id="esDomicilio">
										  	<label class="form-check-label" for="esDomicilio">
										    	Es domicilio?
										  	</label>
										</div>
			      					</div>
			      				</div>
								<div class="input-group mb-3">
			      					<div class="input-group-prepend">
		      							<span class="input-group-text" id="inputGroup-sizing-default">Direccion: </span>
		      						</div>
			      					<input type="text" class="form-control"  aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" id="direccionPedido" name="municipio" class="form-control" placeholder="Dirección">
			      				</div>
			      				<div class="input-group mb-3">
			      					<div class="input-group-prepend">
			      						<span class="input-group-text" id="inputGroup-sizing-default">Departamento: </span>
			      					</div>
									<select class="selectpicker form-control" id="selectDepto" data-live-search="true" data-style="btn-info" name="selectDepto" data-size="8">
									</select>
								</div>	
								<div class="input-group mb-3">
			      					<div class="input-group-prepend">
			      						<span class="input-group-text" id="inputGroup-sizing-default">Municipio: </span>
			      					</div>
									<select class="selectpicker form-control" id="selectMunic" data-live-search="true" data-style="btn-info" name="selectMunic" data-size="8">
									</select>
								</div>
							</div>
							<div class="col-7">
								<hr>
								<div class="input-group mb-3">
									<div class="input-group-prepend">
			      						<span class="input-group-text" id="inputGroup-sizing-default">Total del Pedido: </span>
			      					</div>
		      						<input type="text" class="form-control"  aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" id="totalPedido" name="totalPedido" placeholder="$ Total" value="0" disabled="disabled">
		      					</div>
							</div>
			    		</div>
			    	</div>
	      		</div>

	      		<div class="modal-footer">
	        		<button type="button" class="btn btn-secondary btnCerrarModal" data-dismiss="modal">Cerrar</button>
	        		<button type="button" class="btn btn-info" id="btnCrearPedido">Finalizar Pedido</button>
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
	<script src="../../librerias/js/validarCampos/ValidarCampos.js"></script>

	<script src="index.js"></script>
</body>

</html>