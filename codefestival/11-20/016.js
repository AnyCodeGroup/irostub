const fs = require("fs");
const path = require("path");
const sourceFilename = __filename.substring(
  __filename.lastIndexOf("/"),
  __filename.lastIndexOf(".js")
);
const input = fs
  .readFileSync(path.join(__dirname, `./testcase/${sourceFilename}`))
  .toString()
  .trim(" ");

for (let i = input.length - 1; i >= 0; i--) {
  process.stdout.write(input[i]);
}
