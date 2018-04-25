let cinta_blanca = [{
    'nombre': 'omar',
    'edad': 24
}, {
    'nombre': 'francisco',
    'edad': 39
}, {
    'nombre': 'Nora',
    'edad': 24
}]

let sujeto = {
    'nombre': 'Juan',
    'edad': 38
}

cinta_blanca.push(sujeto);


for (i = 0; i < cinta_blanca.length; i++) {
    let h1 = document.createElement('h1');
    let texto = document.createTextNode("Este wey se llama " + cinta_blanca[i].nombre + ' y tiene ' + cinta_blanca[i].edad + ' años');
    h1.appendChild(texto);
    elbody.appendChild(h1);
}



/*
        let h1 = document.createElement("h1");
        let text_h1 = document.createTextNode("este es un h1");
        h1.appendChild(text_h1);
        let elbody = document.getElementById('elbody');
        elbody.appendChild(h1);*/