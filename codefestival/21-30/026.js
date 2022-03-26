const fs = require("fs");
const path = require("path");
const sourceFilename = __filename.substring(
  __filename.lastIndexOf("/"),
  __filename.lastIndexOf(".js")
);
const input = fs
  .readFileSync(path.join(__dirname, `./testcase/${sourceFilename}`))
  .toString()
  .trim();

const x = new Map([
  ["수성", "Mercury"],
  ["금성", "Venus"],
  ["지구", "Earth"],
  ["화성", "Mars"],
  ["목성", "Jupiter"],
  ["토성", "Saturn"],
  ["천왕성", "Uranus"],
  ["해왕성", "Neptune"],
]);

console.log(x.get(input));
