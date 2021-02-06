import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MDBIcon } from "mdbreact";
import MovieList from "../components/MovieList";
import LoadMoreButton from "../../../components/LoadMoreButton";
import { fetchPopularMovies, selectAllMovies, setPage } from "../movieSlice";
import SpinnerPage from "../../../components/SpinnerPage";

const HomePage = () => {
  const dispatch = useDispatch();
  const movies = useSelector(selectAllMovies);
  const { error, page, status } = useSelector((state) => state.movie);

  useEffect(() => {
    if (status === "idle") {
      let params = {
        language: "en-US",
        page,
      };
      dispatch(fetchPopularMovies(params));
    }
  }, [dispatch, status, page]);

  const handleOnLoadMore = () => {
    let params = {
      language: "en-US",
      page: page + 1,
    };
    dispatch(fetchPopularMovies(params));
    dispatch(setPage(page + 1));
  };

  let content;

  if (status === "loading") {
    content = <SpinnerPage />;
  } else if (status === "failed") {
    content = <div>{error}</div>;
  } else if (status === "succeeded") {
    content = <MovieList list={movies} />;
  }

  return (
    <>
      <h2 className="my-3">
        <MDBIcon icon="imdb" fab className="mr-2" />
        Top popular movie
      </h2>
      {content}
      <LoadMoreButton onLoadMore={handleOnLoadMore} />
    </>
  );
};

export default HomePage;
