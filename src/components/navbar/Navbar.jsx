import React, { useState } from "react";
import logo from "../../assets/dlogo.png";
import openMenu from "../../assets/menu_open_black_24dp.svg";
import closeMenu from "../../assets/close_black_24dp.svg";
import "./navbar.css";
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="navbar section__padding">
      <div className="navbar__logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="navabr__links-container">
        <p>
          <a href="#services">Services</a>
        </p>
        <div />
        <p>
          <a href="#home">Works</a>
        </p>
        <div />
        <p>
          <a href="#home">Blog</a>
        </p>
      </div>
      <div className="navabr__hire">
        <button>Hire me</button>
      </div>

      {toggleMenu ? (
        <div className="navabr__toggle">
          <img
            src={closeMenu}
            alt="close"
            onClick={() => {
              setToggleMenu(false);
            }}
          />
        </div>
      ) : (
        <div className="navabr__toggle">
          <img
            src={openMenu}
            alt="open"
            onClick={() => {
              setToggleMenu(true);
            }}
          />
        </div>
      )}
      {toggleMenu && (
        <div className="navabr__menu-container scale-up-center">
          <p>
            <a href="#services">Services</a>
          </p>
          <div />
          <p>
            <a href="#home">Works</a>
          </p>
          <div />
          <p>
            <a href="#home">Blog</a>
          </p>
        </div>
      )}
    </div>
  );
};

export default Navbar;
