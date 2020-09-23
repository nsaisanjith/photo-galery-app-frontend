import React, {useState} from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
 MDBIcon } from "mdbreact";
import { HashRouter as Router } from 'react-router-dom';

const Header = (props) => {

  const [ isOpen, setIsOpen ] = useState(false);
  
  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  }

  return (
    <MDBNavbar color="info-color" dark expand="md">
      <MDBNavbarBrand>
        <strong className="white-text">Photo Gallery</strong>
      </MDBNavbarBrand>
      <MDBNavbarToggler onClick={toggleCollapse} />
      <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
        <MDBNavbarNav right>
          <MDBNavItem>
            <MDBNavLink to="/login"><MDBIcon icon="fas fa-sign-in-alt" /> login</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to="/login"><MDBIcon icon="fas fa-sign-out-alt" /> logout</MDBNavLink>
          </MDBNavItem>
        </MDBNavbarNav>
      </MDBCollapse>
    </MDBNavbar>

    // <nav className="navbar fixed-top navbar-expand-lg navbar-dark indigo">
    //   <a className="navbar-brand" href="#">Photo Gallery</a>
    //   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
    //   aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    //   <span className="navbar-toggler-icon"></span>
    // </button>
    // <div className="collapse navbar-collapse" data-id="navbarSupportedContent">
    //   <ul className="navbar-nav mr-auto">
    //     <li className="nav-item active">
    //       <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
    //     </li>
    //     <li className="nav-item">
    //       <a className="nav-link" href="#">Link</a>
    //     </li>
    //     <li className="nav-item">
    //       <a className="nav-link" href="#">Profile</a>
    //     </li>
    //   </ul>
    // </div>
        /* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link" href="#/login">
            <i className="fas fa-sign-in-alt"></i> Login
              <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/login">
            <i className="fas fa-sign-out-alt"></i> Logout
            </a>
          </li>
        </ul>
      </div> */
    // </nav>
  );
};
export default Header;
