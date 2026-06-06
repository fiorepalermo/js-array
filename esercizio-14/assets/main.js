console.log("js-caricato");

const contattiBloccati = ["bomber99", "ghost_rider", "hacker_pro"];
const nuovoAmico = "ghost_rider";

if (contattiBloccati.includes(nuovoAmico)) {
    console.log("Impossibile aggiungere: contatto bloccato.");
} else {
    console.log("Richiesta inviata a:", nuovoAmico);
}