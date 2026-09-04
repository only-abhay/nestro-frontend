import axios from "axios";

const axiosCat = axios.create({
  baseURL:
    typeof window === "undefined"
      ? process.env.NEXT_PUBLIC_CATEGORY_URL
      : "/api",
  withCredentials: true,
});

export default axiosCat
