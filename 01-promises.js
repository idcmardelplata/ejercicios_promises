import { readFile } from "fs";

const log = data => {
  console.log(data);
  return data;
}


function read(path) {
  return new Promise(
    (resolve, reject) => {

      readFile(path, (error, result) => {
        if (error) reject(error);
        resolve(result);
      })
    })
};


read("./01-promises.js")
  .then(data => data.toString())
  .then(log)
  .catch(error => console.error("Paso un error " + error))
