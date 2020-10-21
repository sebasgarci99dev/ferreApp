var idProducto;

/*$(document).ready(function() {
	iniciarTablaProductos(function() {
		console.log("iniciar tabla producto");

	});
});
*/
// Evento para crear un usuario
$("#btnRegistrarProducto").on("click", function (e) {
	console.log("FUNCIONA EL BOTON DE  DE CREAR PRODUCTO");
	//var idProducto = $("#idproducto").val();
	var nombreprd = $("#nombrePrd").val();	
	var descripcionPrd = $("#descripcionPrd").val();
	var UM = $("#UM").val();
	var EAN = $("#EAN").val();
	var categoria = $("#categoria").val();
	var estado = $("#estado").val();
	var fechaCreacionPrd =  $("#fechaCreacionPrd").val();

	var data = new FormData();
	//data.append('idProducto', idProducto);
	data.append('nombreprd', nombreprd);
	data.append('descripcionPrd', descripcionPrd);
	data.append('UM', UM);
	data.append('EAN', EAN);
	data.append('categoria', categoria);
	data.append('estado', estado);
	data.append('fechaCreacionPrd', fechaCreacionPrd);

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

// Evento para editar el usuario
$("#btnEditarUsuario").on("click", function (e) {
	var email = $("#email").val();
	var nombre = $("#nombre").val();
	var apellido = $("#apellido").val();
	var direccion = $("#direccion").val();
	var telefono = $("#telefono").val();

	var data = new FormData();
	data.append('idUsuario', idUsuario);
	data.append('email', email);
	data.append('nombre', nombre);
	data.append('apellido', apellido);
	data.append('direccion', direccion);
	data.append('telefono', telefono);

	// Servicio web
	var solicitud = new XMLHttpRequest();
	solicitud.open("POST", "../../server/Clases/editarUsuario.php", true);
	solicitud.send(data);

	solicitud.onreadystatechange = function () {
		if (solicitud.readyState == 4) {
			var respuesta = solicitud.responseText;
			if (respuesta == 0) {
				swal({
					title: "FerreApp",
					text: "Usuario editado correctamente!.",
					icon: "success"
				}).then(function () {
					recargarTablaUsuarios(function () {
						$("#modalUsuario").modal('hide');
						limpiarModalUsuario(function () {
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
	limpiarModalUsuario(function () {
		$("#pass").removeClass('d-none');
		$("#tipoUsuario").removeClass('d-none');
		$("#btnRegistrarUsuario").removeClass('d-none');
		$(".tituloModalCrear").removeClass('d-none');
		$(".tituloModalEditar").addClass('d-none');
		$("#btnEditarUsuario").addClass('d-none');
	});
});

// Funcion para editar usuario
$(document).on('click', '.editarUsuario', function () {

	idUsuario = $(this).data('id');

	var data = new FormData();
	data.append('idUsuario', idUsuario);

	// Servicio web
	var solicitud = new XMLHttpRequest();
	solicitud.open("POST", "../../server/Clases/cargarUsuario.php", true);
	solicitud.send(data);

	solicitud.onreadystatechange = function () {
		if (solicitud.readyState == 4) {
			var usuario = JSON.parse(solicitud.responseText);

			$("#email").val(usuario.Email);
			$("#nombre").val(usuario.Nombre);
			$("#apellido").val(usuario.Apellido);
			$("#direccion").val(usuario.Direccion);
			$("#telefono").val(usuario.Telefono);

			$("#pass").addClass('d-none');
			$("#tipoUsuario").addClass('d-none');
			$("#btnRegistrarUsuario").addClass('d-none');
			$(".tituloModalCrear").addClass('d-none');
			$(".tituloModalEditar").removeClass('d-none');
			$("#btnEditarUsuario").removeClass('d-none');

			$("#modalUsuario").modal('show')
		}
	}
});

// Funcion para eliminar un usuario
$(document).on('click', '.eliminarUsuario', function () {

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

function iniciarTablaUsuarios(callback) {

	$("#tablaUsuarios").DataTable({
		"ajax": {
			"method": "POST",
			"url": "../../server/Clases/cargarUsuarios.php"
		},
		"columns": [
			{ "data": "idUsuario" },
			{ "data": "Email" },
			{ "data": "Nombre" },
			{ "data": "Apellido" },
			{ "data": "Direccion" },
			{ "data": "Telefono" },
			{ "data": "tipoUsuario" },
			{
				"data": "idUsuario",
				render: function (data, type, row) {
					var html = '<i id="editUsuario" data-id=' + data + ' class="far fa-edit fa-2x editarUsuario" ></i>';
					html += ' | '
					html += '<i class="far fa-trash-alt fa-2x eliminarUsuario" data-id=' + data + '></i>'
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
	$("#tipoUsuario").val("");

	callback();
}