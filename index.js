$(document).ready(function() {

});

// Evento para iniciar sesion
$("#btnLogin").on("click", function(e) {
	var usuario = $("#usuario").val();
	var pass 	= $("#pass").val(); 

	var data = new FormData();
	data.append('usuario', usuario);
	data.append('pass', pass);

	// Servicio web
    var solicitud = new XMLHttpRequest();
    solicitud.open("POST", "server/Clases/login.php", true);
    solicitud.send(data);

    solicitud.onreadystatechange = function() {
        if(solicitud.readyState == 4) {
        	var respuesta = solicitud.responseText;
        	if(respuesta == 1) {
        		swal("FerreApp", "Usuario o clave invalida", "warning");
        	} else {
        		window.location.href = 'vistas/principal.php';
        	}
        }
    }
});

// Evento para iniciar sesion
$("#btnRegistrarUsuario").on("click", function(e) {
	var email 			= $("#email").val();
	var pass 			= $("#pass").val();
	var nombre 			= $("#nombre").val();
	var apellido 		= $("#apellido").val();
	var direccion 		= $("#direccion").val();
	var telefono 		= $("#telefono").val();
	var tipoUsuario 	= $("#tipoUsuario").val();

	var data = new FormData();
	data.append('email', email);
	data.append('pass', pass);
	data.append('nombre', nombre);
	data.append('apellido', apellido);
	data.append('direccion', direccion);
	data.append('telefono', telefono);
	data.append('tipoUsuario', tipoUsuario);

	// Servicio web
    var solicitud = new XMLHttpRequest();
    solicitud.open("POST", "../server/Clases/registro.php", true);
    solicitud.send(data);

    solicitud.onreadystatechange = function() {
        if(solicitud.readyState == 4) {
        	var respuesta = solicitud.responseText;
        	if(respuesta == 0) {
        		swal({
        			title: "FerreApp", 
        			text: "Usuario creado correctamente!.", 
        			icon: "success"
        		}).then(function() {
        			window.location.href = '/principal.php';
        		});
        	} else {
        		swal(
        			"FerreApp", 
        			"Hubo un problema con la creación del usuario, comuniquese con el administrador.", 
        			"error"
        		);
        	}
        }
    }
});

