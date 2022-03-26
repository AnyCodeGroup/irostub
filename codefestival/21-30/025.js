const fs = require("fs");
const path = require("path");
const sourceFilename = __filename.substring(
  __filename.lastIndexOf("/"),
  __filename.lastIndexOf(".js")
);
const input = fs
  .readFileSync(path.join(__dirname, `./testcase/${sourceFilename}`))
  .map((arg) => parseInt(arg));

function calcArea(radius) {
  return radius * radius * 3.14;
}

console.log(calcArea(input));
