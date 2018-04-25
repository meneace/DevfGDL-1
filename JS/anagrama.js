let ana = ["m", "u", "r", "c", "i", "e", "l", "a", "g", "o"];
let vsana = ["o", "g", "a", "l", "e", "i", "c", "r", "u", "m"];

var a = ana.sort();
var b = vsana.sort();

for (var i = 0, sum = 0; i < a.length; sum += a[i++]) {
    var c = (a[i]);
    let n = c.charCodeAt(0);
    //console.log(n);
}

for (var i = 0, sum1 = 0; i < b.length; sum1 += b[i++]) {
    var c = (b[i]);
    let n = c.charCodeAt(0);
    //console.log(n);
}



//console.log(sum);

let n = sum.charCodeAt(0);
let t = sum1.charCodeAt(0);

/*
console.log(sum);
console.log(sum1);
console.log(n);
console.log(t); */

var anat = sum.length > 0 && sum.length === sum1.length && (sum.toLowerCase().split('').sort().join('') === sum1.toLowerCase().split('').sort().join(''));
console.log(anat)