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
		<link rel="icon" type="image/png" href="../../../librerias/images/icons/favicon.ico"/>
		<link rel="stylesheet" type="text/css" href="../../../librerias/js/bootstrap/css/bootstrap.min.css">
		<link rel="stylesheet" type="text/css" href="../../../librerias/fonts/font-awesome-4.7.0/css/font-awesome.min.css">
		<link rel="stylesheet" type="text/css" href="../../../librerias/css/main.css">
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA==" crossorigin="anonymous" />
		<link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.10.22/css/jquery.dataTables.css">
		<link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.10.22/css/jquery.dataTables.min.css">
		<link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/buttons/1.6.4/css/buttons.dataTables.min.css">
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

		#tablarReporte42 tbody td{
		    text-align: center;
		},
		#tablaReporte42 thead th {
		    text-align: center;
		}
	</style>
<body>
	<div class="sidebar-menu">
	  	<nav class="navbar navbar-dark">
	  		<a href="../../adminReportes/reportesPrincipal.php" >
		    	<button class="btn btn-info" id="volverMenu" type="button"> Volver </button>
	    	</a>
	    	<div class="col-11 d-flex justify-content-center" style="color: black;">
	    		<h1> FerreApp > Reportes > Valorizado Pedidos no entregados</h1>
	    	</div>
	  	</nav>
	</div>
	<br>
	<div
	 class="col-lg-12 col-12 d-flex flex-row-reverse">
	 <!--	<a href="adminReportes.php" >
	 	<button class="btn btn-lg btn-info" id="btnAdminReportes" >Administrar Reportes</button>
		 </a>-->
		
	</div>
	<br>
	<div class="col-lg-12 w-100 contenedorTabla">
		<table id="tablaReporte42" class="display nowrap" style="width:100%">
	        <thead>
	            <tr>
	                <th>Nro Pedido</th>
					<th>Cliente</th>
					<th>Fecha Pedido</th>
					<th>Valor</th>
					<th>Estado</th>
	
					
					</thead>
	        <tbody>
	        </tbody>
	    </table>
	</div>

	
	
	<script src="../../../librerias/js/jquery/jquery-3.2.1.min.js"></script>
	<script src="../../../librerias/js/bootstrap/js/popper.js"></script>
	<script src="../../../librerias/js/bootstrap/js/bootstrap.min.js"></script>
	<script src="https://use.fontawesome.com/releases/v5.15.1/js/all.js" data-auto-replace-svg="nest"></script>
	<script type="text/javascript" charset="utf8" src="https://cdn.datatables.net/1.10.22/js/jquery.dataTables.js"></script>
	<script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
   
	<script src="https://code.jquery.com/jquery-3.5.1.js"></script>
	<script src="https://cdn.datatables.net/1.10.22/js/jquery.dataTables.min.js"></script>
	<script src="https://cdn.datatables.net/buttons/1.6.4/js/dataTables.buttons.min.js"></script>
	<script src="https://cdn.datatables.net/buttons/1.6.4/js/buttons.flash.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.1.3/jszip.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.53/pdfmake.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.53/vfs_fonts.js"></script>
	<script src="https://cdn.datatables.net/buttons/1.6.4/js/buttons.html5.min.js"></script>
	<script src="https://cdn.datatables.net/buttons/1.6.4/js/buttons.print.min.js"></script>
	<script>    

    $(document).ready(function () {
	iniciarTablaReporte42(function () {

	});
    });


    function iniciarTablaReporte42(callback) {

        console.log("ingresa a la funcion iniciar tabla reporte 42");
        $("#tablaReporte42").DataTable({
        "ajax": {
        "method": "POST",
        "url": "../Reportes/Reporte42SQL.php"

    	},
		"columns": [
			{ "data": "idPedido" },      
			{ "data": "nombre_apellido" },
			{ "data": "fechaPedido" },
			{ "data": "valor" },
			{ "data": "estado" }

			
					
			],
			

		"language": {
			"url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Spanish.json"
		},
		dom: 'Bfrtip',
		/*buttons: [
            'copy', 'csv', 'excel', 'pdf', 'print'
		]*/
		buttons:[ 
			{
				extend:    'excelHtml5',
				text:      '<i class="fas fa-file-excel"></i> ',
				titleAttr: 'Exportar a Excel',
				className: 'btn btn-success'
			},
			{
				extend:    'pdfHtml5',
				text:      '<i class="fas fa-file-pdf"></i> ',
				titleAttr: 'Exportar a PDF',
				className: 'btn btn-danger'
			},
			{
				extend:    'print',
				text:      '<i class="fa fa-print"></i> ',
				titleAttr: 'Imprimir',
				className: 'btn btn-info'
			},

			{
				extend:    'copy',
				text:      '<i class="fa fa-copy"></i> ',
				titleAttr: 'Copiar',
				className: 'btn btn-info'
			},
		]
	/*	"columnDefs": [

   		 		{ className: "dt-body-right", "targets": [2] }
			 
			] */
		


    
	});



callback();
}
 

        
    </script>
</body>

</html>