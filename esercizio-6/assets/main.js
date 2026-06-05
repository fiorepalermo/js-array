console.log("js-caricato");

const oreLavorative = [40, 35, 45, 38, 42];
const pagaBase = 15;
const bonusStraordinario = 5;
let stipendioTotale = 0;

for (let i = 0; i < oreLavorative.length; i++) {
    const oreGiorno = oreLavorative[i];

    if (oreGiorno > 40) {
        const straordinari = oreGiorno - 40;
        stipendioTotale += (40 * pagaBase) + (straordinari * (pagaBase + bonusStraordinario));
    } else {
        stipendioTotale += oreGiorno * pagaBase;
    }
}

console.log("Stipendio totale settimanale:", stipendioTotale);
