console.log("js-caricato");

const listaVip = ["LeonardoDiCaprio", "BradPitt", "LadyGaga"];
const utenteX = "BradPitt";
let trovato = false;

for (let i = 0; i < listaVip.length; i++) {
    if (listaVip[i] === utenteX) {
        trovato = true;
        break;
    }
}

if (trovato) {
    console.log(utenteX, "è nella lista VIP");
} else {
    console.log(utenteX, "è nella lista standard");
}