import axios from "axios";

const HttpClient = axios.create({
  baseURL: "https://fakestoreapi.com/",

  // baseURL: 'http://localhost:4000/'
});

export default HttpClient;
