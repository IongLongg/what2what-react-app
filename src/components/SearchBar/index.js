import { MDBContainer, MDBFormInline, MDBIcon } from "mdbreact";
import React, { useRef, useState } from "react";
import PropTypes from 'prop-types'

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const typingTimeoutRef = useRef(null);

  const handleSearchInput = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    if (!onSearch) return;

    // debounce 0.5s
    typingTimeoutRef.current && clearTimeout(typingTimeoutRef.current);

    typingTimeoutRef.current = setTimeout(() => {
      onSearch(term);
    }, 500);
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
          onChange={handleSearchInput}
          value={searchTerm}
        />
      </MDBFormInline>
    </MDBContainer>
  );
};

SearchBar.propTypes = {
    onSearch : PropTypes.func
}

export default SearchBar;
