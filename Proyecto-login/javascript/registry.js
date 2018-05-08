var activo_FS, previo_FS, siguiente_FS, primero_FS;

$(document).ready(function() {
    /**Boton siguiente de la primer pantalla.
     * Oculta la primer pantalla, muestra la segunda 
     * y avanza la barra de progresion 
     */
    $('.siguiente').click(function() {
        activo_FS = $('#uno');
        siguiente_FS = $('#dos');
        $("#avance li").eq($("fieldset").index(siguiente_FS)).addClass("active");
        siguiente_FS.show();
        activo_FS.hide();

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
    });
});

$(".submit").click(function() {
    return false;
})