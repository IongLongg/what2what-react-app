import { MDBContainer, MDBFormInline, MDBIcon } from "mdbreact";
import React, { useState, useRef } from "react";
import PropTypes from "prop-types";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const typingTimeoutRef = useRef(null);

  const handleChange = (e) => {
    let term = e.target.value;
    setSearchTerm(term);

    if (!onSearch) return;

    // debounce 0.5s
    typingTimeoutRef.current && clearTimeout(typingTimeoutRef.current);

    typingTimeoutRef.current = setTimeout(() => {
      onSearch(term);
    }, 1000);
  };

  return (
    <MDBContainer breakpoint="xxl">
      <MDBFormInline className="md-form justify-content-center">
        <MDBIcon icon="search" size="2x" />
        <input
          className="form-control form-control-sm ml-3 w-75"
          type="text"
          placeholder="Search"
          aria-label="Search"
          onChange={handleChange}
          value={searchTerm}
        />
      </MDBFormInline>
    </MDBContainer>
  );
};

SearchBar.propTypes = {
  onSearch: PropTypes.func,
};

export default SearchBar;
