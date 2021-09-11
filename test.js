const fs = require("fs");
const path = require("path");

// Write text to file
let fileName = `testFile.md`;
const dirPath = path.join(__dirname, "/");

fs.writeFile(`${dirPath}/${fileName}`, "hello world", function err(e) {
  if (e) throw e;
});
