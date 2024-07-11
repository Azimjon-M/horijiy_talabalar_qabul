import axios from "axios";
import { useNavigate } from "react-router-dom";

const axiosInstance = axios.create({
    baseURL: "https://qabul.pythonanywhere.com/",
    headers: {
        // "Content-Type": "multipart/form-data",
        "Content-Type": "multipart/form-data",
        
        // Accept: "aplication/json",
    },
});

axiosInstance.interceptors.request.use(async (req) => {
    const token = localStorage.getItem("token");
    if (token) {
        req.headers.Authorization = `Bearer ${token}`;
    }
    return req;
});

axiosInstance.interceptors.response.use(
    async (res) => {
        return res;
    },
    (err) => {
        const navigate = useNavigate();
        if (err?.response?.status === 401) {
            navigate("/login");
        }
    }
);

export default axiosInstance;
