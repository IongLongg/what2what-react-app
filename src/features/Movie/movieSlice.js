import { 
  createSlice, 
  createAsyncThunk,
} from "@reduxjs/toolkit";
import movieApi from '../../api/movieApi'

const initialState = {
  page: 1,
  results: [],
  status: "idle",
  error: null,
};

export const fetchPopularMovies = createAsyncThunk(
  "movie/fetchPopularMovies",
  async (page) => {
    const params = { language: 'en-US', page: page };
    const response = await movieApi.getPopular(params);
    return response; 
  }
);

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    loadMore: (state, action) => {
      state.page += 1;
      state.status = 'succeeded';
    },
  },
  extraReducers: {
    [fetchPopularMovies.pending]: (state, action) => {
      state.status = 'loading';
    },
    [fetchPopularMovies.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.page = action.payload.page;
      state.results = [...state.results,...action.payload.results];
    },
    [fetchPopularMovies.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    }
  }
});

export const { loadMore, } = movieSlice.actions;

export default movieSlice.reducer;

export const selectAllMovies = (state) => state.movie.results;

// export const selectMovieById = (state, movieId) =>
//   state.movies.find((movie) => movie.id === movieId);
