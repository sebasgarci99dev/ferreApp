var idProducto;

$(document).ready(function () {
	iniciarTablaPrecio(function () {

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
});*/



// Evento para editar la unidad de Medida
$("#btnEditarPrecio").on("click", function (e) {
	var precio = $("#precio").val();
	

	console.log(precio);
	
	var data = new FormData();
	data.append('idProducto', idProducto);
	data.append('precio', precio);
	

	//console.log(data.values(nombreprd));
	// Servicio web
	var solicitud = new XMLHttpRequest();
	solicitud.open("POST", "../../server/Clases/editarPrecio.php", true);
	solicitud.send(data);

	solicitud.onreadystatechange = function () {
		if (solicitud.readyState == 4) {
			var respuesta = solicitud.responseText;
			console.log("entrando al response de editar precio");
			if (respuesta == 0) {
				swal({
					title: "FerreApp",
					text: "se ha cambiado el precio Correctamente!.",
					icon: "success"
				}).then(function () {
					recargarTablaPrecio(function () {
						$("#modalPrecio").modal('hide');
						limpiarModalPrecio(function () {
						
						});
					});
				});
			} else {
				swal(
					"FerreApp",
					"Hubo un problema con la edición del precio, comuniquese con el administrador.",
					"error"
				);
			}
		}
	}
});

// Cuando el modal de usuarios se cierre, se limpian los campos

$("#modalPrecio").on("hidden.bs.modal", function (e) {
	limpiarModalPrecio(function () {
	
		//$("#btnRegistrarCategoria").removeClass('d-none');
		//$(".tituloModalCrearCategoria").removeClass('d-none');
		$(".tituloModalEditarPrecio").addClass('d-none');
		$("#btnEditarPrecio").addClass('d-none');
	});
});

// Funcion para editar producto Unidad

$(document).on('click', '.editPrecio', function () {

	idProducto = $(this).data('id');
	//

	var data = new FormData();
	data.append('idProducto', idProducto);

	// Servicio web
	var solicitud = new XMLHttpRequest();
	solicitud.open("POST", "../../server/Clases/cargarPrecioSql.php", true);
	solicitud.send(data);

	solicitud.onreadystatechange = function () {
		if (solicitud.readyState == 4) {
			console.log("ingresando solicitud htmlResponse de la unidad de categoria");
			var precio = JSON.parse(solicitud.responseText);
			//console.log(producto.nombre);
			//console.log(producto.estado);
			$("#idProducto").val(precio.idProducto);
			$("#precio").val(precio.precio);
			

			//$("#btnRegistrarCategoria").addClass('d-none');
			//$(".tituloModalCrearCategoria").addClass('d-none');
			$(".tituloModalEditarPrecio").removeClass('d-none');
			$("#btnEditarPrecio").removeClass('d-none');

			$("#modalPrecio").modal('show')
		}
	}
});




// Funcion para eliminar unidad de Medida
/*$(document).on('click', '.eliminarCategoria', function () {

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
});*/







//FUnciona OK
function iniciarTablaPrecio(callback) {

	console.log("ingresa a la funcion iniciar tabla precio");
	$("#tablaPrecio").DataTable({
		"scrollX": true,
		"ajax": {
			"method": "POST",
			"url": "../../server/Clases/cargarPrecioTabla.php"

		},

		"columns": [
			{ "data": "idProducto" },
			{ "data": "nombre" },
			{ "data": "precio" },

			
		
			{
				"data": "idProducto",
				render: function (data, type, row) {
					var html = '<i id="editPrecio" data-id=' + data + ' class="far fa-edit fa-2x editPrecio" ></i>';
					/*html += ' | '
					html += '<i class="far fa-trash-alt fa-2x eliminarCategoria" data-id=' + data + '></i>'*/
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



function recargarTablaPrecio(callback) {
	$("#tablaPrecio").DataTable().ajax.reload();
	console.log("Se recargó la tabla");
	callback();
}


function limpiarModalPrecio(callback) {
	// Limpiamos los datos del modal
	$("#idProducto").val("");
	$("#precio").val("");
	callback();
}


