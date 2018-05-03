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
            console.log("Lluvia " + response.weather[0].description);
            console.log("Pais " + response.sys.country);
            console.log("Icono " + response.weather[0].icon);

            //Temperatura Mínima
            let minima = $("<h3>" + "Temperatura Mínima" + "</h3>")
            $("#min").append(minima);
            let minima2 = $("<i class='fas fa-thermometer-quarter' style='color: blue'>" + "</i>")
            $("#min").append(minima2);
            let minima3 = $("<h3>" + response.main.temp_min + "&deg;" + "C" + "</h3>")
            $("#min").append(minima3);

            //Temperatura Maxima
            let maxima = $("<h3>" + "Temperatura Máxima" + "</h3>")
            $("#max").append(maxima);
            let maxima2 = $("<i class='fas fa-thermometer-three-quarters' style='color: red'>" + "</i>")
            $("#max").append(maxima2);
            let maxima3 = $("<h3>" + response.main.temp_max + "&deg;" + "C" + "</h3>")
            $("#max").append(maxima3);

            //Letrero de ciudad solicitada
            let city = $("<h1 class='ciudad'>" + response.name + "</h1>")
            $("#city").append(city);

            //Cambio color del div principal, pone sombra y oculta el cuestionario
            $('.principal').css({ 'background-color': 'ghostwhite' });
            $('.principal').css({ 'box-shadow': 'rgba(0, 0, 0, 0.6) 2px 2px 2px' });
            $('.cuestionario').css({ 'display': 'none' });

            //Muestra el boton de regreso
            let atras = $("<i class='fas fa-undo' onclick='regresa()'>" + "</i>")
            $("#back").append(atras);




            //Seleccion de imagen segun nubosidad
            let icono = $("<img src='http://openweathermap.org/img/w/" + response.weather[0].icon + ".png'" + ">")
            $("#icon").append(icono);
            if (response.clouds.all <= 40) {
                if (response.clouds.all <= 15) {
                    let img = $("<img src='img/clear-sky.jpg' alt='Poca nubosidad'>")
                    $("#Imagen").append(img);
                } else {
                    let img = $("<img src='img/nubes_ligth.jpg' alt='Sin nubosidad'>")
                    $("#Imagen").append(img);
                }
            } else {
                let img = $("<img src='img/heavy-cloud.jpg' alt='Alta nubosidad'>")
                $("#Imagen").append(img);
            }
            //Muestra el porcentaje de lluvia
            let cloud = $("<p style='nubes'>" + "Nubosidad: " + response.clouds.all + "%" + "</p>")
            $("#masInfo").append(cloud);
            let humi = $("<p style='nubes'>" + "Humedad " + response.main.humidity + "%" + "</p>")
            $("#masInfo").append(humi);
        });
    }
}


function validaInputs() {
    let ciudad = $('#ciudad').val().trim()
    return ciudad.length > 0;
}

function regresa() {
    window.location.reload(false);
}