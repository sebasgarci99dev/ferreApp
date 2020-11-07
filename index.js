$(document).ready(function() {
    validarCampos(function() {

    });
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

function validarCampos(callback) {
    ValidarTipoCorreo("#usuario");
    ValidarTipoTexto("#pass");
}
