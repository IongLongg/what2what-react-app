import React from "react";
import PropTypes from "prop-types";

const SearchPage = ({ title }) => {
  return (
    <>
      <h2 className="my-3">Results for {title}</h2>
    </>
  );
};

SearchPage.propTypes = {
  title: PropTypes.string,
};

export default SearchPage;
