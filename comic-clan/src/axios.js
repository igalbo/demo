import axios from "axios";

const instance = axios.create({
  baseURL: "https://comicclan.vett.io/comics",
  headers: { Authorization: "Bearer ComicClanVettIO2019" },
});

//instance.get("?q=<term>");

export default instance;
