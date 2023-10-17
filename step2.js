"use strict";

const fsP = require("fs/promises");
const path = process.argv[2];

/**takes a file path and print the path file or error
 */
async function cat(path) {
  let data;
  try {
    data = await fsP.readFile(`${path}`, 'utf8');
  } catch (err) {
    console.log(err);
    process.exit(0);
  }
  console.log(data);
}

async function webCat(url) {
  let text;
  try {
    const data = await fetch(url);
    text = await data.text();

  }
  catch (err) {
    console.log(err);
  }

  console.log(text);
}

try {
  new URL(path);
  webCat(path);
} catch(err) {
  cat(path);
}