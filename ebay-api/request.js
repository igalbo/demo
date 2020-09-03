var axios = require("axios");
var data =
  '<?xml version="1.0" encoding="utf-8"?>\n<GetItemRequest xmlns="urn:ebay:apis:eBLBaseComponents">\n<ErrorLanguage>en_US</ErrorLanguage>\n<WarningLevel>High</WarningLevel>\n<!--Enter an ItemID-->\n<ItemID>353062750796</ItemID>\n</GetItemRequest>\n';

var config = {
  method: "post",
  url: "https://api.ebay.com/ws/api.dll",
  headers: {
    "X-EBAY-API-SITEID": "0",
    "X-EBAY-API-COMPATIBILITY-LEVEL": "967",
    "X-EBAY-API-CALL-NAME": "GetItem",
    "X-EBAY-API-IAF-TOKEN":
      "v^1.1#i^1#r^0#p^3#f^0#I^3#t^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",
    "Content-Type": "text/plain",
  },
  data: data,
};

axios(config)
  .then(function (response) {
    console.log(response.data);
    return response;
  })
  .catch(function (error) {
    console.log(error);
  });

module.exports = axios;
