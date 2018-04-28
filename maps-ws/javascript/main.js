function buscar() {
    if (validaInputs()) {
        //alert('Puede buscar');
        //Peticion al WS usando Jquery
        $.ajax({
            url: "https://maps.googleapis.com/maps/api/directions/json?origin=Guadalajara&destination=Manzanillo",
            dataType: "jsonp",
        }).done(function(resp) {
            console.log(resp);
        });
    } else {
        alert('Aun faltan datos');
    }
}


/**
 * Funcion que valida los inputs
 * y me regresa True si es cierto
 */

function validaInputs() {
    let origen = $('#origen').val()
    let destino = $('#destino').val();
    return origen.length > 0 && destino.length > 0;
}