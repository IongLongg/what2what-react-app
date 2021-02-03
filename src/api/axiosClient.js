import axios from "axios";
import queryString from "query-string";

const axiosClient = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        'content-type': 'application/json'
    },
    params: {
        api_key : process.env.REACT_APP_API_KEY
    },
    paramsSerializer: params => queryString.stringify(params),
})

axiosClient.interceptors.request.use(async config => {
    // handle token

    return config
})

axiosClient.interceptors.response.use(response => {
    if(response && response.data){
        return response.data
    }
    return response;
}, error => {
    throw error;
})

export default axiosClient