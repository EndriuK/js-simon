// Funzione per generare numeri casuali unici
const generaNumeriCasuali = (quantita, min, max) => {
  const numeri = new Set();
  while (numeri.size < quantita) {
    numeri.add(Math.floor(Math.random() * (max - min + 1)) + min);
  }
  return [...numeri];
};

// Funzione per avviare il timer
const avviaTimer = (durata, display, callback) => {
  let timer = durata;
  const intervallo = setInterval(() => {
    const minuti = String(Math.floor(timer / 60)).padStart(2, "0");
    const secondi = String(timer % 60).padStart(2, "0");
    display.textContent = `${minuti}:${secondi}`;
    if (--timer < 0) {
      clearInterval(intervallo);
      callback();
    }
  }, 1000);
};

// Funzione per chiedere all'utente di inserire i numeri
const chiediNumeriUtente = (quantita) => {
  const numeriUtente = [];
  for (let i = 0; i < quantita; i++) {
    numeriUtente.push(
      parseInt(prompt(`Inserisci il numero ${i + 1} di ${quantita}`), 10)
    );
  }
  return numeriUtente;
};
