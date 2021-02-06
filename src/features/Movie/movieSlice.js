import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../api/movieApi";

const initialState = {
  page: 1,
  results: [],
  status: "idle",
  error: null,
  query: "",
};

export const fetchPopularMovies = createAsyncThunk(
  "movie/fetchPopularMovies",
  async (params) => {
    // const params = { language: "en-US", page: page };
    const response = await movieApi.getPopular(params);
    return response;
  }
);

export const fetchSearchingMovies = createAsyncThunk(
  "movie/fetchSearchingMovies",
  async (params) => {
    // const params = { language: "en-US", query: query };
    const response = await movieApi.searchMovie(params);
    console.log(response, params);
    return response;
  }
);

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
      state.status = "succeeded";
    },
    loadQuery: (state, action) => {
      state.query = action.payload;
    },
  },
  extraReducers: {
    [fetchPopularMovies.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchPopularMovies.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.page = action.payload.page;
      state.results = [...state.results, ...action.payload.results];
    },
    [fetchPopularMovies.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
    [fetchSearchingMovies.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchSearchingMovies.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.page = action.payload.page;
      state.results = [...action.payload.results];
    },
    [fetchSearchingMovies.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export const { setPage, loadQuery } = movieSlice.actions;

export default movieSlice.reducer;

export const selectAllMovies = (state) => state.movie.results;

// export const selectMovieById = (state, movieId) =>
//   state.movies.find((movie) => movie.id === movieId);
