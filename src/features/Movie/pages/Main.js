import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MDBContainer, MDBIcon } from "mdbreact";
import MovieList from "../components/MovieList";
import SearchBar from "../../../components/SearchBar";
import LoadMoreButton from "../../../components/LoadMoreButton";
import { fetchPopularMovies, selectAllMovies, loadMore, } from "../movieSlice";
import SpinnerPage from "../../../components/SpinnerPage";

const Main = () => {
  const dispatch = useDispatch();
  const movies = useSelector(selectAllMovies);
  const {error, page, status} = useSelector(state => state.movie);
  
  useEffect(() => {
    if(status === "idle") {
      dispatch(fetchPopularMovies(page));
    }
  }, [status, dispatch]);

  const handleOnSearch = () => {};
  const handleOnLoadPage = () => {
    dispatch(fetchPopularMovies(page+1));
    dispatch(loadMore());
    console.log(page)
  };

  let content;

  if(status === 'loading'){
    content = <SpinnerPage/>
  } else if(status === 'failed'){
    content = <div>{error}</div>
  } else if(status === 'succeeded'){
    content = <MovieList list={movies}/>
  }

  return (
    <MDBContainer breakpoint="xxl">
      <SearchBar onSearch={handleOnSearch} />
      <h2 className="my-2">
        <MDBIcon icon="imdb" fab className="mr-2" />
        Top popular movie
      </h2>
      {content}
      <LoadMoreButton onLoadMore={handleOnLoadPage} />
    </MDBContainer>
  );
};

export default Main;
