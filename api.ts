import axios from "axios";
const apiUrl = axios.create({
  baseURL: "http://api-gma.unicorn-tutorials.com/api",
 
  // baseURL: "http://127.0.0.1:8000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiUrl;
