x = 2;
y = 8;
z = 2;

console.log(x == z || x == y);

//Prueba de que se lee en forma ordenada por lo que el valor 10 no se toma en cuenta para esta operacion
let i = 10;

function SumarNumeros() {
    let i = 5;
    console.log(i + ' Variable dentro de funcion');
};

SumarNumeros();

//Ejemplo de funcion con variables en la llamada
function suma(x, y) {
    console.log(x + y)
};

suma(2, 8);

// Ejemplo de funcion asignando el resultado de una funcion a una variable

function sumarN(e, r) {
    return e + r;
};

let sumo = sumarN(9, 8);



console.log(sumo);