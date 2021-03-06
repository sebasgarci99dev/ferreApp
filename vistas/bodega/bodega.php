<?php
	require_once('../../server/Clases/conexion.php');
?>

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
		<link rel="stylesheet" type="text/css" href="../../librerias/js/bootstrap/css/bootstrap.css">
		<link rel="stylesheet" type="text/css" href="../../librerias/fonts/font-awesome-4.7.0/css/font-awesome.min.css">
		<link rel="stylesheet" type="text/css" href="../../librerias/css/main.css">
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
		#tablaTramitePedidos thead th,
		#tablaPedidos thead td,
		#tablaPedidos tbody td, {
		    text-align: right;
		}

		#btnIngresoProduto {
			margin-left: 0.5rem;
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
	    		<h1> FerreApp > Bodega</h1>
	    	</div>
	  	</nav>
	</div>
	<br>
	<div class="col-lg-12 col-12 d-flex flex-row-reverse">
		<button class="btn btn-lg btn-info" id="btnIngresoProduto" data-toggle="modal" data-target="#modalIngreso">Ingreso</button>
		<button class="btn btn-lg btn-info" id="btnRetiroProducto" data-toggle="modal" data-target="#modalRetiro">Devolución</button>
	</div>
	<br>
	<div class="col-lg-12 w-100 contenedorTabla">
		<table id="tablaPedidos" class="display table table-info table-striped dt-responsive nowrap" style="width:100%">
	        <thead>
	            <tr>
	                <th>Cód. pedido</th>
					<th>Cliente</th>
					<!-- <th>Email</th> -->
					<th>Fecha Pedido</th>
					<th>Departamento</th>
					<th>Ciudad</th>
					<th>Dirección</th>
					<th>Estado Pedido</th>
					<th>Opciones</th>
	            </tr>
	        </thead>
	        <tbody>
	        </tbody>
	    </table>
	</div>

	<!-- Modal de ingreso de productos a bodega -->
	<!-- Modal -->
	<div class="modal fade" id="modalIngreso" tabindex="-1" role="dialog" aria-labelledby="modalIngresoLabel" aria-hidden="true">
	  	<div class="modal-dialog" role="document">
	    	<div class="modal-content">
	      		<div class="modal-header">
	        		<h5 class="modal-title tituloModalCrear" id="titulo">Ingreso de Productos</h5>
	        		<button type="button" class="close" data-dismiss="modal" aria-label="Close">
	          			<span aria-hidden="true">&times;</span>
	        		</button>
	      		</div>
	      		<div class="modal-body">
					<select id="productoIngreso" name="productoIngreso" class="form-control browser-default custom-select"required>
						<option selected value="0">Seleccione un Producto</option>
							<?php
					// Realizamos la consulta para extraer los datos
					          $query = $conexion -> query ("SELECT * FROM producto");
					          while ($valores = mysqli_fetch_array($query)) {
					// En esta sección estamos llenando el select con datos extraidos de una base de datos.
					            echo '<option value="'.$valores[idProducto].'">'.$valores[nombre].'</option>';
					          }
					        ?>
  					</select>
					<br><br>
					<input type="number" id="cantidadIngreso" name="cantidad" class="form-control" placeholder="Cantidad" required>
	      		</div>
	      		<div class="modal-footer">
	        		<button type="button" class="btn btn-secondary btnCerrarModal" data-dismiss="modal">Cerrar</button>
	        		<button type="button" class="btn btn-info" id="btnIngresoProdutosBodega">Adicionar</button>
	      		</div>
	    	</div>
	  	</div>
	</div>

	<!-- Modal retiro de productos de bodega -->
	<div class="modal fade" id="modalRetiro" tabindex="-1" role="dialog" aria-labelledby="modalRetiroLabel" aria-hidden="true">
	  	<div class="modal-dialog" role="document">
	    	<div class="modal-content">
	      		<div class="modal-header">
	        		<h5 class="modal-title tituloModalRetiro" id="titulo">Retiro de Productos</h5>
	        		<button type="button" class="close" data-dismiss="modal" aria-label="Close">
	          			<span aria-hidden="true">&times;</span>
	        		</button>
	      		</div>
	      		<div class="modal-body">
					<select id="productoRetiro" name="productoRetiro" class="form-control browser-default custom-select"required>
						<option selected value="0">Seleccione un Producto</option>
							<?php
					// Realizamos la consulta para extraer los datos
					          $query = $conexion -> query ("SELECT * FROM producto");
					          while ($valores = mysqli_fetch_array($query)) {
					// En esta sección estamos llenando el select con datos extraidos de una base de datos.
					            echo '<option value="'.$valores[idProducto].'">'.$valores[nombre].'</option>';
					          }
					        ?>
  					</select>
					<br><br>
					<input type="number" id="cantidadRetiro" name="cantidad" class="form-control" placeholder="Cantidad" required>
	      		</div>
	      		<div class="modal-footer">
	        		<button type="button" class="btn btn-secondary btnCerrarModal" data-dismiss="modal">Cerrar</button>
	        		<button type="button" class="btn btn-info" id="btnRetiroProdutosBodega">Retirar</button>
	      		</div>
	    	</div>
	  	</div>
	</div>

	<div class="modal fade" id="modalPedidos" tabindex="-1" aria-labelledby="modalPedidosLabel" aria-hidden="true">
	  	<div class="modal-dialog modal-xl" role="document">
	    	<div class="modal-content">
	      		<div class="modal-header">
	        		<h5 class="modal-title titulomodalPedidos" id="titulo">Tramite de Pedidos</h5>
	        		<button type="button" class="close" data-dismiss="modal" aria-label="Close">
	          			<span aria-hidden="true">&times;</span>
	        		</button>
	      		</div>

	      		<div class="modal-body">
	      			<div class="container-fluid">
	      				<div class="row">
			      			<div class="col-6">

			      				<fieldset disabled>
									<div class="card">
										<h5 class="card-header">Información de Contacto Cliente</h5>
											<div class="card-body">
							      				<div class="input-group mb-3">
							      					<div class="input-group-prepend">
							      						<span class="input-group-text" id="inputGroup-sizing-default">Cliente: </span>
							      					</div>
							      					<input type="text" class="form-control"  aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" id="cliente" name="cliente" placeholder="Cliente" style="background: white;">
							      				</div>	
												
												<div class="input-group mb-3">
							      					<div class="input-group-prepend">
							      						<span class="input-group-text" id="inputGroup-sizing-default">Celular: </span>
							      					</div>
												<input type="text" class="form-control"  aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" id="telefono" name="telefono" class="form-control" placeholder="Telefono Movil" style="background: white;">
												</div>	
												
												<div class="input-group mb-3">
							      					<div class="input-group-prepend">
							      						<span class="input-group-text" id="inputGroup-sizing-default">Dirección: </span>
							      					</div>
												<input type="text" class="form-control"  aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" id="direccionCliente" name="direccionCliente" class="form-control" placeholder="Dirección Cliente" style="background: white;">
												</div>	
									
												<div class="input-group mb-3">
							      					<div class="input-group-prepend">
							      						<span class="input-group-text" id="inputGroup-sizing-default">E-Mail: </span>
							      					</div>
												<input type="text" class="form-control"  aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" id="email" name="email" class="form-control" placeholder="Email" style="background: white;">
												</div>	
											</div>
									</div>
								
								<br>

									<div class="card">
										<h5 class="card-header">Información Pedido</h5>
											<div class="card-body">

												<div class="input-group mb-3">
							      					<div class="input-group-prepend">
							      						<span class="input-group-text" id="inputGroup-sizing-default">Departamento: </span>
							      					</div>
												<input type="text" class="form-control"  aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" id="departamento" name="departamento" class="form-control" placeholder="Departamento" style="background: white;">
												</div>	
												
												<div class="input-group mb-3">
							      					<div class="input-group-prepend">
							      						<span class="input-group-text" id="inputGroup-sizing-default">Municipio: </span>
							      					</div>
												<input type="text" class="form-control"  aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" id="municipio" name="municipio" class="form-control" placeholder="Municipio" style="background: white;">
												</div>	
												
												<div class="input-group mb-3">
							      					<div class="input-group-prepend">
							      						<span class="input-group-text" id="inputGroup-sizing-default">Dirección: </span>
							      					</div>
												<input type="text" class="form-control"  aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" id="direccionPedido" name="direccionPedido" class="form-control" placeholder="Dirección Pedido" style="background: white;">
												</div>

												<div class="input-group mb-3">
							      					<div class="input-group-prepend">
							      						<span class="input-group-text" id="inputGroup-sizing-default">Fecha Pedido: </span>
							      					</div>
												<input type="text" class="form-control"  aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" id="fechaPedido" name="fechaPedido" class="form-control" placeholder="Fecha Pedido" style="background: white;">
												</div>	
												
												<div class="input-group mb-3">
							      					<div class="input-group-prepend">
							      						<span class="input-group-text" id="inputGroup-sizing-default">Estado Pedido: </span>
							      					</div>
												<input type="text" class="form-control"  aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" id="estPedido" name="estPedido" class="form-control" placeholder="Estado Pedido" style="background: white;">
												</div>

												<div class="input-group mb-3">
							      					<div class="input-group-prepend">
							      						<span class="input-group-text" id="inputGroup-sizing-default">Aplica Domilicio: </span>
							      					</div>
												<input type="text" class="form-control"  aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" id="estDomicilio" name="estDomicilio" class="form-control" placeholder="Aplica Domicilio: " style="background: white;">
												</div>

											</div>
									</div>
								</fieldset>
							</div>

							<div class="col-6">
								<table id="tablaTramitePedidos" class="display table table-striped dt-responsive nowrap" style="width:100%;overflow-y: scroll;height: 315px;display: block;">
				        			<thead class="table-primary">
				           				<tr>
				                			<th>Cód Producto</th>
											<th>Producto</th>
											<th>Cant. Solicitada</th>
											<th>Cant. Existente</th>
				           				 </tr>
			        				</thead>
			       			 		<tbody>
			       			 			
			        				</tbody>
				    			</table>

								<div class="input-group mb-3">
  									<div class="input-group-prepend">
    									<label class="input-group-text" for="estadoPedido">Estado Pedido: </label>
  									</div>
  									<select id="estadoPedido" name="estadoPedido" class="selectpicker" id="estadoPedido" data-width="100%" required>
  									</select>
								</div>
								<div class="input-group mb-3 seccionDocumento">
									<div class="input-group-prepend">
    									<label class="input-group-text" for="estadoPedido">Factura: </label>
  									</div>
									<button class='btn btn-info w-100' id='generarDocumentoPedido' data-idPedido='0'>Doc</button>
								</div>
			    			</div>
			    			
						</div>
			    	</div>	
	      		</div>

	      		<div class="modal-footer">
	        		<button type="button" class="btn btn-secondary btnCerrarModal" data-dismiss="modal">Cerrar</button>
	        		<button type="button" class="btn btn-info" id="btnFinPedidoBodega">Cambiar Estado</button>
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