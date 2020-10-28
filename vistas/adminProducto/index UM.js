var idUnidadMedida;

$(document).ready(function () {
	iniciarTablaUnidad(function () {

	});
});

// Evento para crear unidad de Medida
$("#btnRegistrarUM").on("click", function (e) {
	var unidadMedida = $("#siglaUM").val();
	var descripcionUnidad= $("#nombreUM").val();
	

	var data = new FormData();
	data.append('unidadMedida', unidadMedida);
	data.append('descripcionUnidad', descripcionUnidad);
	

	// Servicio web
	var solicitud = new XMLHttpRequest();
	solicitud.open("POST", "../../server/Clases/registroUM.php", true);
	solicitud.send(data);

	solicitud.onreadystatechange = function () {
		if (solicitud.readyState == 4) {
			var respuesta = solicitud.responseText;
			if (respuesta == 0) {

				swal({
					title: "FerreApp",
					text: "unidad Creada Correctamente!.",
					icon: "success"
				}).then(function () {
					recargarTablaUnidad(function () {
						$("#modalUM").modal('hide');
						limpiarModalUnidad(function () {

						});
					});
				});
			} else {
				swal(
					"FerreApp",
					"Hubo un problema con la creación de la unidad de medida, comuniquese con el administrador.",
					"error"
				);
			}
		}
	}
});



// Evento para editar la unidad de Medida
$("#btnEditarUM").on("click", function (e) {
	var unidadMedida = $("#siglaUM").val();
	var descripcionUnidad = $("#nombreUM").val();

	console.log(idUnidadMedida);
	console.log(unidadMedida);
	console.log(descripcionUnidad);
	var data = new FormData();
	data.append('idUnidadMedida', idUnidadMedida)
	data.append('unidadMedida', unidadMedida)
	data.append('descripcionUnidad', descripcionUnidad);

	//console.log(data.values(nombreprd));
	// Servicio web
	var solicitud = new XMLHttpRequest();
	solicitud.open("POST", "../../server/Clases/editarUM.php", true);
	solicitud.send(data);

	solicitud.onreadystatechange = function () {
		if (solicitud.readyState == 4) {
			var respuesta = solicitud.responseText;
			console.log("entrando al response de editar unidad");
			if (respuesta == 0) {
				swal({
					title: "FerreApp",
					text: "unidad de Medida se ha editado correctamente!.",
					icon: "success"
				}).then(function () {
					recargarTablaUnidad(function () {
						$("#modalUM").modal('hide');
						limpiarModalUnidad(function () {
						});
					});
				});
			} else {
				swal(
					"FerreApp",
					"Hubo un problema con la edición de la unidad, comuniquese con el administrador.",
					"error"
				);
			}
		}
	}
});

// Cuando el modal de usuarios se cierre, se limpian los campos

$("#modalUM").on("hidden.bs.modal", function (e) {
	limpiarModalUnidad(function () {
		//$("#nombrePrd").removeClass('d-none');
		//$("#tipoUsuario").removeClass('d-none');
		$("#btnRegistrarUM").removeClass('d-none');
		$(".tituloModalCrearUM").removeClass('d-none');
		$(".tituloModalEditarUM").addClass('d-none');
		$("#btnEditarUM").addClass('d-none');
	});
});

// Funcion para editar producto Unidad

$(document).on('click', '.editUnidad', function () {

	idUnidadMedida = $(this).data('id');
	//

	var data = new FormData();
	data.append('idUnidadMedida', idUnidadMedida);

	// Servicio web
	var solicitud = new XMLHttpRequest();
	solicitud.open("POST", "../../server/Clases/cargarUMSql.php", true);
	solicitud.send(data);

	solicitud.onreadystatechange = function () {
		if (solicitud.readyState == 4) {
			console.log("ingresando solicitud htmlResponse de la unidad de medida");
			var unidad = JSON.parse(solicitud.responseText);
			//console.log(producto.nombre);
			//console.log(producto.estado);

			$("#siglaUM").val(unidad.unidadMedida);
			$("#nombreUM").val(unidad.descripcionUnidad);

			$("#btnRegistrarUM").addClass('d-none');
			$(".tituloModalCrearUM").addClass('d-none');
			$(".tituloModalEditarUM").removeClass('d-none');
			$("#btnEditarUM").removeClass('d-none');

			$("#modalUM").modal('show')
		}
	}
});




// Funcion para eliminar unidad de Medida
$(document).on('click', '.eliminarUnidad', function () {

	idUnidadMedida = $(this).data('id');

	swal({
		title: "FerreApp",
		text: "Estas seguro de eliminar permanentemente la unidad de medida con id  " +  idUnidadMedida,
		icon: "warning",
		buttons: true,
		dangerMode: true,
	})
		.then((event) => {
			if (event) {
				var data = new FormData();
				data.append('idUnidadMedida', idUnidadMedida);

				// Servicio web
				var solicitud = new XMLHttpRequest();
				solicitud.open("POST", "../../server/Clases/eliminarUM.php", true);
				solicitud.send(data);
				if (solicitud.readyState == 1) {

					swal({
						title: "FerreApp",
						text: "Unidad de Medida Eliminada Correctamente!.",
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
						text: "Unidad de Medida no eliminada, favor contacte al administrador del sistema!.",
						icon: "warning"
					});


				}
			}
		});
});







//FUnciona OK
function iniciarTablaUnidad(callback) {

	console.log("ingresa a la funcion iniciar tabla producto");
	$("#tablaUnidadMedida").DataTable({
		"ajax": {
			"method": "POST",
			"url": "../../server/Clases/cargarUMTabla.php"

		},

		"columns": [
			{ "data": "idUnidadMedida" },
			{ "data": "unidadMedida" },
			{ "data": "descripcionUnidad" },
		
			{
				"data": "idUnidadMedida",
				render: function (data, type, row) {
					var html = '<i id="editUnidad" data-id=' + data + ' class="far fa-edit fa-2x editUnidad" ></i>';
					html += ' | '
					html += '<i class="far fa-trash-alt fa-2x eliminarUnidad" data-id=' + data + '></i>'
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



function recargarTablaUnidad(callback) {
	$("#tablaUnidadMedida").DataTable().ajax.reload();
	console.log("Se recargó la tabla");
	callback();
}



function limpiarModalUnidad(callback) {
	// Limpiamos los datos del modal
	$("#siglaUM").val("");
	$("#nombreUM").val("");
	callback();
}

