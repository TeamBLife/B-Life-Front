import axios from "axios";
import https from 'node:https'



export default axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  httpsAgent: new https.Agent({
    rejectUnauthorized: false,
  }),
});