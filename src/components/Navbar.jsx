import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  // Use Link tag from react-router-dom to prevent default action from anchor tag.
  // Provides declarative, accessible navigation around your application.
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  return (
    <nav>
      <NavLink className="logo" to="/">
        Brand-Logo
      </NavLink>
      <div className="nav-links">
        <NavLink activeClassName="selectedPage" className="link" to="/about">
          About
        </NavLink>
        <NavLink activeClassName="selectedPage" className="link" to="/contact">
          Contact
        </NavLink>
        <NavLink activeClassName="selectedPage" className="link" to="/blog">
          Blog
        </NavLink>
        <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
          {isLoggedIn ? "Logout" : "Login"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
