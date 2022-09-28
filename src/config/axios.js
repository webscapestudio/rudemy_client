import axios from "axios"

const axiosInstance = axios.create({
  baseURL: "http://localhost:8000",
})

axiosInstance.interceptors.request.use((config) => {
  config.headers.Authorization = window.localStorage.getItem("token")
  return config
})

export default axiosInstance
