import { NavLink } from "react-router-dom";
import React from "react";
import classes from "../css/title.module.css";

const Navbar = () => {
  return (
    <nav className={classes.Navbar}>
      <NavLink
        className={classes.NavLink}
        to="/login"
        activeStyle={{
          fontWeight: "bold",
          color: "red",
        }}>
        Login
      </NavLink>
    </nav>
  );
};
export default Navbar;
