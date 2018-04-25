let cinta_blanca = [
    { 'nombre': 'omar', 'edad': 24 },
    { 'nombre': 'francisco', 'edad': 39 },
    { 'nombre': 'Nora', 'edad': 24 }
]

let sujeto = {
    'nombre': 'Juan',
    'edad': 38
}
console.log(cinta_blanca);
console.log(sujeto);
cinta_blanca.push(sujeto);
console.log(cinta_blanca);

console.log('este wey se llama ' + cinta_blanca[1].nombre + ' y tiene ' + cinta_blanca[1].edad + ' años')

for (i = 0; i < cinta_blanca.length; i++)
    console.log('este wey se llama ' + cinta_blanca[i].nombre + ' y tiene ' + cinta_blanca[i].edad + ' años');