import {
  MDBCard,
  MDBView,
  MDBMask,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBIcon,
  MDBBtn,
} from "mdbreact";
import React from "react";
import PropTypes from "prop-types";

const MovieCard = ({ poster_path, title, release_date, vote_average }) => {
  return (
    <MDBCard className="mb-4">
      <MDBView hover>
        <MDBCardImage
          src={`${process.env.REACT_APP_IMG_BASE_URL + poster_path}`}
          className="img-fluid"
          alt={poster_path}
        />

        <MDBMask className="flex-center" overlay="white-light">
          <MDBBtn gradient="blue">
            See more
            <MDBIcon icon="angle-double-right" className="ml-2 white-text" />
          </MDBBtn>
        </MDBMask>
      </MDBView>
      <MDBCardBody>
        <MDBCardTitle>{title}</MDBCardTitle>
        <MDBCardText>
          {release_date}
          <RatingStar rate={vote_average} />
        </MDBCardText>
      </MDBCardBody>
    </MDBCard>
  );
};

const RatingStar = ({ rate }) => (
  <span className="float-right mx-2">
    <MDBIcon
      icon="star"
      className={`mr-1 ${rate > 7 ? "green" : "amber"}-text`}
    />
    {rate}
  </span>
);

MovieCard.propTypes = {
  title: PropTypes.string,
  id: PropTypes.number,
  poster_path: PropTypes.string,
  release_date: PropTypes.string,
  vote_average: PropTypes.number,
};

export default MovieCard;
