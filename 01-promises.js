/*
 * Pending.
 * fullfiled
 * rejected
 */

const promise = new Promise(
  (resolve) => {
    setTimeout(() => {
      resolve("Primer resultado");
    }, 4000)
  });

promise.then((resultado) => {
  console.log(resultado);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(resultado + " procesado");
    }, 500)
  });
})
  .then(console.log)
  .catch(console.error);

