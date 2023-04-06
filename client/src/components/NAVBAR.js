import { NavLink } from "react-router-dom";
import "../styles/nav.css";

import AnchorLink from "react-anchor-link-smooth-scroll";
import logo from "../assets/images/logo.jpeg";
import "../styles/styles.css";
import "../styles/nav.css";

import NavDropdown from "react-bootstrap/NavDropdown";

export default function (props) {
  return (
    <>
      <header className="header" data-section-theme="dark" id="top">
        <div className="container">
          <div className="header-container">
            <div className="header-logo">
              <NavLink to="#top">
                <img
                  src={logo}
                  style={{ width: "160px", height: "40px" }}
                  alt="LOGO"
                />
              </NavLink>
            </div>
            <input type="checkbox" className="menu-btn" id="menu-btn" />
            <label htmlFor="menu-btn" className="menu-icon">
              <span className="navicon"></span>
            </label>
            <nav className="navbar-menu">
              <ul className="nav">
                <li className="nav-item">
                  <AnchorLink href="#top" style={{ textDecoration: "none" }}>
                    Home
                  </AnchorLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/services"
                    style={{ textDecoration: "none" }}
                  >
                    Services
                  </NavLink>
                </li>
                <li className="nav-item">
                  <AnchorLink href="#works" style={{ textDecoration: "none" }}>
                    Works
                  </AnchorLink>
                </li>
                <li className="nav-item">
                  <AnchorLink href="#about" style={{ textDecoration: "none" }}>
                    About
                  </AnchorLink>
                </li>
                <li className="nav-item">
                  <AnchorLink
                    href="#latest_news"
                    style={{ textDecoration: "none" }}
                  >
                    Latestnews
                  </AnchorLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="testimonial"
                    style={{ textDecoration: "none" }}
                  >
                    Testimonials
                  </NavLink>
                </li>
                <li className="nav-item">
                  <AnchorLink
                    href="#contact"
                    style={{ textDecoration: "none" }}
                  >
                    Contact
                  </AnchorLink>
                </li>
                <li className="nav-item">
                  <NavDropdown title="Login"></NavDropdown>
                  <NavDropdown.Item href="login/patient-login">
                    Patient Login
                  </NavDropdown.Item>
                  <NavDropdown.Item href="login/staff-login">
                    Staff Login
                  </NavDropdown.Item>
                </li>
                <li className="nav-item">
                  <form action="" method="post" className="form-search">
                    <input
                      type="search"
                      name="q"
                      id="search-input"
                      placeholder="Search..."
                      aria-label="Search through site content"
                    />
                    <button className="search-button">
                      <svg
                        viewBox="0 0 512 512"
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        className="search-icon"
                      >
                        <title>Search icon</title>
                        <path d="M508.5 468.9L387.1 347.5c-2.3-2.3-5.3-3.5-8.5-3.5h-13.2c31.5-36.5 50.6-84 50.6-136C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c52 0 99.5-19.1 136-50.6v13.2c0 3.2 1.3 6.2 3.5 8.5l121.4 121.4c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17zM208 368c-88.4 0-160-71.6-160-160S119.6 48 208 48s160 71.6 160 160-71.6 160-160 160z"></path>
                      </svg>
                    </button>
                  </form>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
