import { MDBRow, MDBCol, MDBBtn } from "mdbreact";
import React from "react";
import PropsType from 'prop-types'

const LoadMoreButton = ({onLoadMore}) => {
  return (
    <MDBRow>
      <MDBCol className="text-center" color="mdb-color" size="lg">
        <MDBBtn
          className="my-3"
          color="mdb-color"
          size="lg"
          onClick={onLoadMore}
        >
          Load More
        </MDBBtn>
      </MDBCol>
    </MDBRow>
  );
};

LoadMoreButton.propsType = {
  onLoadMore: PropsType.func
}

export default LoadMoreButton;
