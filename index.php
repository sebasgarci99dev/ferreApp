<!DOCTYPE html>
<html lang="es">
	<head>
		<title>FerreApp</title>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link rel="icon" type="image/png" href="librerias/images/icons/favicon.ico"/>
		<link rel="stylesheet" type="text/css" href="librerias/js/bootstrap/css/bootstrap.min.css">
		<link rel="stylesheet" type="text/css" href="librerias/fonts/font-awesome-4.7.0/css/font-awesome.min.css">
		<link rel="stylesheet" type="text/css" href="librerias/fonts/Linearicons-Free-v1.0.0/icon-font.min.css">
		<link rel="stylesheet" type="text/css" href="librerias/js/animate/animate.css">
		<link rel="stylesheet" type="text/css" href="librerias/js/css-hamburgers/hamburgers.min.css">
		<!-- <link rel="stylesheet" type="text/css" href="librerias/js/select2/select2.min.css"> -->
		<link rel="stylesheet" type="text/css" href="librerias/css/util.css">
		<link rel="stylesheet" type="text/css" href="librerias/css/main.css">
	</head>
	<body>
		<div class="limiter">
			<div class="container-login100" style="background-image: url('librerias/images/imgFondoLogin1.jpg');">
				<div class="wrap-login100 p-t-190 p-b-30">
					<div class="login100-form-avatar" style="background-image: url('librerias/images/avatar01.png');">
					</div>
					<span class="login100-form-title p-t-20 p-b-45">
						| FerreApp |
					</span>
					<div class="wrap-input100 validate-input m-b-10" data-validate = "Usuario es requerido">
						<input class="input100" type="text" id="usuario" name="usuario" placeholder="Usuario">
						<span class="focus-input100"></span>
						<span class="symbol-input100">
							<i class="fa fa-user"></i>
						</span>
					</div>
					<div class="wrap-input100 validate-input m-b-10" data-validate = "Contraseña es requerido">
						<input class="input100" type="password" id="pass" name="contrasena"  placeholder="Contraseña">
						<span class="focus-input100"></span>
						<span class="symbol-input100">
							<i class="fa fa-lock"></i>
						</span>
					</div>

					<div class="container-login100-form-btn p-t-10">
						<button id="btnLogin" class="login100-form-btn">
							Inicio de sesión
						</button>
					</div>

					<div class="text-center w-full">
						<a class="txt1" href="vistas/formularioRegistro.php">
							Registrate!
							<i class="fa fa-long-arrow-right"></i>	
						</a>
					</div>
				</div>
			</div>
		</div>
		
		<script src="librerias/js/jquery/jquery-3.2.1.min.js"></script>
		<script src="librerias/js/bootstrap/js/popper.js"></script>
		<script src="librerias/js/bootstrap/js/bootstrap.min.js"></script>
		<script src="librerias/js/select2/select2.min.js"></script>
		<script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>

		<script src="main.js"></script>
		<script src="index.js"></script>

	</body>
</html>