import axios from "axios";

const API_URL = "http://localhost:3000"


const axiosInstance = axios.create({
    withCredentials:  true,
    baseURL: API_URL
});

export default axiosInstance;

