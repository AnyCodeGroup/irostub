const fs = require("fs");
const path = require("path");
const sourceFilename = __filename.substring(
  __filename.lastIndexOf("/"),
  __filename.lastIndexOf(".js")
);
const input = fs
  .readFileSync(path.join(__dirname, `./testcase/${sourceFilename}`))
  .toString()
  .split(" ")
  .map((attr) => parseInt(attr));

console.log(Math.floor((input[0] + input[1] + input[2]) / 3));
