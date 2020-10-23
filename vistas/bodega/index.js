var idUsuario;
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


// Cuando el modal de ingreso se cierre, se limpian los campos
$("#modalIngreso").on("hidden.bs.modal", function (e) {
    limpiarmodalIngreso(function() {
		$("#btnIngresoProdutosBodega").removeClass('d-none');
		$(".tituloModalCrear").removeClass('d-none');
    });
});

// Cuando el modal de retiro se cierre, se limpian los campos
$("#modalRetiro").on("hidden.bs.modal", function (e) {
    limpiarmodalIngreso(function() {
        $("#btnRetirooProdutosBodega").removeClass('d-none');
        $(".tituloModalRetiro").removeClass('d-none');
    });
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
			{"data" : "nombre_depto"},
			{"data" : "nombre_ciudad"},
			{"data" : "direccion"},
			{"data"	: "estado"},
            {"data" : "idPedido",
				render : function(data, type, row) {
					var html = '<i id="editarPedido" data-id='+data+' class="far fa-edit fa-2x editarPedido" ></i>'
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

function limpiarmodalIngreso(callback) {
	// Limpiamos los datos del modal
	$("#producto").val(0);
	$("#cantidad").val("");
	callback();
}