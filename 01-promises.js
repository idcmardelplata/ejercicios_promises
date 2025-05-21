
// const p = Promise.resolve("Promesa resuelta");

// p.then(console.log);

// const promiseRejected = Promise.reject("No funciona");


// promiseRejected
//   .then(console.log)
//   .catch(error => console.error("Fallo: " + error));

const promises = [
  Promise.reject("First promise"),
  Promise.reject("Second promise"),
  Promise.reject("Third promise"),
  Promise.resolve("Fourty promise"),
  Promise.reject("Fourty promise"),
];

// Promise.all: retorna una promesa si todas fueron completadas con exito

// Promise.all(promises)
//   .then(data => console.log(data));

// Promise.any: Si alguna tiene exito, te retorna el resultado.
// Promise.any(promises)
//   .then(data => console.log(data));



// Promise.allSettled(promises)
//   .then(console.log)

Promise.race(promises)
  .then(console.log)
  .catch(console.error);
