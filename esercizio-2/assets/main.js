console.log("js-caricato");

const studenti = ["Anna", "Luca", "Marco", "Sofia"];
const voti = [7.5, 5, 4.5, 8];

for (let i = 0; i < studenti.length; i++) {
    const voto = voti[i];

    if (voto >= 6) {
        console.log(studenti[i], "Sufficiente");
    } else {
        console.log(studenti[i], "Non sufficiente");
    }
}

