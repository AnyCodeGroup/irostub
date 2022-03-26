const fs = require("fs");
const path = require("path");
const input = fs
  .readFileSync(path.join(__dirname, `./testcase/010`))
  .toString()
  .trim(" ");
