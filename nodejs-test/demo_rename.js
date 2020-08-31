var fs = require("fs");

fs.rename("mynewfile3.txt", "renamus_maximus.txt", function (err) {
  if (err) throw err;
  console.log("Renamed!");
});
