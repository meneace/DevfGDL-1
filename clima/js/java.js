var api = 'http://api.openweathermap.org/data/2.5/weather?q=';
//var ciudad = 'London';
var llave = '&lang=es&appid=0f40ca15b97954d021411d36147ac58b';
var unidades = '&units=metric';


function clima() {
    if (validaInputs()) {
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": api + $('#ciudad').val() + llave + unidades,
            "method": "GET"
        }

        $.ajax(settings).done(function(response) {

            console.log("Temperatura actual " + response.main.temp + "ºC");
            console.log("Humedad " + response.main.humidity + "%");
            console.log("Temperatura minima " + response.main.temp_min + "ºC");
            console.log("Temperatura maxima " + response.main.temp_max + "ºC");
            console.log("Nubosidad " + response.clouds.all);
            console.log("Ciudad " + response.name);

            //Temperatura Mínima
            let minima = $("<h3>" + "Temperatura Mínima" + "</h3>")
            $("#min").append(minima);
            let minima2 = $("<i class='fas fa-thermometer-quarter' style='color: blue'>" + "</i>")
            $("#min").append(minima2);
            let minima3 = $("<h3>" + response.main.temp_min + "ºC" + "</h3>")
            $("#min").append(minima3);

            //Temperatura Maxima
            let maxima = $("<h3>" + "Temperatura Máxima" + "</h3>")
            $("#max").append(maxima);
            let maxima2 = $("<i class='fas fa-thermometer-three-quarters' style='color: red'>" + "</i>")
            $("#max").append(maxima2);
            let maxima3 = $("<h3>" + response.main.temp_max + "ºC" + "</h3>")
            $("#max").append(maxima3);

            //Letrero de ciudad solicitada
            let city = $("<h1 class='ciudad'>" + response.name + "</h1>")
            $("#city").append(city);

            //Cambio color del div principal
            $('.principal').css({ 'background-color': 'ghostwhite' });

            //Seleccion de imagen segun nubosidad
            // <img src="img/nubes_ligth.jpg" alt="Poca nubosidad">
            if (response.clouds.all <= 40) {
                let img = $("<img src='img/nubes_ligth.jpg' alt='Poca nubosidad'>")
                $("#CloudImage").append(img);
            } else {
                let img = $("<img src='img/heavy-cloud.jpg' alt='alta nubosidad'>")
                $("#CloudImage").append(img);
            }

            let cloud = $("<h3 style='nubes'>" + response.clouds.all + " %" + "</h3>")
            $("#CloudImage").append(cloud);
        });
    }
}


function validaInputs() {
    let ciudad = $('#ciudad').val().trim()
    return ciudad.length > 0;
}

// $(".principal").html("");