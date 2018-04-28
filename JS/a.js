let mult = require("./mult.js");
//let k = require('./c.js');
//let l = require('./d.js');

/*function a() {
    console.log('Funcion a');
    console.log((j(j) - k(k)) * l(l));
    return a;
}

a();
*/
function b() {
    let a = 9,
        b = 2;
    console.log('Funcion Madre.\nlos valores a sumar,mult y restar son:\na:' + a + '   b: ' + b + '\n');
    // Llamamos las funciones importadas y dependiendo de lo que haga cada funcion en su respectivo archivo es como lo implementaremos.
    // En este ejemplo la funcion suma, retorna valores; es entonces que debemos imprimir ese valor;
    // console.log('Funcion suma: ', suma(a,b));
    // En este caso, la funcion resta que vive dentro de rest.js no retorna nada, solo recibe dos variables y dentro de la funcion imprime la resta de esos dos valores.
    // resta(a,b);
    console.log('Funcion mult: ', mult(a, b));
}
b();