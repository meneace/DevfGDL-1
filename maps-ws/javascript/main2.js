let tarjetas = [];

function generaTarjeta() {

    let tarj = $('<div class="tarjeta"><input type="text"></input><textarea></textarea><button>Guardar</button></div>');
    $('.contenedor').prepend(tarj);
}

function agregarTarjeta() {
    let tarj = $('<div class="tarjeta"></div>');
    $('.contenedor').prepend(tarj);
}