console.log("js-caricato");

const feedGiornale = ["Notizia 1", "Notizia 2", "Notizia 3", "Notizia 4", "Notizia 5"];
const bannerPubblicitario = "SPONSOR: Compra questo prodotto!";

feedGiornale.splice(3, 0, bannerPubblicitario);
console.log("Feed aggiornato con sponsor:", feedGiornale);
