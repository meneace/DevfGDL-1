$(document).ready(function() {


    let url = 'https://cb-api-gdl.herokuapp.com/api/alumnos/'
    let search = new URLSearchParams(window.location.search)

    url += search.get('id');
    url += "?access_token=" + search.get('access_token');


    let token = search.get('access_token');
    let user = search.get('id');
    if (token == null || user == null) {
        location.href = 'index.html'
    }

    $.getJSON(url)
        .done(function(resp) {


            console.log(resp.nombre);
            $('#nombre').text(resp.nombre);
            $('.musica p.1').text(resp.email);
            $('.mail').parent().attr('href', 'mailto:' + resp.email);
            $('.bio p').text(resp.bio);
            $('.github').parent().attr('href', 'https://github.com/' + resp.github);

            $('#photo img').attr('src', resp.foto)

        }).fail(function(resp) {
            location.href = 'index.html'
        })
});