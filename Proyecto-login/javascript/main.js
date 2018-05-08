var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

function log() {

    if (ValidInputs()) {
        alert("Faltan datos por capturar");
    } else {
        $('body').css({ 'background-color': 'green' });
    }
}

function ValidInputs() {
    let mail = document.getElementById('elcorreo').value;
    let pass = document.getElementById('elpassword').value;

    if (!filter.test(mail)) {
        alert('Por favor asigne una cuenta de correo valida');
        mail.focus;
        return true;
    } else {
        return (mail.length == 0 || pass.length == 0);

    }
}