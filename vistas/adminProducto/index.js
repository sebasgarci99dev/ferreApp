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

	var data = new FormData();
	data.append('nombreprd', nombreprd);
	data.append('descripcionPrd', descripcionPrd);
	data.append('UM', UM);
	data.append('EAN', EAN);
	data.append('categoria', categoria);
	data.append('estado', estado);


	// Servicio web
	var solicitud = new XMLHttpRequest();
	solicitud.open("POST", "../../server/Clases/editarProducto.php", true);
	solicitud.send(data);

	solicitud.onreadystatechange = function () {
		if (solicitud.readyState == 4) {
			var respuesta = solicitud.responseText;
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

// Funcion para editar producto
$(document).on('click', '.editPrd', function () {

	idProducto= $(this).data('id');
	console.log(idProducto);

	var data = new FormData();
	data.append('idProducto', idProducto);

	// Servicio web
	var solicitud = new XMLHttpRequest();
	solicitud.open("POST", "../../server/Clases/cargarProductoSql.php", true);
	solicitud.send(data);

	solicitud.onreadystatechange = function () {
		if (solicitud.readyState == 4) {
			console.log("ingresandos solicitud onreadystatechange");
			var producto = JSON.parse(solicitud.responseText);

			$("#nombrePrd").val(producto.nombre);
			$("#descripcionPrd").val(producto.descripcion);
			$("#UM").val(producto.idUnidadMedida);
			$("#EAN").val(producto.codigoBarras);
			$("#categoria").val(producto.idCategoria);
			$("#estado").val(producto.estado);

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




// Funcion para eliminar un usuario---Pendiente
$(document).on('click', '.eliminarProducto', function () {

	idUsuario = $(this).data('id');

	swal({
		title: "FerreApp",
		text: "Estas seguro de eliminar el usuario con código: " + idUsuario,
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

				solicitud.onreadystatechange = function () {
					if (solicitud.readyState == 4) {
						var respuesta = JSON.parse(solicitud.responseText);
						if (respuesta == 0) {
							swal({
								title: "FerreApp",
								text: "Usuario eliminado correctamente!.",
								icon: "success"
							}).then(function () {
								recargarTablaUsuarios(function () {
									limpiarModalUsuario(function () {
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







//FUnciona OK
function iniciarTablaProductos(callback) {

	console.log("ingresa a la funcion iniciar tabla producto");
	$("#tablaProductos").DataTable({
		"ajax": {
			"method": "POST",
			"url": "../../server/Clases/cargarProductosTabla.php"

		},

		"columns": [
			{ "data": "idProducto" },
			{ "data": "nombre" },
			{ "data": "descripcion" },
			{ "data": "idUnidadMedida" },
			{ "data": "codigoBarras" },
			{ "data": "idCategoria" },
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
	$("#tablaProducto").DataTable().ajax.reload();
	callback();
}



function limpiarModalProducto(callback) {
	// Limpiamos los datos del modal
	$("#nombrePrd").val("");
	$("#descripcionPrd").val("");
	$("#UM").val("");
	$("#EAN").val("");
	$("#categoria").val("");
	$("#estado").val("");
	callback();
}

