
import axios from "axios";

// http://10.10.1.17:3333 /create
export const api = axios.create({
  baseURL: "http://10.10.1.17:3333"
})