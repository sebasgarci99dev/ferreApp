var idCategoria;

$(document).ready(function () {
	iniciarTablaStock(function () {

	});
});

// Evento para crear categoria
/*$("#btnRegistrarCategoria").on("click", function (e) {
	var categoria = $("#categoria").val();
		

	var data = new FormData();
	data.append('categoria', categoria);
	
	

	// Servicio web
	var solicitud = new XMLHttpRequest();
	solicitud.open("POST", "../../server/Clases/registroCategoria.php", true);
	solicitud.send(data);

	solicitud.onreadystatechange = function () {
		if (solicitud.readyState == 4) {
			var respuesta = solicitud.responseText;
			if (respuesta == 0) {

				swal({
					title: "FerreApp",
					text: "Categoria creada Correctamente!.",
					icon: "success"
				}).then(function () {
					recargarTablaCategorias(function () {
						$("#modalCategoria").modal('hide');
						limpiarModalCategorias(function () {

						});
					});
				});
			} else {
				swal(
					"FerreApp",
					"Hubo un problema con la creación de la categoria, comuniquese con el administrador.",
					"error"
				);
			}
		}
	}
});
*/

/*
// Evento para editar la unidad de Medida
$("#btnEditarCategoria").on("click", function (e) {
	var categoria = $("#categoria").val();
	

	console.log(categoria);
	
	var data = new FormData();
	data.append('idCategoria', idCategoria);
	data.append('categoria', categoria);
	

	//console.log(data.values(nombreprd));
	// Servicio web
	var solicitud = new XMLHttpRequest();
	solicitud.open("POST", "../../server/Clases/editarCategoria.php", true);
	solicitud.send(data);

	solicitud.onreadystatechange = function () {
		if (solicitud.readyState == 4) {
			var respuesta = solicitud.responseText;
			console.log("entrando al response de editar categoria");
			if (respuesta == 0) {
				swal({
					title: "FerreApp",
					text: "Categoria se ha editado correctamente!.",
					icon: "success"
				}).then(function () {
					recargarTablaCategorias(function () {
						$("#modalCategoria").modal('hide');
						limpiarModalCategorias(function () {
						
						});
					});
				});
			} else {
				swal(
					"FerreApp",
					"Hubo un problema con la edición de la categoria, comuniquese con el administrador.",
					"error"
				);
			}
		}
	}
});

// Cuando el modal de usuarios se cierre, se limpian los campos

$("#modalCategoria").on("hidden.bs.modal", function (e) {
	limpiarModalCategorias(function () {
	
		$("#btnRegistrarCategoria").removeClass('d-none');
		$(".tituloModalCrearCategoria").removeClass('d-none');
		$(".tituloModalEditarCategoria").addClass('d-none');
		$("#btnEditarCategoria").addClass('d-none');
	});
});

// Funcion para editar producto Unidad

$(document).on('click', '.editCategoria', function () {

	idCategoria = $(this).data('id');
	//

	var data = new FormData();
	data.append('idCategoria', idCategoria);

	// Servicio web
	var solicitud = new XMLHttpRequest();
	solicitud.open("POST", "../../server/Clases/cargarCategoriaSql.php", true);
	solicitud.send(data);

	solicitud.onreadystatechange = function () {
		if (solicitud.readyState == 4) {
			console.log("ingresando solicitud htmlResponse de la unidad de categoria");
			var categoria = JSON.parse(solicitud.responseText);
			//console.log(producto.nombre);
			//console.log(producto.estado);

			$("#categoria").val(categoria.categoria);
			

			$("#btnRegistrarCategoria").addClass('d-none');
			$(".tituloModalCrearCategoria").addClass('d-none');
			$(".tituloModalEditarCategoria").removeClass('d-none');
			$("#btnEditarCategoria").removeClass('d-none');

			$("#modalCategoria").modal('show')
		}
	}
});




// Funcion para eliminar unidad de Medida
$(document).on('click', '.eliminarCategoria', function () {

	idCategoria = $(this).data('id');

	swal({
		title: "FerreApp",
		text: "Estas seguro de eliminar permanentemente la Categoria con id " +  idCategoria,
		icon: "warning",
		buttons: true,
		dangerMode: true,
	})
		.then((event) => {
			if (event) {
				var data = new FormData();
				data.append('idCategoria', idCategoria);

				// Servicio web
				var solicitud = new XMLHttpRequest();
				solicitud.open("POST", "../../server/Clases/eliminarCategoria.php", true);
				solicitud.send(data);
				if (solicitud.readyState == 1) {

					swal({
						title: "FerreApp",
						text: "Categoria Eliminada Correctamente!.",
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
						text: "Categoria no eliminada, favor contacte al administrador del sistema!.",
						icon: "warning"
					});


				}
			}
		});
});




*/


//FUnciona OK
function iniciarTablaStock(callback) {

	console.log("ingresa a la funcion iniciar tabla producto");
	$("#tablaStock").DataTable({
		"scrollX": true,
		"ajax": {
			"method": "POST",
			"url": "../../server/Clases/cargarStockTabla.php"

		},

		"columns": [
			{ "data": "idProducto" },
			{ "data": "nombre" },
			{ "data": "stock" },

			
		
		/*	{
				"data": "idProducto",
				render: function (data, type, row) {
					var html = '<i id="editCategoria" data-id=' + data + ' class="far fa-edit fa-2x editCategoria" ></i>';
					html += ' | '
					html += '<i class="far fa-trash-alt fa-2x eliminarCategoria" data-id=' + data + '></i>'
					return html;
				}
			}*/
		],
		"language": {
			"url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Spanish.json"
		}
	});

	callback();
}



function recargarTablaCategorias(callback) {
	$("#tablaStock").DataTable().ajax.reload();
	console.log("Se recargó la tabla");
	callback();
}




