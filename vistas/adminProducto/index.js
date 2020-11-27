var idProducto;

$(document).ready(function () {
	iniciarTablaProductos(function () {

	});
});

// Evento para crear un producto
$("#btnRegistrarProducto").on("click", function (e) {
	var nombreprd = $("#nombrePrd").val();
	var descripcionPrd = $("#descripcionPrd").val();
	var UM = $("#UM").val();
	var EAN = $("#EAN").val();
	var categoria = $("#categoria").val();
	var estado = $("#estado").val();

	var data = new FormData();
	data.append('nombreprd', nombreprd);
	data.append('descripcionPrd', descripcionPrd);
	data.append('UM', UM);
	data.append('EAN', EAN);
	data.append('categoria', categoria);
	data.append('estado', estado);

	// Servicio web
	var solicitud = new XMLHttpRequest();
	solicitud.open("POST", "../../server/Clases/registroProducto.php", true);
	solicitud.send(data);

	solicitud.onreadystatechange = function () {
		if (solicitud.readyState == 4) {
			var respuesta = solicitud.responseText;
			if (respuesta == 0) {

				swal({
					title: "FerreApp",
					text: "Producto Creado Correctamente!.",
					icon: "success"
				}).then(function () {
					recargarTablaProducto(function () {
						$("#modalProducto").modal('hide');
						limpiarModalProducto(function () {

						});
					});
				});
			} else {
				swal(
					"FerreApp",
					"Hubo un problema con la creación del producto, comuniquese con el administrador.",
					"error"
				);
			}
		}
	}
});



// Evento para editar el producto
$("#btnEditarProducto").on("click", function (e) {
	var nombreprd = $("#nombrePrd").val();
	var descripcionPrd = $("#descripcionPrd").val();
	var UM = $("#UM").val();
	var EAN = $("#EAN").val();
	var categoria = $("#categoria").val();
	var estado = $("#estado").val();
	console.log("Ingresando al boton editar producto");
	console.log(idProducto);

	var data = new FormData();
	data.append('idProducto', idProducto)
	data.append('nombreprd', nombreprd);
	data.append('descripcionPrd', descripcionPrd);
	data.append('UM', UM);
	data.append('EAN', EAN);

	data.append('categoria', categoria);
	data.append('estado', estado);

	//console.log(data.values(nombreprd));
	// Servicio web
	var solicitud = new XMLHttpRequest();
	solicitud.open("POST", "../../server/Clases/editarProducto.php", true);
	solicitud.send(data);

	solicitud.onreadystatechange = function () {
		if (solicitud.readyState == 4) {
			var respuesta = solicitud.responseText;
			console.log("entrando al response de crear producto");
			if (respuesta == 0) {
				swal({
					title: "FerreApp",
					text: "Producto editado correctamente!.",
					icon: "success"
				}).then(function () {
					recargarTablaProducto(function () {
						$("#modalProducto").modal('hide');
						limpiarModalProducto(function () {
						});
					});
				});
			} else {
				swal(
					"FerreApp",
					"Hubo un problema con la edición del Producto, comuniquese con el administrador.",
					"error"
				);
			}
		}
	}
});

// Cuando el modal de usuarios se cierre, se limpian los campos

$("#modalProducto").on("hidden.bs.modal", function (e) {
	limpiarModalProducto(function () {
		//$("#nombrePrd").removeClass('d-none');
		//$("#tipoUsuario").removeClass('d-none');
		$("#btnRegistrarProducto").removeClass('d-none');
		$(".tituloModalCrear").removeClass('d-none');
		$(".tituloModalEditar").addClass('d-none');
		$("#btnEditarProducto").addClass('d-none');
	});
});

// Funcion para editar producto FUNCIONANDO
$(document).on('click', '.editPrd', function () {

	idProducto = $(this).data('id');
	console.log(idProducto);

	var data = new FormData();
	data.append('idProducto', idProducto);

	// Servicio web
	var solicitud = new XMLHttpRequest();
	solicitud.open("POST", "../../server/Clases/cargarProductoSql.php", true);
	solicitud.send(data);

	solicitud.onreadystatechange = function () {
		if (solicitud.readyState == 4) {
			console.log("ingresando solicitud onreadystatechange");
			var producto = JSON.parse(solicitud.responseText);
			console.log(producto.nombre);
			console.log(producto.estado);

			$("#nombrePrd").val(producto.nombre);
			$("#descripcionPrd").val(producto.descripcion);
			$("#UM").val(producto.idUnidadMedida);
			$("#EAN").val(producto.codigoBarras);
			$("#categoria").val(producto.idCategoria);
			$("#estado").val(producto.estado);

			console.log(producto.codigoBarras);

			//$("#pass").addClass('d-none');
			//$("#tipoUsuario").addClass('d-none');
			$("#btnRegistrarProducto").addClass('d-none');
			$(".tituloModalCrear").addClass('d-none');
			$(".tituloModalEditar").removeClass('d-none');
			$("#btnEditarProducto").removeClass('d-none');

			$("#modalProducto").modal('show')
		}
	}
});




// Funcion para eliminar un producto funcionando
$(document).on('click', '.eliminarProducto', function () {

	idProducto = $(this).data('id');

	swal({
		title: "FerreApp",
		text: "Estas seguro de eliminar permanentemente el producto con código: " + idProducto,
		icon: "warning",
		buttons: true,
		dangerMode: true,
	})
		.then((event) => {
			if (event) {
				var data = new FormData();
				data.append('idProducto', idProducto);

				// Servicio web
				var solicitud = new XMLHttpRequest();
				solicitud.open("POST", "../../server/Clases/eliminarProducto.php", true);
				solicitud.send(data);
				if (solicitud.readyState == 1) {

					swal({
						title: "FerreApp",
						text: "Prodcuto  eliminado correctamente!.",
						icon: "success",
					}).then((event) => {

						if (event) {
							location.reload();
						}
					});

				}
				else {
					swal({
						title: "FerreApp",
						text: "Producto  no fue eliminado, favor contacte al administrador del sistema!.",
						icon: "warning"
					});


				}
			}
		});
});







//FUnciona OK
function iniciarTablaProductos(callback) {

	console.log("ingresa a la funcion iniciar tabla producto");
	$("#tablaProductos").DataTable({
		"scrollX": true,
		"ajax": {
			"method": "POST",
			"url": "../../server/Clases/cargarProductosTabla.php"

		},

		"columns": [
			{ "data": "idProducto" },
			{ "data": "nombre" },
			{ "data": "descripcion" },
			{ "data": "unidadMedida" },
			{ "data": "codigoBarras" },
			{ "data": "categoria" },
			{ "data": "estado" }, 
			{ "data": "fechaCreacion" },
			{
				"data": "idProducto",
				render: function (data, type, row) {
					var html = '<i id="editProducto" data-id=' + data + ' class="far fa-edit fa-2x editPrd" ></i>';
					html += ' | '
					html += '<i class="far fa-trash-alt fa-2x eliminarProducto" data-id=' + data + '></i>'
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



function recargarTablaProducto(callback) {
	$("#tablaProductos").DataTable().ajax.reload();
	console.log("Se recargó la tabla");
	callback();
}



function limpiarModalProducto(callback) {
	// Limpiamos los datos del modal
	$("#nombrePrd").val("");
	$("#descripcionPrd").val("");
	$("#UM").val("");
	$("#EAN").val("");
	$("#categoria").val("");
	$("#estado").val("Selecciona un Estado");
	callback();
}

