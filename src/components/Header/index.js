import {
    MDBNavbar,
    MDBNavbarBrand,
  } from "mdbreact";
  import React from "react";
  
  const Header = () => {
    return (
      <MDBNavbar sticky="top" color="unique-color-dark" dark>
        <MDBNavbarBrand>
          <img
            src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
            height="30"
            alt=""
          />
        </MDBNavbarBrand>
      </MDBNavbar>
    );
  };
  
  export default Header;