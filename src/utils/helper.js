import axios from "axios";

const axiosCat = axios.create({
  baseURL: process.env.NEXT_PUBLIC_CATEGORY_URL,
  withCredentials:true
});

export default axiosCat
