import axios from "axios";

const API = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5",
  params: {
    lang: "Portuguese - pt",
    units: "metric",
    q: null,
    appid: "b1398e81950c8225db4896322b47cf6f",
  }
});

export default API;
