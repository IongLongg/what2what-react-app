import React from "react";
import PropTypes from "prop-types";
import { MDBCol, MDBRow } from "mdbreact";
import MovieCard from "./MovieCard";

const MovieList = ({ list }) => {
  return (
    <MDBRow>
      {list.map((movie) => (
        <MDBCol key={movie.id} sm="6" md="4" lg="3">
          <MovieCard
            poster_path={movie.poster_path}
            title={movie.title}
            vote_average={movie.vote_average}
            release_date={movie.release_date}
          />
        </MDBCol>
      ))}
    </MDBRow>
  );
};

MovieList.propTypes = {
  list: PropTypes.array,
};

export default MovieList;
