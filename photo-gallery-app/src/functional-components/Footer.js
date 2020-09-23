import React from "react";
import { MDBContainer, MDBFooter } from "mdbreact";
const Footer = () => {
  return (
    <MDBFooter color="blue" className="font-small mt-4">
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          Created with &#9829; by Sai Sanjith
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};
export default Footer;

