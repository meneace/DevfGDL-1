function log() {

    if (ValidInputs()) {

        $('body').css({ 'background-color': 'red' });
        alert("Faltan datos por capturar");
    } else {
        $('body').css({ 'background-color': 'green' });

    }
}

function ValidInputs() {
    let mail = document.getElementById('elcorreo').value;
    let pass = document.getElementById('elpassword').value;

    return (mail.length == 0 || pass.length == 0);
}