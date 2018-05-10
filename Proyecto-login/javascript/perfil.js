$(document).ready(function() {


    let url = 'https://cb-api-gdl.herokuapp.com/api/alumnos/'
    let search = new URLSearchParams(window.location.search)

    url += search.get('id');
    url += "?access_token=" + search.get('access_token');


    $.getJSON(url, function(resp) {
        console.log(resp.nombre);
        $('#nombre').text(resp.nombre);
        $('.musica p.1').text(resp.email);
        $('.bio p').text(resp.bio);
        $('.github').parent().attr('href', 'https://github.com/' + resp.github);

        $('#photo img').attr('src', resp.foto)

    });
});