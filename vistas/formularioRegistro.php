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
		.container {
			padding-top: 1.5%
		}

		.divCuerpo {
		    display: flex;
		    justify-content: center;
		    padding-top: 10%;
		    padding-bottom: 10%;
		    border-radius: 3%;
		    background-color: #91b4c3;
		}

		.divCuerpo h3 {
			color: white;
		}

		.form-control {
			border-radius: 10px !important;
		}

		.contenedorImagenFondo {
			width: 100%;
			height: 100%; 
			position: absolute;
			filter: blur(2px);
		}
	</style>

	<body>
		<img src="../librerias/images/fondoRegistro.jpg" class="contenedorImagenFondo" />
		<div class="container col-lg-5">
			<div class="col-12 divCuerpo text-center">
				<div class="col-lg-11 col-md-10 col-xs-10">
					<span class="login100-form-title p-t-20 p-b-45">
						| Registrar un usuario |
					</span>
					<br>
					<input type="email" id="email" name="email" class="form-control" placeholder="Email" required>
					<br>
					<input type="password" id="pass" name="contrasena" class="form-control" placeholder="Contraseña" required>
					<br>
					<input type="text" id="nombre" name="nombre" class="form-control" placeholder="Nombre" required>
					<br>
					<input type="text" id="apellido" name="apellido" class="form-control" placeholder="Apellido" required>
					<br>
					<input type="area" id="direccion" name="direccion" class="form-control" placeholder="Dirección" required>
					<br>
					<input type="number" id="telefono" name="telefono" class="form-control" placeholder="Teléfono" required>
					<br>
					<input type="text" id="tipoUsuario" name="tipoUsuario" value="2" hidden>
					<button id="btnRegistrarUsuario" class="login100-form-btn">Crear usuario!
					</button>
				</div>
			</div>
		</div>

		<script src="../librerias/js/jquery/jquery-3.2.1.min.js"></script>
		<script src="../librerias/js/bootstrap/js/popper.js"></script>
		<script src="../librerias/js/bootstrap/js/bootstrap.min.js"></script>
		<script src="../librerias/js/select2/select2.min.js"></script>
		<script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>

		<script src="../main.js"></script>
		<script src="../index.js"></script>

	</body>
</html>
