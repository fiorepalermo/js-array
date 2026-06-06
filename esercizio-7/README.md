# Esercizio

- Dati gli atleti ["Antonio", "Bruno", "Carlo", "Diego", "Emanuel"] e i relativi punteggi [78, 93, 86, 91, 82], determina chi ha ottenuto il punteggio più alto, il secondo e il terzo più alto per assegnare rispettivamente oro, argento e bronzo.

## Ragionamento

- Dichiaro l'array con i nomi degli atleti
- Dichiaro l'array con i punteggi corrispondenti degli atleti
- Ordino manualmente in modo decrescente i due array confrontando gli indici a coppie
- PER ogni elemento i dell'array
- PER ogni elemento j successivo a i
- SE il punteggio j è maggiore del punteggio i
   - scambia la posizione dei due punteggi
   - scambia la posizione dei due atleti corrispondenti
   - stampa i primi tre atleti del nuovo ordine come Oro, Argento e Bronzo



