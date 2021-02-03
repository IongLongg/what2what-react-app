import { MDBNavbar } from "mdbreact";
import React from "react";

const Footer = () => {
  return (
    <MDBNavbar className="py-3">
      <div className="w-100 text-center">
        &copy;{` ${new Date().getFullYear()} Copyright:`}
        <a href="https://github.com/IongLongg/"> IongLongg </a>
      </div>
    </MDBNavbar>
  );
};

export default Footer;
