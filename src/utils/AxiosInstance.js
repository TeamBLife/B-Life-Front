import axios from "axios";

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

export default axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});