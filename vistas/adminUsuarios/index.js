var idUsuario;
$(document).ready(function() {
	iniciarTablaUsuarios(function() {

	});

	validarCampos(function() {

	});
});

// Evento para crear un usuario
$("#btnRegistrarUsuario").on("click", function(e) {

	validaCrearEditarUsuario('crear', function() {
		var email 			= $("#email").val();
		var pass 			= $("#pass").val();
		var nombre 			= $("#nombre").val();
		var apellido 		= $("#apellido").val();
		var direccion 		= $("#direccion").val();
		var telefono 		= $("#telefono").val();
		var tipoUsuario 	= $("#tipoUsuario").selectpicker('val');


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
	    solicitud.open("POST", "../../server/Clases/registro.php", true);
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
	        			recargarTablaUsuarios(function() {
	        				$("#modalUsuario").modal('hide');
	        				limpiarModalUsuario(function() {

	        				});
	        			});
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
	})

});

// Cuando el modal de usuarios se cierre, se limpian los campos
$("#modalUsuario").on("hidden.bs.modal", function (e) {
    limpiarModalUsuario(function() {
    	$("#pass").removeClass('d-none');
		$("#tipoUsuario").removeClass('d-none');
		$("#btnRegistrarUsuario").removeClass('d-none');
		$(".tituloModalCrear").removeClass('d-none');
		$(".tituloModalEditar").addClass('d-none');
		$("#btnEditarUsuario").addClass('d-none');
    });
});

// Funcion para editar usuario
$(document).on('click', '.editarUsuario', function() { 

	idUsuario = $(this).data('id');
	console.log(idUsuario);

	var data = new FormData();
	data.append('idUsuario', idUsuario);

	// Servicio web
    var solicitud = new XMLHttpRequest();
    solicitud.open("POST", "../../server/Clases/cargarUsuario.php", true);
    solicitud.send(data);

    solicitud.onreadystatechange = function() {
        if(solicitud.readyState == 4) {
        	var usuario = JSON.parse(solicitud.responseText);
        	
        	$("#email").val(usuario.Email);
			$("#nombre").val(usuario.Nombre);
			$("#apellido").val(usuario.Apellido);
			$("#direccion").val(usuario.Direccion);
			$("#telefono").val(usuario.Telefono);

			$("#tipoUsuario").selectpicker('val', usuario.idTipoUsuario);
			

			$("#pass").addClass('d-none');

			$("#btnRegistrarUsuario").addClass('d-none');
			$(".tituloModalCrear").addClass('d-none');
			$(".tituloModalEditar").removeClass('d-none');
			$("#btnEditarUsuario").removeClass('d-none');
			
			$("#modalUsuario").modal('show')
        }
    }
});

// Evento para editar el usuario
$("#btnEditarUsuario").on("click", function(e) {
	
	validaCrearEditarUsuario('editar', function() {
		var email 			= $("#email").val();
		var nombre 			= $("#nombre").val();
		var apellido 		= $("#apellido").val();
		var direccion 		= $("#direccion").val();
		var telefono 		= $("#telefono").val();
		var tipoUsuario 	= $("#tipoUsuario").selectpicker('val');

		var data = new FormData();
		data.append('idUsuario', idUsuario);
		data.append('email', email);
		data.append('nombre', nombre);
		data.append('apellido', apellido);
		data.append('direccion', direccion);
		data.append('telefono', telefono);
		data.append('tipoUsuario', tipoUsuario);

		// Servicio web
	    var solicitud = new XMLHttpRequest();
	    solicitud.open("POST", "../../server/Clases/editarUsuario.php", true);
	    solicitud.send(data);

	    solicitud.onreadystatechange = function() {
	        if(solicitud.readyState == 4) {
	        	var respuesta = solicitud.responseText;
	        	if(respuesta == 0) {
	        		swal({
	        			title: "FerreApp", 
	        			text: "Usuario editado correctamente!.", 
	        			icon: "success"
	        		}).then(function() {
	        			recargarTablaUsuarios(function() {
	        				$("#modalUsuario").modal('hide');
	        				limpiarModalUsuario(function() {
	        				});
	        			});
	        		});
	        	} else {
	        		swal(
	        			"FerreApp", 
	        			"Hubo un problema con la edición del usuario, comuniquese con el administrador.", 
	        			"error"
	        		);
	        	}
	        }
	    }
	})

});

// Funcion para eliminar un usuario
$(document).on('click', '.eliminarUsuario', function() { 
	
	idUsuario = $(this).data('id');

	swal({
	  	title: "FerreApp",
	  	text: "Estas seguro de eliminar el usuario con código: "+idUsuario,
	  	icon: "warning",
	  	buttons: true,
	  	dangerMode: true,
	})
	.then((event) => {
  		if (event) {
	    	var data = new FormData();
			data.append('idUsuario', idUsuario);

			// Servicio web
		    var solicitud = new XMLHttpRequest();
		    solicitud.open("POST", "../../server/Clases/eliminarUsuario.php", true);
		    solicitud.send(data);

		    solicitud.onreadystatechange = function() {
		        if(solicitud.readyState == 4) {
		        	var respuesta = JSON.parse(solicitud.responseText);
		        	if(respuesta == 0) {
		        		swal({
		        			title: "FerreApp", 
		        			text: "Usuario eliminado correctamente!.", 
		        			icon: "success"
		        		}).then(function() {
		        			recargarTablaUsuarios(function() {
		        				limpiarModalUsuario(function() {
		        				});
		        			});
		        		});
		        	} else {
		        		swal(
		        			"FerreApp", 
		        			"Hubo un problema con la eliminación del usuario, comuniquese con el administrador.", 
		        			"error"
		        		);
		        	}
		        }
		    }
	  	} 
	});	
});

// Función para cambiar la contraseña del usuario
$(document).on('click', '.cambiarPass', function() {
	idUsuario = $(this).data('id');
	limpiarModalUsuario(function() {
		$("#modalCambioPass").modal('show');
	})
});

$(document).on('click', '#btnCambiarPass', function() {
	var passAnt = $("#passAnt").val();
	var passNueva = $("#passNueva").val();

	var data = new FormData();
	data.append('idUsuario', idUsuario);
	data.append('passAnt', passAnt);
	data.append('passNueva', passNueva);

	// Servicio web
    var solicitud = new XMLHttpRequest();
    solicitud.open("POST", "../../server/Clases/editarPass.php", true);
    solicitud.send(data);

    solicitud.onreadystatechange = function() {
        if(solicitud.readyState == 4) {
        	var respuesta = JSON.parse(solicitud.responseText);

        	// 1: Error
        	if(respuesta == 1) {
        		swal("FerreApp", "La contraseña anterior no es valida", "error");
        		limpiarModalUsuario(function() {
        			$("#modalCambioPass").modal('hide');
				});
        	} else {
        		swal({
        			title: "FerreApp", 
        			text: "Contraseña actualizada correctamente!.", 
        			icon: "success"
        		}).then(function() {
        			recargarTablaUsuarios(function() {
        				limpiarModalUsuario(function() {
        					$("#modalCambioPass").modal('hide');
        				});
        			});
        		});
        	}
        }
    }
});

function iniciarTablaUsuarios(callback) {

    $("#tablaUsuarios").DataTable({
    	"scrollX": true,
    	"ajax" : {
    		"method" : "POST",
    		"url" : "../../server/Clases/cargarUsuarios.php"
    	},
        "columns": [
            {"data" : "idUsuario"},
			{"data" : "Email"},
			{"data" : "Nombre"},
			{"data" : "Apellido"},
			{"data" : "Direccion"},
			{"data" : "Telefono"},
			{"data" : "tipoUsuario"},
			{"data"	: "idUsuario",
				render : function(data, type, row) {
					var html = '<i id="editUsuario" data-id='+data+' class="far fa-edit fa-2x editarUsuario" ></i>';
						html += ' | '
						html += '<i class="far fa-trash-alt fa-2x eliminarUsuario" data-id='+data+'></i>'
						html += ' | '
						html += '<i class="fas fa-key fa-2x cambiarPass" data-id='+data+'></i>'
					return html;
				}
			}        
        ],
        "language": {
            "url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Spanish.json"
		}
    });

	callback();
}

function recargarTablaUsuarios(callback) {
	$("#tablaUsuarios").DataTable().ajax.reload();
	callback();
}

function limpiarModalUsuario(callback) {
	// Limpiamos los datos del modal
	$("#email").val("");
	$("#pass").val("");
	$("#nombre").val("");
	$("#apellido").val("");
	$("#direccion").val("");
	$("#telefono").val("");
	// $("#tipoUsuario").val("");
	$("#tipoUsuario").selectpicker('val', '0');

	$("#passAnt").val("");
	$("#passNueva").val("");

	callback();
}

function validarCampos(callback) {
	ValidarTipoCorreo("#email");
	ValidarTipoTexto("#pass");
	ValidarTipoTexto("#passAnt");
	ValidarTipoTexto("#passNueva");

    ValidarLetrasEspacio("#nombre");
    ValidarLetrasEspacio("#apellido");
    ValidarTipoTexto("#direccion");
    ValidarSoloNumeros("#telefono");
}


function validaCrearEditarUsuario(tipo, callback) {

	if(tipo == 'crear') {
		if($("#email").val() == '') {
			swal(
				"FerreApp", 
				"El campo: email, se encuentra vacio.",
				"warning"
			);
			return;
		} 

		if($("#email").val().indexOf('@', 0) == -1) {
			swal(
				"FerreApp", 
				"El campo: email, no se ha digitado un correo electrónico.",
				"warning"
			);
			return;
		}

		if($("#pass").val() == '') {
			swal(
				"FerreApp", 
				"El campo: pass, se encuentra vacio.",
				"warning"
			);
			return;
		}

		if($("#nombre").val() == '') {
			swal(
				"FerreApp", 
				"El campo: nombre, se encuentra vacio.",
				"warning"
			);
			return;
		}

		if($("#apellido").val() == '') {
			swal(
				"FerreApp", 
				"El campo: apellido, se encuentra vacio.",
				"warning"
			);
			return;
		}

		if($("#direccion").val() == '') {
			swal(
				"FerreApp", 
				"El campo: direccion, se encuentra vacio.",
				"warning"
			);
			return;
		}

		if($("#telefono").val() == '') {
			swal(
				"FerreApp", 
				"El campo: telefono, se encuentra vacio.",
				"warning"
			);
			return;
		}

		if($("#tipoUsuario").val() == 0) {
			swal(
				"FerreApp", 
				"El campo: Tipo de Usuario, se encuentra vacio.",
				"warning"
			);
			return;
		}
		// Si pasa todas las validaciones, se procede con la creación
		callback();

	} else {

		if($("#email").val() == '') {
			swal(
				"FerreApp", 
				"El campo: email, se encuentra vacio.",
				"warning"
			);
			return;
		} 

		if($("#email").val().indexOf('@', 0) == -1) {
			swal(
				"FerreApp", 
				"El campo: email, no se ha digitado un correo electrónico.",
				"warning"
			);
			return;
		}

		if($("#nombre").val() == '') {
			swal(
				"FerreApp", 
				"El campo: nombre, se encuentra vacio.",
				"warning"
			);
			return;
		}

		if($("#apellido").val() == '') {
			swal(
				"FerreApp", 
				"El campo: apellido, se encuentra vacio.",
				"warning"
			);
			return;
		}

		if($("#direccion").val() == '') {
			swal(
				"FerreApp", 
				"El campo: direccion, se encuentra vacio.",
				"warning"
			);
			return;
		}

		if($("#telefono").val() == '') {
			swal(
				"FerreApp", 
				"El campo: telefono, se encuentra vacio.",
				"warning"
			);
			return;
		}

		if($("#tipoUsuario").val() == 0) {
			swal(
				"FerreApp", 
				"El campo: Tipo de Usuario, se encuentra vacio.",
				"warning"
			);
			return;
		}

		// Sí pasa todas las validaciones, se procede con la edición
		callback();
	}

}