# Esercizio

- Un partecipante si ritira da una gara a metà percorso; rimuovi il suo nome dall'array della classifica mantenendo l'ordine degli altri


## Ragionamento

- Dichiaro l'array con la classifica momentanea della gara
- Identifico il nome del partecipante ritirato
- Trovo il suo indice nella classifica usando .indexOf()
- Rimuovo l'elemento corrispondente tramite il metodo .splice() usando l'indice trovato
   - stampa la classifica finale aggiornata


