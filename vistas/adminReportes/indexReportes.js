var idModulo;

$(document).ready(function () {
	$("#modalReportes").modal('show')

});

// Evento para listar el reporte
$("#btnListarReporte").on("click", function () {
	
	iniciarTablaModuloReportes(function () {
		$("#modalReportes").modal('hide')
	});
	
});

// Cuando el modal de usuarios se cierre, se limpian los campos



//FUnciona OK
function iniciarTablaModuloReportes(callback) {

	console.log("ingresa a la funcion iniciar reportes");
	idModulo =  $("#grupoReportes").val();
	var data = {};
	data.idModulo = idModulo
	
	tabla=$("#tablaModuloReportes").DataTable({
		"scrollX": true,
		"ajax": {
			"method": "POST",
			"url": "../../server/Clases/cargarReporteSQL.php",
			"data": data
		},
		"columns": [
			{ "data": "llaveReporte" },
			{ "data": "nombreReporte" },

			{
				"data": "llaveReporte",
				render: function (data, type, row) {
					var html = '<i data-id=' + data + ' class="fas fa-clipboard-list fa-2x generarReporte" ></i>';
					/*html += ' | ';
					html += '<i class="far fa-file-excel fa-2x cargarReporte" data-id=' + data + '></i>'
										*/

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

$(document).on('click', '.generarReporte', function () {
	console.log('se presiona el boton de listar reporte');
	
	var idReporte;
	idReporte=$(this).data('id');
	console.log(idReporte);
	switch(idReporte){
		case 21:
			window.location="../adminReportes/Reportes/Reporte21.php";
		break;
		case 22:
			window.location="../adminReportes/Reportes/Reporte22.php";
		break;
		case 23:
			window.location="../adminReportes/Reportes/Reporte23.php";
		break;
		case 31:
			window.location="../adminReportes/Reportes/Reporte31.php";
		break;
		case 32:
			window.location="../adminReportes/Reportes/Reporte32.php";
		break;
		case 41:
			window.location="../adminReportes/Reportes/Reporte41.php";
		break;
		case 42:
			window.location="../adminReportes/Reportes/Reporte42.php";
		break;
	}
	
});
    