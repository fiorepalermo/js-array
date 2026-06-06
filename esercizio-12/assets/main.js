console.log("js-caricato");


const classificaGara = ["Pietro", "Giovanni", "Marco", "Andrea", "Luigi"];
const ritirato = "Marco";

const indiceRitirato = classificaGara.indexOf(ritirato);
classificaGara.splice(indiceRitirato, 1);

console.log("Classifica aggiornata:", classificaGara);