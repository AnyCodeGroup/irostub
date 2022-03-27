const fs = require("fs");
const path = require("path");
const sourceFilename = __filename.substring(
  __filename.lastIndexOf("/"),
  __filename.lastIndexOf(".js")
);
const input = fs
  .readFileSync(path.join(__dirname, `./testcase/${sourceFilename}`))
  .toString()
  .split("\n")
  .map((arg) => arg.split(" "));

const student = {};
for (let i = 0; i < input[0].length; i++) {
  student[input[0][i].toString()] = parseInt(input[1][i]);
}
console.log(student);
