// Funzione per generare numeri casuali unici
const generaNumeriCasuali = (quantita, min, max) => {
  const numeri = new Set();
  while (numeri.size < quantita) {
    numeri.add(Math.floor(Math.random() * (max - min + 1)) + min);
  }
  return [...numeri];
};
