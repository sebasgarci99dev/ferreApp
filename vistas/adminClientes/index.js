var idCliente;
var asd;
$(document).ready(function() {
	cargarSelectDepto(function() {

	});
	iniciarTablaClientes(function() {

	});
});

// Evento para crear un Cliente
$("#btnRegistrarCliente").on("click", function(e) {
	var email 			= $("#email").val();
	var pass 			= $("#pass").val();
	var nombre 			= $("#nombre").val();
	var apellido 		= $("#apellido").val();
	var direccion 		= $("#direccion").val();
	var telefono 		= $("#telefono").val();
	var tipoCliente 	= $("#tipoCliente").val();

	var data = new FormData();
	data.append('email', email);
	data.append('pass', pass);
	data.append('nombre', nombre);
	data.append('apellido', apellido);
	data.append('direccion', direccion);
	data.append('telefono', telefono);
	data.append('tipoCliente', tipoCliente);

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
$(document).on('click', '.editarCliente', function() { 
	
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
        	var Cliente = JSON.parse(solicitud.responseText);
        	
        	$("#email").val(Cliente.Email);
			$("#nombre").val(Cliente.Nombre);
			$("#apellido").val(Cliente.Apellido);
			$("#direccion").val(Cliente.Direccion);
			$("#telefono").val(Cliente.Telefono);

			$("#pass").addClass('d-none');
			$("#tipoCliente").addClass('d-none');
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
	var email 			= $("#email").val();
	var nombre 			= $("#nombre").val();
	var apellido 		= $("#apellido").val();
	var direccion 		= $("#direccion").val();
	var telefono 		= $("#telefono").val();

	var data = new FormData();
	data.append('idCliente', idCliente);
	data.append('email', email);
	data.append('nombre', nombre);
	data.append('apellido', apellido);
	data.append('direccion', direccion);
	data.append('telefono', telefono);

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
    	"ajax" : {
    		"method" : "POST",
    		"url" : "../../server/Clases/cargarClientes.php"
    	},
        "columns": [
            {"data" : "idCliente"},
			{"data" : "Email"},
			{"data" : "Nombre"},
			{"data" : "Apellido"},
			{"data" : "Direccion"},
			{"data" : "Telefono"},
			{"data" : "tipoCliente"},
			{"data"	: "idCliente",
				render : function(data, type, row) {
					var html = '<i id="editCliente" data-id='+data+' class="far fa-edit fa-2x editarCliente" ></i>';
						html += ' | '
						html += '<i class="far fa-trash-alt fa-2x eliminarCliente" data-id='+data+'></i>'
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