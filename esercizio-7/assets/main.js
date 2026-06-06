console.log("js-caricato");


const atleti = ["Antonio", "Bruno", "Carlo", "Diego", "Emanuel"];
const punteggi = [78, 93, 86, 91, 82];

for (let i = 0; i < punteggi.length; i++) {
    for (let j = i + 1; j < punteggi.length; j++) {
        if (punteggi[j] > punteggi[i]) {
            let tempPunti = punteggi[i];
            punteggi[i] = punteggi[j];
            punteggi[j] = tempPunti;

            let tempAtleta = atleti[i];
            atleti[i] = atleti[j];
            atleti[j] = tempAtleta;
        }
    }
}

console.log("Oro:", atleti[0]);
console.log("Argento:", atleti[1]);
console.log("Bronzo:", atleti[2]);