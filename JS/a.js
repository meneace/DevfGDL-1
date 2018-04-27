let j = require('./b.js');
let k = require('./c.js');
let l = require('./d.js');

/*function a() {
    console.log('Funcion a');
    console.log((j(j) - k(k)) * l(l));
    return a;
}

a();*/

function b(j, k) {
    let a = 5;
    let b = 6;
    l(a, b);
    k(a, b);

}
b();