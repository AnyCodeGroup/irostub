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

const num = parseInt(input);

for (let i = 0; i < num; i++) {
  for (let j = num - 1; j > i; j--) {
    process.stdout.write(" ");
  }
  for (let j = 0; j < i * 2 + 1; j++) {
    process.stdout.write("*");
  }
  process.stdout.write("\n");
}
