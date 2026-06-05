console.log("js-caricato");

const temperature = [14, 16, 19, 15, 21, 18, 17];
let max = temperature[0];
let min = temperature[0];
let somma = 0;

for (let i = 0; i < temperature.length; i++) {
    const temp = temperature[i];

    if (temp > max) {
        max = temp;
    }
    if (temp < min) {
        min = temp;
    }
    somma += temp;
}

const media = somma / temperature.length;

console.log("Temperatura massima:", max);
console.log("Temperatura minima:", min);
console.log("Media aritmetica:", media);
