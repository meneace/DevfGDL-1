let edad = 95;

if (edad >= 18) {
    console.log('ya es mayor de edad');
    if (edad >= 40 & edad <= 60) {
        console.log('Podria ser tu papà');
    } else if (edad > 60 & edad <= 90) {
        console.log('Podria ser tu abuelo');
    } else {
        console.log('ya es una momia');
    }
} else(edad < 18); {
    if (edad >= 3 & edad <= 6) {
        console.log('Esta en Kinder');
    } else if (edad > 6 & edad <= 12) {
        console.log('Esta en primaria');
    } else if (edad > 12 & edad <= 15) {
        console.log('Esta en secundaria');
    } else if (edad > 15 & edad <= 18) {
        console.log('Esta en Preparatoria');
    } else {
        console.log('Es un bebe');
    }
}