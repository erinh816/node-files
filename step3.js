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
  // console.log(data);
  return data;
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

  // console.log(text);
  return text;
}

async function writeOutput(outputFile, content) {
  try {
    await fsP.writeFile(outputFile, content, "utf8");

  } catch (err) {
    console.error(err);
    process.exit(1);
  }
  console.log('Successfullly wrote');
}


if (path === "--out") {
  try {
    const targetFile = process.argv[3];
    const readFile = process.argv[4];
    writeOutput(targetFile, cat(readFile));
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
} else {
  try {
    new URL(path);
    console.log(webCat(path));
  } catch (err) {
    console.log(cat(path));
  }
}
