console.log("js-caricato");

const allergeniPiatto = ["glutine", "lattosio", "frutta a guscio"];
const ingredienteSospetto = "lattosio";

if (allergeniPiatto.includes(ingredienteSospetto)) {
    console.log("ATTENZIONE: Il piatto contiene l'allergene:", ingredienteSospetto);
} else {
    console.log("Piatto sicuro, non contiene:", ingredienteSospetto);
}
