import axiosClient from "./axiosClient";

const movieApi = {
    getPopular : (params) => {
        const url = '/popular';
        return axiosClient.get(url, { params }); // destructuring
    }
}


export default movieApi;