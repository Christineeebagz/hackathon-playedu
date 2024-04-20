import React from "react";
import "./NavBar.css";

const Navbar = () => {
  return (
    <div id="navbar">
      <nav className=" bg-body-tertiary">
        <div id="container">
          <a className="navbar-brand" href="#">
            <img
              src="public/playedu.svg"
              alt="Bootstrap"
              width="100"
              height="40"
            />
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
