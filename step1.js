"use strict";

const fsP = require("fs/promises");
const process = require("process");

const filePath = process.argv[2];

/**takes a file path and print the path file or error
 */
async function cat(path) {

  try {
    const data = await fsP.readFile(`${path}`, 'utf8');
    console.log(data);

  } catch (err) {
    console.log(err);
    process.exit(0);
  }
}

cat(filePath);

// module.exports = {
//   cat
// };
