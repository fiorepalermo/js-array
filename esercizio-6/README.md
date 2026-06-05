# Esercizio
- Date le ore lavorative giornaliere [40, 35, 45, 38, 42] e una paga base di 15€/ora, calcola lo stipendio totale settimanale applicando una maggiorazione di 5€ per ogni ora straordinaria oltre le 40 giornaliere


## Ragionamento

- Dichiaro l'array delle ore lavorative giornaliere
- Dichiaro la paga base oraria (15) e il bonus per straordinari (5)
- Dichiaro la variabile stipendioTotale impostata a 0
- PER ogni giorno lavorativo
- SE le ore del giorno sono maggiori di 40
   - calcolo le ore straordinarie
   - aggiungo allo stipendio il calcolo di (40 * paga base) + (ore straordinarie * (paga base + bonus straordinario))
- ALTRIMENTI
   - aggiungo allo stipendio il calcolo di (ore del giorno * paga base)
   - stampa lo stipendioTotale ottenuto

