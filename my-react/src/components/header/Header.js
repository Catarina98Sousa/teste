import "./header.css";
import "../button/button.css";
import { Logo, LogoDark } from "../../images/icon/logo";
import { Moon, Sun } from "../../images/icon/menu/swicth";
import React, { useState } from "react";

function Header(props) {
  /* scroll change bg */
  const [header, setHeader] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 300) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  /* menu bar */
  const [active, setActive] = useState("nav-menu");
  const [togglerIcon, setTogglerIcon] = useState("nav-toggler");

  const navToggle = () => {
    active === "nav-menu"
      ? setActive("nav-menu nav-active")
      : setActive("nav-menu");

    //toggler animation close

    togglerIcon === "nav-toggler"
      ? setTogglerIcon("nav-toggler toggle")
      : setTogglerIcon("nav-toggler");
  };

  return (
    <header className={header ? "header active" : "header"}>
      <div className="nav">
        <a href="#home" className="logo">
          <img src={props.theme === "light" ? Logo : LogoDark} alt="" />
        </a>
        <div className="menu">
          <ul className={active}>
            <li className="nav-item">
              <a href="#home" className="nav-item">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-item">
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="#skill" className="nav-item">
                Skill
              </a>
            </li>
            <li className="nav-item">
              <a href="#projects" className="nav-item">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-item">
                Contact
              </a>
            </li>
          </ul>
          <button className="swicth-btn" onClick={props.handleThemeChange}>
            <img
              src={props.theme === "light" ? Moon : Sun}
              className="icon-switch"
              alt=""
            />
          </button>

          <div onClick={navToggle} className={togglerIcon}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
