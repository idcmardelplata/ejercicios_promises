import { readFile } from "fs";


const read = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, (error, data) => {
      if (error) reject(error);
      resolve(data);
    })
  })
}

read("./02-async-await.js")
  .then(data => data.toString())
  .then(data => data.toUpperCase())
  .then(console.log);
