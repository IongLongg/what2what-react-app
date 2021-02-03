import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import SearchBar from '../../components/SearchBar'
import MovieList from "../../features/Movie/components/MovieList";
import { MDBBtn, MDBCol, MDBContainer, MDBIcon, MDBRow } from "mdbreact";
import movieApi from "../../api/movieApi";

const HomePage = (props) => {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const fetchMovieList = async () => {
      try {
        const params = { language : 'en-US', page: 1 };
        const response = await movieApi.getPopular(params);
        console.log("Fetching successful", response);

        setMovieList(response.results);
      } catch (error) {
        console.log("Fetching failed", error)
      }
    }
    fetchMovieList();
  }, [])

  const handleOnSearch = (searchTerm) => {
    console.log(searchTerm);
  };

  const handleOnLoadMore = () => {
    console.log("Loading");
  }

  return (
    <MDBContainer breakpoint="xxl">
      <SearchBar onSearch={handleOnSearch} />
      <h2 className="my-2">
        <MDBIcon icon="imdb" fab className="mr-2" />
        Top popular movie
      </h2>
      <MovieList list={movieList} />
      <MDBRow>
        <MDBCol className="text-center" color="mdb-color" size="lg">
          <MDBBtn
            className="my-3"
            color="mdb-color"
            size="lg"
            onClick={handleOnLoadMore}
          >
            Load More
          </MDBBtn>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

HomePage.propTypes = {};

export default HomePage;
