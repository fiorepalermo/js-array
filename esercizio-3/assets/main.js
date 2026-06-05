console.log("js-caricato");

const carrozze = [2, 0, 4, 7, 12, 8];
const passeggeri = parseInt(prompt("Inserisci il numero di passeggeri:"));
let carrozzaScelta = -1;

for (let i = 0; i < carrozze.length; i++) {
    if (carrozze[i] >= passeggeri) {
        carrozzaScelta = i;
        break;
    }
}

if (carrozzaScelta !== -1) {
    console.log("Carrozza scelta numero:", carrozzaScelta);
} else {
    console.log("Nessuna carrozza disponibile per il gruppo");
}

