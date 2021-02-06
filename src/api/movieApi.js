import axiosClient from "./axiosClient";

const movieApi = {
  getPopular: (params) => {
    const url = "/movie/popular";
    return axiosClient.get(url, { params }); // destructuring
  },
  searchMovie: (params) => {
    const url = "/search/movie";
    return axiosClient.get(url, { params });
  },
};

export default movieApi;
