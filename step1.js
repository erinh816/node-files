"use strict";

const fsP = require("fs/promises");

const filePath = process.argv[2];

/**takes a file path and print the path file or error
 */
async function cat(path) {

  let data;
  try {
    data = await fsP.readFile(`${path}`, 'utf8');
  } catch (err) {
    console.log(err);
    process.exit(0); // pass 1 for errors
  }

  console.log(data);
}

cat(filePath);
