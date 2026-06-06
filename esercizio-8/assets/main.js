console.log("js-caricato");

const turni = ["mattina", "pomeriggio", "notte", "mattina", "pomeriggio", "notte", "mattina"];
let mattina = 0;
let pomeriggio = 0;
let notte = 0;

for (let i = 0; i < turni.length; i++) {
    if (turni[i] === "mattina") {
        mattina++;
    } else if (turni[i] === "pomeriggio") {
        pomeriggio++;
    } else if (turni[i] === "notte") {
        notte++;
    }
}

console.log("Infermieri mattina:", mattina);
console.log("Infermieri pomeriggio:", pomeriggio);
console.log("Infermieri notte:", notte);