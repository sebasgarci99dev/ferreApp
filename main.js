
(function ($) {
    "use strict";

    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit',function(){
        var check = true;

        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;
            }
        }

        return check;
    });

    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
        });
    });

    $(document).ready(function() {
        validarModulosUsuario(function() {

        });
    });

    $("#abrirMenu").on('click', function() {
        if($(this).hasClass('actived')) {

            // Cerramos el menú
            $("#menuUsuario").hide();
            $("#abrirMenu").removeClass("actived");

            // Volvemos el contenedor a la normalidad
            $(".contenedor2").removeClass('col-lg-10', 500);
            $(".contenedor2").addClass('col-lg-12', 500);
            
        } else {

            // Reducimos los contenedores
            $(".contenedor2").removeClass('col-lg-12', 500);
            $(".contenedor2").addClass('col-lg-10', 500);

            // Abrimos el menú
            $("#menuUsuario").show(1000);
            $(this).addClass("actived");
        }

    });

    function validarModulosUsuario(callback) {
        // Servicio web
        var solicitud = new XMLHttpRequest();
        solicitud.open("POST", "../server/Clases/validarSesion.php", true);
        solicitud.send();

        solicitud.onreadystatechange = function() {
            if(solicitud.readyState == 4) {
                var respuesta = JSON.parse(solicitud.responseText);
                if(respuesta.idTipoUsuario == 2) {
                    $(".card-columns").css('column-count', 2)
                    $(".cardAdminUsers").hide();
                    $(".cardBodega").hide();
                    $(".cardReportes").hide();
                }

                if(respuesta.idTipoUsuario == 3) {
                    $(".card-columns").css('column-count', 2)
                    $(".cardAdminUsers").hide();
                    // $(".cardProveedores").hide();
                    $(".cardPedidos").hide();
                    $(".cardClientes").hide();
                    $(".cardReportes").hide();
                }

                if(respuesta.idTipoUsuario == 1) {
                    $(".card-columns").css('column-count', 3)
                }
            }
        }
    }

    function validate (input) {
        if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        else {
            if($(input).val().trim() == ''){
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }
    
    

})(jQuery);

