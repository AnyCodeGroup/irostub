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

const map = new Map([
  [1, "수성"],
  [2, "금성"],
  [3, "지구"],
  [4, "화성"],
  [5, "목성"],
  [6, "토성"],
  [7, "천왕성"],
  [8, "해왕성"],
]);

console.log(map.get(parseInt(input)));
