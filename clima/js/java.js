var api = 'http://api.openweathermap.org/data/2.5/weather?q=';
var ciudad = 'London';
var llave = '&appid=0f40ca15b97954d021411d36147ac58b';
var unidades = '&units=metric';


function clima() {

    var settings = {
        "async": true,
        "crossDomain": true,
        "url": api + ciudad + llave + unidades,
        "method": "GET"
    }

    $.ajax(settings).done(function(response) {
        console.log("Temperatura actual " + response.main.temp + "ºC");
        console.log("Humedad " + response.main.humidity + "%");
        console.log("Temperatura minima " + response.main.temp_min + "ºC");
        console.log("Temperatura maxima " + response.main.temp_max + "ºC");
    });
}