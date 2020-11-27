var idCliente;
var asd;
$(document).ready(function() {
	cargarSelectDepto(function() {

	});
	iniciarTablaClientes(function() {

	});
	validarCampos(function() {

	});
});

// Evento para crear un Cliente
$("#btnRegistrarCliente").on("click", function(e) {
	validaCrearEditarCliente('crear', function() {
		var codigo 		= 	$("#codigo").val();
		var nombre 		= 	$("#nombre").val();
		var apellido 	= 	$("#apellido").val();
		var direccion 	= 	$("#direccion").val();
		var tel_fijo 	= 	$("#tel_fijo").val();
		var tel_cel 	= 	$("#tel_cel").val();
		var email 		= 	$("#email").val();
		var selectDepto = 	$("#selectDepto").selectpicker('val');
		var selectMunic = 	$("#selectMunic").selectpicker('val');

		var data = new FormData();
		data.append('codigo', codigo);
		data.append('nombre', nombre);
		data.append('apellido', apellido);
		data.append('direccion', direccion);
		data.append('tel_fijo', tel_fijo);
		data.append('tel_cel', tel_cel);
		data.append('email', email);
		data.append('selectDepto', selectDepto);
		data.append('selectMunic', selectMunic);

		// Servicio web
	    var solicitud = new XMLHttpRequest();
	    solicitud.open("POST", "../../server/Clases/registroCliente.php", true);
	    solicitud.send(data);

	    solicitud.onreadystatechange = function() {
	        if(solicitud.readyState == 4) {
	        	var respuesta = solicitud.responseText;
	        	if(respuesta == 0) {
	        		swal({
	        			title: "FerreApp", 
	        			text: "Cliente creado correctamente!.", 
	        			icon: "success"
	        		}).then(function() {
	        			recargarTablaClientes(function() {
	        				$("#modalCliente").modal('hide');
	        				limpiarModalCliente(function() {

	        				});
	        			});
	        		});
	        	} else {
	        		swal(
	        			"FerreApp", 
	        			"Hubo un problema con la creación del Cliente, comuniquese con el administrador.", 
	        			"error"
	        		);
	        	}
	        }
	    }
	});
});

// Cuando el modal de Clientes se cierre, se limpian los campos
$("#modalCliente").on("hidden.bs.modal", function (e) {
    limpiarModalCliente(function() {
    	$("#pass").removeClass('d-none');
		$("#tipoCliente").removeClass('d-none');
		$("#btnRegistrarCliente").removeClass('d-none');
		$(".tituloModalCrear").removeClass('d-none');
		$(".tituloModalEditar").addClass('d-none');
		$("#btnEditarCliente").addClass('d-none');
    });
});

// Funcion para editar Cliente
$(document).on('click', '.editarCliente', function(e) { 
	
	idCliente = $(this).data('id');
	console.log(idCliente);

	var data = new FormData();
	data.append('idCliente', idCliente);

	// Servicio web
    var solicitud = new XMLHttpRequest();
    solicitud.open("POST", "../../server/Clases/cargarCliente.php", true);
    solicitud.send(data);

    solicitud.onreadystatechange = function() {
        if(solicitud.readyState == 4) {
        	var cliente = JSON.parse(solicitud.responseText);
        	
        	$("#codigo").val(cliente.codigo);
			$("#nombre").val(cliente.nombres);
			$("#apellido").val(cliente.apellidos);
			$("#direccion").val(cliente.direccion);
			$("#tel_fijo").val(cliente.telefono_fijo);
			$("#tel_cel").val(cliente.telefono_cel);
			$("#email").val(cliente.email);

			$("#selectDepto").selectpicker('val', cliente.idDepto);
			e.stopPropagation();

			cargarSelectMunic(cliente.idDepto, function() {
				$("#selectMunic").selectpicker('val', cliente.idMun);
			});

			$("#btnRegistrarCliente").addClass('d-none');
			$(".tituloModalCrear").addClass('d-none');
			$(".tituloModalEditar").removeClass('d-none');
			$("#btnEditarCliente").removeClass('d-none');
			

			$("#modalCliente").modal('show')
        }
    }
});

// Evento para editar el Cliente
$("#btnEditarCliente").on("click", function(e) {
	validaCrearEditarCliente('editar', function() {
		var codigo 		= 	$("#codigo").val();
		var nombre 		= 	$("#nombre").val();
		var apellido 	= 	$("#apellido").val();
		var direccion 	= 	$("#direccion").val();
		var tel_fijo 	= 	$("#tel_fijo").val();
		var tel_cel 	= 	$("#tel_cel").val();
		var email 		= 	$("#email").val();
		var selectDepto = 	$("#selectDepto").selectpicker('val');
		var selectMunic = 	$("#selectMunic").selectpicker('val');

		var data = new FormData();
		data.append('idCliente', idCliente);
		data.append('codigo', codigo);
		data.append('nombre', nombre);
		data.append('apellido', apellido);
		data.append('direccion', direccion);
		data.append('tel_fijo', tel_fijo);
		data.append('tel_cel', tel_cel);
		data.append('email', email);
		data.append('selectDepto', selectDepto);
		data.append('selectMunic', selectMunic);

		// Servicio web
	    var solicitud = new XMLHttpRequest();
	    solicitud.open("POST", "../../server/Clases/editarCliente.php", true);
	    solicitud.send(data);

	    solicitud.onreadystatechange = function() {
	        if(solicitud.readyState == 4) {
	        	var respuesta = solicitud.responseText;
	        	if(respuesta == 0) {
	        		swal({
	        			title: "FerreApp", 
	        			text: "Cliente editado correctamente!.", 
	        			icon: "success"
	        		}).then(function() {
	        			recargarTablaClientes(function() {
	        				$("#modalCliente").modal('hide');
	        				limpiarModalCliente(function() {
	        				});
	        			});
	        		});
	        	} else {
	        		swal(
	        			"FerreApp", 
	        			"Hubo un problema con la edición del Cliente, comuniquese con el administrador.", 
	        			"error"
	        		);
	        	}
	        }
	    }
	})
});

// Funcion para eliminar un Cliente
$(document).on('click', '.eliminarCliente', function() { 
	
	idCliente = $(this).data('id');

	swal({
	  	title: "FerreApp",
	  	text: "Estas seguro de eliminar el Cliente con código: "+idCliente,
	  	icon: "warning",
	  	buttons: true,
	  	dangerMode: true,
	})
	.then((event) => {
  		if (event) {
	    	var data = new FormData();
			data.append('idCliente', idCliente);

			// Servicio web
		    var solicitud = new XMLHttpRequest();
		    solicitud.open("POST", "../../server/Clases/eliminarCliente.php", true);
		    solicitud.send(data);

		    solicitud.onreadystatechange = function() {
		        if(solicitud.readyState == 4) {
		        	var respuesta = JSON.parse(solicitud.responseText);
		        	if(respuesta == 0) {
		        		swal({
		        			title: "FerreApp", 
		        			text: "Cliente eliminado correctamente!.", 
		        			icon: "success"
		        		}).then(function() {
		        			recargarTablaClientes(function() {
		        				limpiarModalCliente(function() {
		        				});
		        			});
		        		});
		        	} else {
		        		swal(
		        			"FerreApp", 
		        			"Hubo un problema con la eliminación del Cliente, comuniquese con el administrador.", 
		        			"error"
		        		);
		        	}
		        }
		    }
	  	} 
	});	
});

// Evento para cargar los municipios si hay un cambio de depto
$(document).on('change', '#selectDepto', function() {
	let idDepto = $(this).val();
	cargarSelectMunic(idDepto, function() {

	});
})

function iniciarTablaClientes(callback) {

    $("#tablaClientes").DataTable({
    	"scrollX": true,
    	"ajax" : {
    		"method" : "POST",
    		"url" : "../../server/Clases/cargarClientes.php"
    	},
        "columns": [
        	{"data"	: "idCliente"},
            {"data" : "codigo"},
			{"data" : "nombre"},
			{"data" : "email"},
			{"data" : "direccion"},
			{"data" : "telefono_cel"},
			{"data" : "telefono_fijo"},
			{"data" : "dep_nombre"},
			{"data" : "mun_nombre"},
			{"data"	: "idCliente",
				render : function(data, type, row) {
					var html = '<i data-id='+data+' class="far fa-edit fa-2x editarCliente" ></i>';
						html += ' | '
						html += '<i class="far fa-trash-alt fa-2x eliminarCliente" data-id='+data+'></i>'
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

function recargarTablaClientes(callback) {
	$("#tablaClientes").DataTable().ajax.reload();
	callback();
}

function cargarSelectDepto(callback) {

	// Inicializamos el selectpicker
	$(".selectpicker").selectpicker();

	// Servicio web
    let solicitud = new XMLHttpRequest();
    solicitud.open("POST", "../../server/Clases/cargarDeptos.php", true);
    solicitud.send();

    solicitud.onreadystatechange = function() {
        if(solicitud.readyState == 4) {
        	let deptos 	= (JSON.parse(solicitud.responseText)).data;
        	let html 	= '<option value="0" selected> Seleccione un departamento </option>'

        	// Recorremos el array con los departamentos
        	for(var i in deptos){
			    html += '<option value="'+deptos[i].id+'">'+deptos[i].dep_nombre+'</option>';
			}

			$("#selectDepto").html(html);
			$("#selectDepto").selectpicker('refresh');
			$("#selectDepto").selectpicker('val', '0');
			cargarSelectMunic(1, function() {
				callback();
			})
        }
    }
}

function cargarSelectMunic(idDepto, callback) {

	// Servicio web
	var data = new FormData();
	data.append('idDepto', idDepto);

    let solicitud = new XMLHttpRequest();
    solicitud.open("POST", "../../server/Clases/cargarMunicipios.php", true);
    solicitud.send(data);

    solicitud.onreadystatechange = function() {
        if(solicitud.readyState == 4) {
        	let munic 	= (JSON.parse(solicitud.responseText)).data;
        	let html 	= '<option value="0" selected> Seleccione un municipio </option>'

        	// Recorremos el array con los departamentos
        	for(var i in munic){
			    html += '<option value="'+munic[i].id+'">'+munic[i].mun_nombre+'</option>';
			}

			$("#selectMunic").html(html);
			$("#selectMunic").selectpicker('refresh');
			$("#selectMunic").selectpicker('val', '0');

			callback();
        }
    }
}

function limpiarModalCliente(callback) {
	// Limpiamos los datos del modal
	$("#codigo").val("");
	$("#nombre").val("");
	$("#apellido").val("");
	$("#direccion").val("");
	$("#tel_fijo").val("");
	$("#tel_cel").val("");
	$("#email").val("");
	$("#selectDepto").selectpicker('val', '0');
	$("#selectMunic").selectpicker('val', '0');

	callback();
}

function validarCampos(callback) {
    ValidarTipoDatoIdentificadorDocumento("#codigo");
    ValidarLetrasEspacio("#nombre");
    ValidarLetrasEspacio("#apellido");
    ValidarTipoTexto("#direccion");
    ValidarSoloNumeros("#tel_cel");
    ValidarSoloNumeros("#tel_fijo");
    ValidarTipoCorreo("#email");
}

function validaCrearEditarCliente(tipo, callback) {

	if(tipo == 'crear') {
		var codigo 		= 	$("#codigo").val();
		var nombre 		= 	$("#nombre").val();
		var apellido 	= 	$("#apellido").val();
		var direccion 	= 	$("#direccion").val();
		var tel_fijo 	= 	$("#tel_fijo").val();
		var tel_cel 	= 	$("#tel_cel").val();
		var email 		= 	$("#email").val();
		var selectDepto = 	$("#selectDepto").selectpicker('val');
		var selectMunic = 	$("#selectMunic").selectpicker('val');

		if(codigo == '') {
			swal(
				"FerreApp", 
				"El campo: codigo, se encuentra vacio.",
				"warning"
			);
			return;
		} 

		if(nombre == '') {
			swal(
				"FerreApp", 
				"El campo: nombre, se encuentra vacio.",
				"warning"
			);
			return;
		} 

		if(apellido == '') {
			swal(
				"FerreApp", 
				"El campo: apellido, se encuentra vacio.",
				"warning"
			);
			return;
		} 

		if(direccion == '') {
			swal(
				"FerreApp", 
				"El campo: direccion, se encuentra vacio.",
				"warning"
			);
			return;
		} 

		if(tel_fijo == '') {
			swal(
				"FerreApp", 
				"El campo: telefono fijo, se encuentra vacio.",
				"warning"
			);
			return;
		} 

		if(tel_cel == '') {
			swal(
				"FerreApp", 
				"El campo: telefono celular, se encuentra vacio.",
				"warning"
			);
			return;
		} 

		if(email == '') {
			swal(
				"FerreApp", 
				"El campo: email, se encuentra vacio.",
				"warning"
			);
			return;
		} 

		if(email.indexOf('@', 0) == -1) {
			swal(
				"FerreApp", 
				"El campo: email, no se ha digitado un correo electrónico.",
				"warning"
			);
			return;
		}

		if(selectDepto == 0) {
			swal(
				"FerreApp", 
				"No ha seleccionado un departamento",
				"warning"
			);
			return;	
		}

		if(selectMunic == 0) {
			swal(
				"FerreApp", 
				"No ha seleccionado un municipio",
				"warning"
			);
			return;	
		}

		// Si pasa todas las validaciones, se procede con la creación
		callback();

	} else {

		var codigo 		= 	$("#codigo").val();
		var nombre 		= 	$("#nombre").val();
		var apellido 	= 	$("#apellido").val();
		var direccion 	= 	$("#direccion").val();
		var tel_fijo 	= 	$("#tel_fijo").val();
		var tel_cel 	= 	$("#tel_cel").val();
		var email 		= 	$("#email").val();
		var selectDepto = 	$("#selectDepto").selectpicker('val');
		var selectMunic = 	$("#selectMunic").selectpicker('val');

		if(codigo == '') {
			swal(
				"FerreApp", 
				"El campo: codigo, se encuentra vacio.",
				"warning"
			);
			return;
		} 

		if(nombre == '') {
			swal(
				"FerreApp", 
				"El campo: nombre, se encuentra vacio.",
				"warning"
			);
			return;
		} 

		if(apellido == '') {
			swal(
				"FerreApp", 
				"El campo: apellido, se encuentra vacio.",
				"warning"
			);
			return;
		} 

		if(direccion == '') {
			swal(
				"FerreApp", 
				"El campo: direccion, se encuentra vacio.",
				"warning"
			);
			return;
		} 

		if(tel_fijo == '') {
			swal(
				"FerreApp", 
				"El campo: telefono fijo, se encuentra vacio.",
				"warning"
			);
			return;
		} 

		if(tel_cel == '') {
			swal(
				"FerreApp", 
				"El campo: telefono celular, se encuentra vacio.",
				"warning"
			);
			return;
		} 

		if(email == '') {
			swal(
				"FerreApp", 
				"El campo: email, se encuentra vacio.",
				"warning"
			);
			return;
		} 

		if(email.indexOf('@', 0) == -1) {
			swal(
				"FerreApp", 
				"El campo: email, no se ha digitado un correo electrónico.",
				"warning"
			);
			return;
		}

		if(selectDepto == 0) {
			swal(
				"FerreApp", 
				"No ha seleccionado un departamento",
				"warning"
			);
			return;	
		}

		if(selectMunic == 0) {
			swal(
				"FerreApp", 
				"No ha seleccionado un municipio",
				"warning"
			);
			return;	
		}

		// Si pasa todas las validaciones, se procede con la creación
		callback();
	}

}