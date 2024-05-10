import axios from 'axios';

const API = axios.create({
  baseURL: process.env.REACT_APP_CHATGPT_CLONE_BE_URL
});

export default API;