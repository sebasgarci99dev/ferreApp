var idPedido;

$(document).ready(function() {
	iniciarTablaPedidos(function() {

	});
});

// Evento para ingresar productos en bodega
$("#btnIngresoProdutosBodega").on("click", function(e) {

	var producto = $("#productoIngreso").val();
	var cantidad = $("#cantidadIngreso").val();

	var data = new FormData();
	data.append('producto', producto);
	data.append('cantidad', cantidad);

	// Servicio web
    var solicitud = new XMLHttpRequest();
    solicitud.open("POST", "../../server/Clases/ingresoProdutosBodega.php", true);
    solicitud.send(data);

    solicitud.onreadystatechange = function() {
        if(solicitud.readyState == 4) {
        	var respuesta = solicitud.responseText;
        	if(respuesta == 0) {
        		swal({
        			title: "FerreApp", 
        			text: "Productos ingresados en bodega, correctamente", 
        			icon: "success"
        		}).then(function() {
        			recargarTablaUsuarios(function() {
        				$("#modalIngreso").modal('hide');
        				limpiarmodalIngreso(function() {
        				});
        			});
        		});
        	} else {
        		swal(
        			"FerreApp", 
        			"Hubo un problema con el ingreso del producto en bodega, comuniquese con el administrador.", 
        			"error"
        		);
        	}
        }
    }
});

// Evento para retiro productos en bodega
$("#btnRetiroProdutosBodega").on("click", function(e) {
    var producto = $("#productoRetiro").val();
    var cantidad = $("#cantidadRetiro").val();

    var data = new FormData();
    data.append('producto', producto);
    data.append('cantidad', cantidad);

    // Servicio web
    var solicitud = new XMLHttpRequest();
    solicitud.open("POST", "../../server/Clases/retiroProductosBodega.php", true);
    solicitud.send(data);

    solicitud.onreadystatechange = function() {
        if(solicitud.readyState == 4) {
            var respuesta = solicitud.responseText;
            if(respuesta == 0) {
                swal({
                    title: "FerreApp", 
                    text: "Productos retirado de bodega, correctamente", 
                    icon: "success"
                }).then(function() {
                    recargarTablaUsuarios(function() {
                        $("#modalRetiro").modal('hide');
                        limpiarmodalIngreso(function() {
                        });
                    });
                });
            } else {
                swal(
                    "FerreApp", 
                    "Hubo un problema con el retiro del producto en bodega, comuniquese con el administrador.", 
                    "error"
                );
            }
        }
    }
});


// Cuando el modal de ingreso se cierre, se limpian los campos                                                  DUDA.................!?
$("#modalIngreso, #modalPedidos, #modalRetiro").on("hidden.bs.modal", function (e) {
    limpiarCampos(function() {
		$("#btnIngresoProdutosBodega").removeClass('d-none');
		$(".tituloModalCrear").removeClass('d-none');
    });
});

// Carga información de  Pedidos Clientes
$(document).on('click', '.editarPedido', function() {
    idPedido = $(this).data('id');
    cargarDatosPedido(idPedido, function() {
        cargarProductosPedido(idPedido, function() {
            $("#modalPedidos").modal('show');
        })
    }) ;  
});

//  Cambio de Estado del pedido
$(document).on('click', '#btnFinPedidoBodega', function() {

    var idEstado = $("#estadoPedido").val();

    if(idEstado == 4 || idEstado == 5) {
        retirarProductosBodega(idPedido, idEstado, function() {
            recargarTablaPedidos(function() {
                $("#modalPedidos").modal('hide');
                limpiarCampos(function() {
                });
            });
        })
    } else {
        actualizaEstadoPedido(idPedido, idEstado, function() {
             recargarTablaPedidos(function() {
                $("#modalPedidos").modal('hide');
                limpiarCampos(function() {
                });
            });
        });
    }
});


// Listar pedidos    
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
			{"data"	: "estado"},
            {"data" : "idPedido",
				render : function(data, type, row) {
					var html = '<i data-id='+data+' class="far fa-edit fa-2x editarPedido" ></i>'
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

function limpiarCampos(callback) {
	// Limpiamos los datos del modal
	$("#productoIngreso").val(0);
	$("#cantidadIngreso").val("");
    $("#productoRetiro").val(0);
    $("#cantidadRetiro").val("");
    $("#cliente").val("");
    $("#telefono").val("");
    $("#direccionCliente").val("");
    $("#email").val("");
    $("#departamento").val("");
    $("#municipio").val("");
    $("#direccionPedido").val("");
    $("#estPedido").val("");
    $("#estDomicilio").val("");
    $("#estadoPedido").val(0);

    
    $("#tablaTramitePedidos tbody").children().remove()
	callback();
}

function cargarDatosPedido(idPedido, callback) {
    var data = new FormData();
    data.append('idPedido', idPedido);

    // Servicio web
    var solicitud = new XMLHttpRequest();
    solicitud.open("POST", "../../server/Clases/cargarInfoPedido.php", true);
    solicitud.send(data);

    solicitud.onreadystatechange = function() {
        if(solicitud.readyState == 4) {
            var pedido = JSON.parse(solicitud.responseText);
            
            $("#cliente").val(pedido.cliente);
            $("#telefono").val(pedido.telefono_cel);
            $("#direccionCliente").val(pedido.direccionCliente);
            $("#email").val(pedido.email);
            $("#departamento").val(pedido.dep_nombre);
            $("#municipio").val(pedido.mun_nombre);
            $("#direccionPedido").val(pedido.direccionPedido);
            $("#fechaPedido").val(pedido.fechaPedido)
            $("#estPedido").val(pedido.estPedido);
            $("#estDomicilio").val(pedido.estDomicilio);

            callback();
        }
    }
}

function cargarProductosPedido(idPedido, callback) {
    var data = new FormData();
    data.append('idPedido', idPedido);

    // Servicio web
    var solicitud = new XMLHttpRequest();
    solicitud.open("POST", "../../server/Clases/cargarInfoProductos.php", true);
    solicitud.send(data);

    solicitud.onreadystatechange = function() {
        if(solicitud.readyState == 4) {
            var productos = (JSON.parse(solicitud.responseText)).data;
            var html = '';
            for(var i in productos){
                html += `
                    <tr>
                        <td> ${productos[i].idProducto} </td>
                        <td> ${productos[i].nombre} </td>
                        <td> ${productos[i].cantidad} </td>
                        <td> ${productos[i].stock} </td>
                    </tr>
                `;
            }

            $("#tablaTramitePedidos tbody").html(html);
            callback();
        }
    }
}

function retirarProductosBodega(idPedido, idEstado, callback) {

    var data = new FormData();
    data.append('idPedido', idPedido);
    data.append('idEstado', idEstado);

    // Servicio web
    var solicitud = new XMLHttpRequest();
    solicitud.open("POST", "../../server/Clases/retirarProductosBodega.php", true);
    solicitud.send(data);

    solicitud.onreadystatechange = function() {
        if(solicitud.readyState == 4) {
            var respuesta = solicitud.responseText;
            
            if(respuesta == 0) {
                swal({
                    title: "FerreApp", 
                    text: "Productos retirados de bodega correctamente!", 
                    icon: "success"
                }).then(function() {
                    callback();
                });
            }
        }
    }
}

function actualizaEstadoPedido(idPedido, idEstado, callback) {
    
    var data = new FormData();
    data.append('idPedido', idPedido);
    data.append('idEstado', idEstado);

    // Imprimir formaData en consola
    for (var value of data.values()) {
        console.log(value); 
    }

    // Servicio web
    var solicitud = new XMLHttpRequest();
    solicitud.open("POST", "../../server/Clases/actualizaEstadoPedido.php", true); 
    solicitud.send(data);

    solicitud.onreadystatechange = function() {
        if(solicitud.readyState == 4) {
            var respuesta = solicitud.responseText;
            
            if(respuesta == 0) {
                swal({
                    title: "FerreApp", 
                    text: "Estado del Pedido Actualizado Correctamente!", 
                    icon: "success"
                }).then(function() {
                    callback();
                });
            }
        }
    }
}
