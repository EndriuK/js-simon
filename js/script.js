// ARRAY NUMERI RANDOM
let randomNumbers = [];

// CICLO WHILE
while (randomNumbers.length < 5) {
  let randomNumber = Math.floor(Math.random() * 100) + 1;
  if (!randomNumbers.includes(randomNumber)) {
    randomNumbers.push(randomNumber);
  }
}

console.log(randomNumbers);
