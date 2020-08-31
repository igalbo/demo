var fs = require("fs");

fs.writeFile("mynewfile3.txt", "Hello contentious!", function (err) {
  if (err) throw err;
  console.log("Haha, saved!");
});
