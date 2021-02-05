import {
  MDBCollapse,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavbarToggler,
    MDBNavItem,
    MDBNavLink,
  } from "mdbreact";
  import React, { useState } from "react";
  
  const Header = () => {
    const [collapseId, setCollapseId] = useState('navbarCollapse3');

    const handleToggler = (collapseId) => {
      setCollapseId(collapseId ? '' : 'navbarCollapse3');
    }

    return (
      <MDBNavbar sticky="top" color="unique-color-dark" dark expand='lg'>
        <MDBNavbarBrand>
          <img
            src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
            height="30"
            alt=""
          />
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={() => handleToggler(collapseId)}/>
        <MDBCollapse id={collapseId} isOpen={collapseId} navbar>
          <MDBNavbarNav left>
            <MDBNavItem>
              <MDBNavLink to="/">Home</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/profile">Profile</MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    );
  };
  
  export default Header;