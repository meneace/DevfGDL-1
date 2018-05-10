var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

function log() {

    if (ValidInputs()) {
        alert("Faltan datos por capturar");
    } else {
        let data = {
            "email": $('#elcorreo').val(),
            "password": $('#elpassword').val()
        }

        $.post('https://cb-api-gdl.herokuapp.com/api/alumnos/login', data).done((function(response, textStatus, jqXHR) {
            console.log("FUNCIONO!!!!!");

            location.href = 'perfil.html?' + "id=" + response.userId + "&" + "access_token=" + response.id;
        })).fail(function(jqXHR, textStatus, errorThrown) {
            console.error(
                "El siguiente error ocurrio " +
                textStatus, errorThrown
            );
        }).always(function() {
            console.log("Algo!!!!!");
        });

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