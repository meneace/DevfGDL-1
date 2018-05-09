var activo_FS, previo_FS, siguiente_FS, primero_FS;
var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
var filter2 = /^\@([a-zA-Z0-9\-])+$/;
var api = 'https://cb-api-gdl.herokuapp.com/explorer/#/alumno';




function ValidInputs() {
    let mail = $('#elcorreo').val();
    let pass = $('#elpassword').val();
    let pass2 = document.getElementById('elpassword2').value;


    if (!filter.test(mail)) {
        alert('Por favor asigne una cuenta de correo valida');
        mail.focus;
        return false;
    }

    if (pass !== pass2) {
        alert('Las contraseñas no son iguales');
        return false;
    } else {
        return (mail.length > 0 || pass.length > 0);
    }
}






$(document).ready(function() {
    //debugger;

    /**Boton siguiente de la primer pantalla.
     * Oculta la primer pantalla, muestra la segunda 
     * y avanza la barra de progresion 
     */
    $('.siguiente').click(function() {
        //  debugger;
        if (ValidInputs()) {
            activo_FS = $('#uno');
            siguiente_FS = $('#dos');
            $("#avance li").eq($("fieldset").index(siguiente_FS)).addClass("active");
            siguiente_FS.show();
            activo_FS.hide();
        }
    });
    /** Boton previo de la segunda pantalla.
     * Oculta la segunda pantalla y muestra la primera,
     * atrasa una posicion la barra de progresion.
     */
    $('.previo').click(function() {
        activo_FS = $('#dos');
        previo_FS = $('#uno');
        $("#avance li").eq($("fieldset").index(activo_FS)).removeClass("active");
        previo_FS.show();
        activo_FS.hide();
    });
    /**Boton siguiente de la segunda pantalla.
     * Oculta la segunda pantalla y muestra la tercera,
     * recorre una posicion la barra de progresion.
     */
    $('.sigui').click(function() {
        activo_FS = $('#dos');
        siguiente_FS = $('#tres');
        $("#avance li").eq($("fieldset").index(siguiente_FS)).addClass("active");
        siguiente_FS.show();
        activo_FS.hide();

    });

    /**Boton previo de la tercera pantalla.
     * Oculta la tercer pantalla y muestra la segunda,
     * atrasa una posicion la barra de progesion.
     */

    $('#previo').click(function() {
        activo_FS = $('#tres');
        previo_FS = $('#dos');
        primero_FS = $('#uno');
        $("#avance li").eq($("fieldset").index(activo_FS)).removeClass("active");
        previo_FS.show();
        activo_FS.hide();
        primero_FS.hide();

    });


    $("#crear").click(function() {

        let data = {
            'nombre': $('#nombre').val(),
            'foto': $('#imagen').val(),
            'github': $('#github').val(),
            'mail': $('#elcorreo').val(),
            'password': $('#elpassword').val()
        }

        $.post('https://cb-api-gdl.herokuapp.com/api/alumnos', data).done((function(response, textStatus, jqXHR) {
            console.log("FUNCIONO!!!!!");
        })).fail(function(jqXHR, textStatus, errorThrown) {
            console.error(
                "El siguiente error ocurrio " +
                textStatus, errorThrown
            );
        }).always(function() {
            console.log("Algo!!!!!");
        });




        console.log(data);

    })
});