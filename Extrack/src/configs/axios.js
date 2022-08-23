import axios from "axios";

const API_URL = "https://backend-chi-one.vercel.app"


const axiosInstance = axios.create({
    withCredentials:  true,
    baseURL: API_URL
});

export default axiosInstance;

