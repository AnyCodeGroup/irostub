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

function pow(x, y) {
  if (y == 0) {
    return 1;
  }
  return x * pow(x, y - 1);
}

console.log(pow(input[0], input[1]));
