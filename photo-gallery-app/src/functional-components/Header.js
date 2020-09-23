import React, {useEffect} from "react";
const Header = (props) => {
  // this.state = {
  //   isLoggedIn: false
  // };

  // useEffect(() => {
  //   console.log(localStorage.getItem("token"));
  // }, [])

  return (
    <nav className="navbar navbar-expand-lg navbar-dark info-color">
      <a className="navbar-brand" href="#">Photo Gallery</a>
      <div className="collapse navbar-collapse" id="navbarSupportedContent-4">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="#/login">
            <i class="fas fa-sign-in-alt"></i> Login
              <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/login">
            <i class="fas fa-sign-out-alt"></i> Logout
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Header;
