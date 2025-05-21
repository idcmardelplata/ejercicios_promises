import { readFile } from "fs";


const read = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, (error, data) => {
      if (error) reject(error);
      resolve(data);
    })
  })
}


const result = await read("./02-async-await.js")

async function out(lapse) {
  setTimeout(() => {
    console.log("tIEMPO dado");
  }, lapse)
};


Promise.all([read("./01-promises.js")]).then(data => data.toString()).then(console.log)




