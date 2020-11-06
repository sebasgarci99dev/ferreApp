var idPedido;

$(document).ready(function() {
	iniciarTablaPedidos(function() {
	});

	cargarSelectDepto(function() {
	});

	cargarSelectClientes(function() {
		cargarSelectProductos(function() {

		});
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
        				$("#modalPedidoCliente").modal('hide');
        				limpiarmodalPedidoCliente(function() {

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
        				$("#modalPedidoCliente").modal('hide');
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
$("#modalPedidoCliente").on("hidden.bs.modal", function (e) {
    limpiarmodalPedidoCliente(function() {

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
			
			$("#modalPedidoCliente").modal('show')
        }
    }
});

$(document).on("change", "#selectClientes", function() {
	let idCliente = $(this).val();
	if(idCliente != 0) {
		cargarInfoCliente(idCliente, function() {

		});
	}
});

$(document).on("click", "#btnAgregarProductos", function() {
	let idProducto 		= $("#selectProductos").val();
	let cantidadProd 	= $("#cantidadProd").val();
	if(idProducto != 0 && cantidadProd != 0 && cantidadProd != null) {
		agregarProductoTabla(idProducto, cantidadProd, function() {
		});
	}
});

$(document).on('click', '.eliminarProductoFila', function (event) {
    event.preventDefault();
    $(this).closest('tr').remove();
});

function iniciarTablaPedidos(callback) {

    $("#tablaPedidos").DataTable({
    	"ajax" : {
    		"method" : "POST",
    		"url" : "../../server/Clases/cargarPedidos.php"
    	},
        "columns": [
            {"data" : "idPedido"},
			{"data" : "cliente"},
			{"data" : "email"},
			{"data" : "fechaPedido"},
			{"data" : "dep_nombre"},
			{"data" : "mun_nombre"},
			{"data" : "direccion"},
			{"data" : "estado"}
			// {"data"	: "idPedido",
			// 	render : function(data, type, row) {
			// 		var html = '<i data-id='+data+' class="far fa-edit fa-2x editarPedido" ></i>';
			// 			html += ' | ';
			// 		return html;
			// 	}
			// }        
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

function limpiarmodalPedidoCliente(callback) {
	// Limpiamos los datos del modal
	$("#cliente").val("");
	$("#telefono").val("");
	$("#direccion").val("");
	$("#email").val("");
	$("#departamento").val("");
	$("#municipio").val("");
	$("#direccionPedido").val("");
	$("#cantidadProd").val("");

	$("#selectClientes").selectpicker("val", 0);
	$("#selectDepto").selectpicker("val", 0);
	$("#selectMunic").selectpicker("val", 0);
	$("#selectProductos").selectpicker("val", 0);

	$("#tablaTramitePedidos tbody").children().remove()

	callback();
}

function cargarSelectClientes(callback) {

	// Servicio web
    var solicitud = new XMLHttpRequest();
    solicitud.open("POST", "../../server/Clases/cargarClientes.php", true);
    solicitud.send();

    solicitud.onreadystatechange = function() {
        if(solicitud.readyState == 4) {
        	let clientes = (JSON.parse(solicitud.responseText)).data;
        	let html 	= '<option value="0" selected> Seleccione un cliente </option>'

        	// Recorremos el array con los departamentos
        	for(var i in clientes){
			    html += '<option value="'+clientes[i].idCliente+'">'+clientes[i].nombre+'</option>';
			}

			$("#selectClientes").html(html);
			$("#selectClientes").selectpicker('refresh');
			$("#selectClientes").selectpicker('val', '0');

			callback();
        }
    }
}

function cargarInfoCliente(idCliente, callback) {
	let data = new FormData();
	data.append('idCliente', idCliente);

	var solicitud = new XMLHttpRequest();
    solicitud.open("POST", "../../server/Clases/cargarCliente.php", true);
    solicitud.send(data);

    solicitud.onreadystatechange = function() {
        if(solicitud.readyState == 4) {
        	var cliente = JSON.parse(solicitud.responseText);
        	$("#cliente").val(cliente.nombres+' '+cliente.apellidos);
			$("#telefono").val(cliente.telefono);
			$("#direccion").val(cliente.direccion);
			$("#email").val(cliente.email);
			$("#departamento").val(cliente.dep_nombre);
			$("#municipio").val(cliente.mun_nombre);

			callback();
        }
    }
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

function cargarSelectProductos(callback) {

    let solicitud = new XMLHttpRequest();
    solicitud.open("POST", "../../server/Clases/cargarProductosTabla.php", true);
    solicitud.send();

    solicitud.onreadystatechange = function() {
        if(solicitud.readyState == 4) {
        	let productos 	= (JSON.parse(solicitud.responseText)).data;
        	let html 	= '<option value="0" selected> Seleccione un producto </option>'

        	// Recorremos el array con los departamentos
        	for(var i in productos){
			    html += '<option value="'+productos[i].idProducto+'">'+productos[i].codigoBarras+'-'+productos[i].nombre+'</option>';
			}

			$("#selectProductos").html(html);
			$("#selectProductos").selectpicker('refresh');
			$("#selectProductos").selectpicker('val', '0');

			callback();
        }
    }
}

function agregarProductoTabla(idProducto, cantidad, callback) {

	// Servicio web
	var data = new FormData();
	data.append('idProducto', idProducto);

    let solicitud = new XMLHttpRequest();
    solicitud.open("POST", "../../server/Clases/cargarStockProducto.php", true);
    solicitud.send(data);

    solicitud.onreadystatechange = function() {
        if(solicitud.readyState == 4) {
        	let infoProd	= JSON.parse(solicitud.responseText);
        	if(infoProd == null || infoProd == 'null') {
        		swal("FerreApp", "No existe la cantidad sufiente en Bodega para este producto.", "error");
        		return null;
        	} else if(infoProd.cantExistente < cantidad) {
        		swal("FerreApp", "No existe la cantidad sufiente en Bodega para este producto.", "error");
        		return null;
        	} else {
        		var html = `
                    <tr>
                        <td> ${idProducto} </td>
                        <td> ${infoProd.nombreProd} </td>
                        <td> ${cantidad} </td>
                        <td> ${infoProd.cantExistente} </td>
                        <td> ${infoProd.precio} </td>
                        <td> ${(infoProd.precio*cantidad)}</td>
                        <td> <i class="fas fa-minus-circle fa-2x eliminarProductoFila"></i> </td>
                    </tr>
                `;
                $("#tablaTramitePedidos tbody").append(html);
        	}
			callback();
        }
    }
}