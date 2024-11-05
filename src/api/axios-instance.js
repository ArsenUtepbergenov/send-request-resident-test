import axios from "axios"

export const API_URL = `https://httpbin.org/post`

const api = axios.create({
  baseURL: API_URL,
  withCredentials: false,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
})

export default api
