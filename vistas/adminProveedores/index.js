var idProveedor;
$(document).ready(function() {
	cargarSelectDepto(function() {

	});
	iniciarTablaProveedores(function() {

	});
});

// Evento para crear un Proveedores
$("#btnRegistrarProveedores").on("click", function(e) {
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
    solicitud.open("POST", "../../server/Clases/registroProveedores.php", true);
    solicitud.send(data);

    solicitud.onreadystatechange = function() {
        if(solicitud.readyState == 4) {
        	var respuesta = solicitud.responseText;
        	if(respuesta == 0) {
        		swal({
        			title: "FerreApp", 
        			text: "Proveedor creado correctamente!.", 
        			icon: "success"
        		}).then(function() {
        			recargarTablaProveedores(function() {
        				$("#modalProveedores").modal('hide');
        				limpiarModalProveedores(function() {

        				});
        			});
        		});
        	} else {
        		swal(
        			"FerreApp", 
        			"Hubo un problema con la creación del Proveedor, comuniquese con el administrador.", 
        			"error"
        		);
        	}
        }
    }
});

// Cuando el modal de Proveedores se cierre, se limpian los campos
$("#modalProveedores").on("hidden.bs.modal", function (e) {
    limpiarModalProveedores(function() {
    	$("#pass").removeClass('d-none');
		$("#tipoProveedores").removeClass('d-none');
		$("#btnRegistrarProveedores").removeClass('d-none');
		$(".tituloModalCrear").removeClass('d-none');
		$(".tituloModalEditar").addClass('d-none');
		$("#btnEditarProveedores").addClass('d-none');
    });
});

// Funcion para editar Proveedores
$(document).on('click', '.editarProveedores', function(e) { 
	
	idProveedor = $(this).data('id');
	console.log(idProveedor);

	var data = new FormData();
	data.append('idProveedor', idProveedor);

	// Servicio web
    var solicitud = new XMLHttpRequest();
    solicitud.open("POST", "../../server/Clases/cargarProveedor.php", true);
    solicitud.send(data);

    solicitud.onreadystatechange = function() {
        if(solicitud.readyState == 4) {
        	var Proveedores = JSON.parse(solicitud.responseText);
        	
        	$("#codigo").val(Proveedores.codigo);
			$("#nombre").val(Proveedores.nombres);
			$("#apellido").val(Proveedores.apellidos);
			$("#direccion").val(Proveedores.direccion);
			$("#tel_fijo").val(Proveedores.telefono_fijo);
			$("#tel_cel").val(Proveedores.telefono_cel);
			$("#email").val(Proveedores.email);

			$("#selectDepto").selectpicker('val', Proveedores.idDepto);
			e.stopPropagation();

			cargarSelectMunic(Proveedores.idDepto, function() {
				$("#selectMunic").selectpicker('val', Proveedores.idMun);
			});

			$("#btnRegistrarProveedores").addClass('d-none');
			$(".tituloModalCrear").addClass('d-none');
			$(".tituloModalEditar").removeClass('d-none');
			$("#btnEditarProveedores").removeClass('d-none');
			

			$("#modalProveedores").modal('show')
        }
    }
});

// Evento para editar el Proveedores
$("#btnEditarProveedores").on("click", function(e) {
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
	data.append('idProveedor', idProveedor);
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
    solicitud.open("POST", "../../server/Clases/editarProveedor.php", true);
    solicitud.send(data);

    solicitud.onreadystatechange = function() {
        if(solicitud.readyState == 4) {
        	var respuesta = solicitud.responseText;
        	if(respuesta == 0) {
        		swal({
        			title: "FerreApp", 
        			text: "Proveedores editado correctamente!.", 
        			icon: "success"
        		}).then(function() {
        			recargarTablaProveedores(function() {
        				$("#modalProveedores").modal('hide');
        				limpiarModalProveedores(function() {
        				});
        			});
        		});
        	} else {
        		swal(
        			"FerreApp", 
        			"Hubo un problema con la edición del Proveedores, comuniquese con el administrador.", 
        			"error"
        		);
        	}
        }
    }
});

// Funcion para eliminar un Proveedores
$(document).on('click', '.eliminarProveedores', function() { 
	
	idProveedor = $(this).data('id');

	swal({
	  	title: "FerreApp",
	  	text: "Estas seguro de eliminar el proveedor con código: "+idProveedor,
	  	icon: "warning",
	  	buttons: true,
	  	dangerMode: true,
	})
	.then((event) => {
  		if (event) {
	    	var data = new FormData();
			data.append('idProveedor', idProveedor);

			// Servicio web
		    var solicitud = new XMLHttpRequest();
		    solicitud.open("POST", "../../server/Clases/eliminarProveedor.php", true);
		    solicitud.send(data);

		    solicitud.onreadystatechange = function() {
		        if(solicitud.readyState == 4) {
		        	var respuesta = JSON.parse(solicitud.responseText);
		        	if(respuesta == 0) {
		        		swal({
		        			title: "FerreApp", 
		        			text: "Proveedor eliminado correctamente!.", 
		        			icon: "success"
		        		}).then(function() {
		        			recargarTablaProveedores(function() {
		        				limpiarModalProveedores(function() {
		        				});
		        			});
		        		});
		        	} else {
		        		swal(
		        			"FerreApp", 
		        			"Hubo un problema con la eliminación del proveedor, comuniquese con el administrador.", 
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

function iniciarTablaProveedores(callback) {

    $("#tablaProveedores").DataTable({
    	"ajax" : {
    		"method" : "POST",
    		"url" : "../../server/Clases/cargarProveedores.php"
    	},
        "columns": [
        	{"data"	: "idProveedores"},
            {"data" : "codigo"},
			{"data" : "nombre"},
			{"data" : "email"},
			{"data" : "direccion"},
			{"data" : "telefono_cel"},
			{"data" : "telefono_fijo"},
			{"data" : "dep_nombre"},
			{"data" : "mun_nombre"},
			{"data"	: "idProveedores",
				render : function(data, type, row) {
					var html = '<i data-id='+data+' class="far fa-edit fa-2x editarProveedores" ></i>';
						html += ' | '
						html += '<i class="far fa-trash-alt fa-2x eliminarProveedores" data-id='+data+'></i>'
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

function recargarTablaProveedores(callback) {
	$("#tablaProveedores").DataTable().ajax.reload();
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

        	console.log(deptos)

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

function limpiarModalProveedores(callback) {
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