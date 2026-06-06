# Esercizio

Da un estratto conto bancario, estrai solo le ultime 10 transazioni effettuate


## Ragionamento


- Dichiaro l'array contenente la lista completa di tutte le transazioni dell'estratto conto
- Utilizzo il metodo .slice() passando un indice negativo -10 per estrarre una porzione che parte dagli ultimi dieci elementi fino alla fine
   - stampa il nuovo sotto-array generato con le ultime 10 transazioni
