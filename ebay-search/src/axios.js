import axios from "axios";
const data =
  '<?xml version="1.0" encoding="utf-8"?>\n<GetItemRequest xmlns="urn:ebay:apis:eBLBaseComponents">    \n	<ErrorLanguage>en_US</ErrorLanguage>\n	<WarningLevel>High</WarningLevel>\n      <!--Enter an ItemID-->\n  <ItemID>353062750796</ItemID>\n</GetItemRequest>\n';
const token =
  "v^1.1#i^1#I^3#p^3#r^0#f^0#t^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";

const instance = axios.create({
  method: "post",
  url: "https://api.ebay.com/ws/api.dll",
  headers: {
    "X-EBAY-API-SITEID": "0",
    "X-EBAY-API-COMPATIBILITY-LEVEL": "967",
    "X-EBAY-API-CALL-NAME": "GetItem",
    "X-EBAY-API-IAF-TOKEN": token,
    "Content-Type": "text/plain",
  },
  data: data,
});

//instance.get("?q=<term>");

export default instance;
