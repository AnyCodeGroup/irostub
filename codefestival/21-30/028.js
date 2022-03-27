const fs = require("fs");
const path = require("path");
const sourceFilename = __filename.substring(
  __filename.lastIndexOf("/"),
  __filename.lastIndexOf(".js")
);
const input = fs
  .readFileSync(path.join(__dirname, `./testcase/${sourceFilename}`))
  .toString();

for (let i = 0; i < input.length - 1; i++) {
  console.log(input[i] + " " + input[i + 1]);
}
