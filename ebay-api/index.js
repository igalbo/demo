const express = require("express");
const app = express();
const port = 3010;
const testReq = require("./request.js");

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/", (req, res) => {
  async function fetchData() {
    const response = await testReq.get("https://api.ebay.com/ws/api.dll");
    return response.data;
  }

  const result = fetchData()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => console.log(err));
  console.log(result);

  // res.send(result);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
