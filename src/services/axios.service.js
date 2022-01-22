import axios from "axios";
import baseURL from "../configs/urls";

const axiosService = axios.create({ // axios instance - екземпляр класу axios
    baseURL
    // baseURL:baseURL - key and value are the same
})

export default axiosService;