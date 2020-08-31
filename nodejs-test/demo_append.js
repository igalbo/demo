var fs = require("fs");

fs.appendFile("mynewfile1.txt", "a little bit more! ", function (err) {
  if (err) throw err;
  console.log("Updated!");
});
