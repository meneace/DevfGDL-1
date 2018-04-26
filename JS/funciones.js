function elboton(mensaje) {
    alert(mensaje + "," + mensaje.length);
}


function dialogo() {
    let nombre = document.getElementById('nombre').value;
    elboton('Que onda ' + nombre + ' como estas?');
}