import axios from "axios";

const kthulu = axios.create({
  method: "get",
  url: "http://localhost:3010",
});

export default kthulu;
