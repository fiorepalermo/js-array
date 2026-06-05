# Esercizio

- Dati i posti liberi per carrozza [2, 0, 4, 7, 12, 8], chiedi all'utente il numero di passeggeri del gruppo e assegna loro la prima carrozza che ha capienza sufficiente, stampando il numero della carrozza scelta


## Ragionamento

- Dichiaro l'array dei posti liberi per le carrozze
- Chiedo all'utente il numero di passeggeri e lo salvo in una variabile
- Dichiaro una variabile per salvare il numero della carrozza scelta (inizialmente -1)
- PER ogni carrozza
- SE i posti liberi della carrozza attuale sono maggiori o uguali al numero dei passeggeri
   - assegno l'indice corrente alla carrozza scelta
   - interrompo il ciclo
- SE la carrozza scelta è diversa da -1
   - stampa il numero della carrozza scelta
- ALTRIMENTI
   - stampa "Nessuna carrozza disponibile"