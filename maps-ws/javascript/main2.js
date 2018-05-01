function generaTarjeta() {
    $('#pre-tarjeta').css({ display: '' });
}

function limpiaTarjeta() {
    $('#pre-tarjeta').css({ display: 'none' });
    $('input').val('');
    $('textarea').val('');
}

function guardaTarjeta() {
    if (validaInputs()) {
        let nuevaTarjeta = $('#plantilla').clone();

        $(nuevaTarjeta).find('h3').text($('input').val());
        $(nuevaTarjeta).find('p').text($('textarea').val());
        $(nuevaTarjeta).css({ display: '' });
        $(nuevaTarjeta).removeAttr('id');

        $('.contenedor .tarjeta:eq(0)').after(nuevaTarjeta);
        limpiaTarjeta();
    }
}

function validaInputs() {
    let titulo = $('input').val()
    let texto = $('textarea').val();

    return (titulo.length > 0 && texto.length > 0);
}