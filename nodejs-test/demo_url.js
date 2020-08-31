var url = require("url");
var address = "http://localhost:8080/default.htm?year=2017&month=february";
var q = url.parse(address, true);

console.log(q.host);
console.log(q.pathname);
console.log(q.search);

var qdata = q.query;
console.log(qdata.month);
