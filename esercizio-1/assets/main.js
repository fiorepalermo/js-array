console.log("js-caricato");

const ingredienti1 = ["Latte", "Pane", "Uova", "Riso", "Pasta"];
const quantita = [12, 0, 3, 25, 4];

for (let i = 0; i < ingredienti1.length; i++) {
    const qta = quantita[i];

    if (qta === 0) {
        console.log(ingredienti1[i], "ESAURITO");
    } else if (qta < 5) {
        console.log(ingredienti1[i], "Scorte basse");
    }
}
