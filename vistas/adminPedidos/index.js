var idPedido;

$(document).ready(function() {
	iniciarTablapedidos(function() {

	});
});

// Evento para crear un pedido
$("#btnRegistrarPedido").on("click", function(e) {
	var idcliente 		= $("#idcliente").val();
	var fechapedido 	= $("#fechapedido").val();
	var fechaenvio  	= $("#fechaenvio").val();
	var departamento	= $("#departamento").val();
	var ciudad  		= $("#ciudad").val();
	var direccion 		= $("#direccion").val();
	var producto 		= $("#producto").val();
	var cantidad 		= $("#cantidad").val();
	var idstdopedido 	= $("#idstdopedido").val();

	var data = new FormData();
	data.append('idcliente', idcliente);
	data.append('fechapedido', fechapedido);
	data.append('fechaenvio', fechaenvio);
	data.append('departamento', departamento);
	data.append('ciudad', ciudad);
	data.append('direccion', direccion);
	data.append('producto', producto);
	data.append('cantidad', cantidad);
	data.append('idstdopedido', idstdopedido);

	// Servicio web
    var solicitud = new XMLHttpRequest();
    solicitud.open("POST", "../../server/Clases/registroPedido.php", true);
    solicitud.send(data);

    solicitud.onreadystatechange = function() {
        if(solicitud.readyState == 4) {
        	var respuesta = solicitud.responseText;
        	if(respuesta == 0) {
        		swal({
        			title: "FerreApp", 
        			text: "Pedido creado correctamente!.", 
        			icon: "success"
        		}).then(function() {
        			recargarTablaUsuarios(function() {
        				$("#modalPedido").modal('hide');
        				limpiarModalPedido(function() {

        				});
        			});
        		});
        	} else {
        		swal(
        			"FerreApp", 
        			"Hubo un problema con la creación del pedido, comuniquese con el administrador.", 
        			"error"
        		);
        	}
        }
    }
});

// Evento para editar el usuario
$("#btnEditarPedido").on("click", function(e) {
	var idcliente 		= $("#idcliente").val();
	var fechapedido 	= $("#fechapedido").val();
	var fechaenvio  	= $("#fechaenvio").val();
	var departamento	= $("#departamento").val();
	var ciudad  		= $("#ciudad").val();
	var direccion 		= $("#direccion").val();
	var producto 		= $("#producto").val();
	var cantidad 		= $("#cantidad").val();
	var idstdopedido 	= $("#idstdopedido").val();

	var data = new FormData();
	data.append('idcliente', idcliente);
	data.append('fechapedido', fechapedido);
	data.append('fechaenvio', fechaenvio);
	data.append('departamento', departamento);
	data.append('ciudad', ciudad);
	data.append('direccion', direccion);
	data.append('producto', producto);
	data.append('cantidad', cantidad);
	data.append('idstdopedido', idstdopedido);

	// Servicio web
    var solicitud = new XMLHttpRequest();
    solicitud.open("POST", "../../server/Clases/editarPedido.php", true);
    solicitud.send(data);

    solicitud.onreadystatechange = function() {
        if(solicitud.readyState == 4) {
        	var respuesta = solicitud.responseText;
        	if(respuesta == 0) {
        		swal({
        			title: "FerreApp", 
        			text: "Pedido editado correctamente!.", 
        			icon: "success"
        		}).then(function() {
        			recargarTablaPedidos(function() {
        				$("#modalPedido").modal('hide');
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

// Funcion para editar pedido
$(document).on('click', '.editarPedido', function() { 
	
	idUsuario = $(this).data('id');

	var data = new FormData();
	data.append('idPedido', idPedido);

	// Servicio web
    var solicitud = new XMLHttpRequest();
    solicitud.open("POST", "../../server/Clases/cargarPedidos.php", true);
    solicitud.send(data);

    solicitud.onreadystatechange = function() {
        if(solicitud.readyState == 4) {
        	var pedido = JSON.parse(solicitud.responseText);
        	
			
			$("#idcliente").val(pedido.idcliente);
			$("#fechapedido").val(pedido.fechapedido);
			$("#fechaenvio").val(pedido.fechaenvio);
			$("#departamento").val(pedido.departamento);
			$("#ciudad").val(pedido.ciudad);
			$("#direccion").val(pedido.direccion);
			$("#producto").val(pedido.producto);
			$("#cantidad").val(pedido.cantidad);
			$("#idstdopedido").val(pedido.idstdopedido);

			$("#pass").addClass('d-none');
			$("#tipoUsuario").addClass('d-none');
			$("#btnRegistrarPedido").addClass('d-none');
			$(".tituloModalCrear").addClass('d-none');
			$(".tituloModalEditar").removeClass('d-none');
			$("#btnEditarPedido").removeClass('d-none');
			
			$("#modalPedido").modal('show')
        }
    }
});

// Funcion para eliminar un pedido
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

function iniciarTablaPedidos(callback) {

    $("#tablaUsuarios").DataTable({
    	"ajax" : {
    		"method" : "POST",
    		"url" : "../../server/Clases/cargarPedidos.php"
    	},
        "columns": [
            {"data" : "idPedido"},
			{"data" : "idCliente"},
			{"data" : "FechaPedido"},
			{"data" : "FechaEnvio"},
			{"data" : "Departamento"},
			{"data" : "Ciudad"},
			{"data" : "Direccion"},
			{"data" : "Producto"},
			{"data" : "Cantidad"},
			{"data"	: "idEstadoPedido",
				render : function(data, type, row) {
					var html = '<i id="editPedido" data-id='+data+' class="far fa-edit fa-2x editarPedido" ></i>';
						html += ' | '
						html += '<i class="far fa-trash-alt fa-2x eliminarPedido" data-id='+data+'></i>'
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

function recargarTablaPedidos(callback) {
	$("#tablaPedidos").DataTable().ajax.reload();
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
	$("#tipoUsuario").val("");

	callback();
}