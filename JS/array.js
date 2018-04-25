let unArray = [];
unArray.push('1');
unArray.push('0');
unArray.push('0');
let unArrayB = [];
unArrayB.push('0');
unArrayB.push('1');
unArrayB.push('0');
let unArrayc = [];
unArrayc.push('0');
unArrayc.push('0');
unArrayc.push('1');
console.log(unArray)
console.log(unArrayB)
console.log(unArrayc)
    /*
    let tresArray = [];
    let dosArray = [];
    let DArray = [];
    for (i = 0; i < 3; i++) {
        for (j = i; j < 2; j++) {
            dosArray.push([j]);
            for (k = 1; k < 2; k++) {
                DArray.push([k]);
            }
        }
        tresArray.push([i]);
    }

    console.log(tresArray)
    console.log(dosArray)
    console.log(DArray)
    */



//Suma del numero 1 al numero 100 
let array = [];
let suma = 0;
for (i = 0; i <= 100; i++) {
    array.push(i);
    suma = suma + i;
}

console.log('Suma sucesiva de 1 a 100= ' + suma);


//Suma de matrices iguales
let cambio = [7, 2, 4, 6, 8, 4, 2, 9, 2];
let cambio1 = [7, 2, 4, 6, 8, 4, 2, 9, 1];
let cambio3 = [];
for (s = 0; s <= 8; s++) {
    cambio3[s] = cambio[s] + cambio1[s];
}

console.log(cambio3);

//Suma de matrices con diferente tamaño completado con ceros
let dif = [7, 2, 4, 6, 8, 4, 2, 9, 2];
let dif1 = [7, 2, -9, 6, 8, 4, 2, 9, 1, 3, 4, 5];
let dif3 = [];
for (s = 0; s < dif.length || s < dif1.length; s++) {

    if (dif[s] === undefined) {
        dif[s] = 0
    }
    if (dif1[s] === undefined) {
        dif1[s] = 0
    }
    dif3[s] = dif[s] + dif1[s];
}

//console.log(dif.length);
//console.log(dif1.length);

console.log(dif3);


//Tarea hacer un anagrama