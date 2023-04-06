import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";
import AnchorLink from "react-anchor-link-smooth-scroll";

import Footer from "../components/Footer";
import logo from "../assets/images/logo.jpeg";

import "../styles/nav.css";
import "../styles/styles.css";
import "../styles/login.css";

const Service = () => {
  return (
    <>
      {/* header section */}
      <header className="header" data-section-theme="dark" id="top">
        <div className="container">
          <div className="header-container">
            <div className="header-logo">
              <AnchorLink href="#top">
                <img
                  src={logo}
                  style={{ width: "160px", height: "40px" }}
                  alt="LOGO"
                />
              </AnchorLink>
            </div>
            <input type="checkbox" className="menu-btn" id="menu-btn" />
            <label htmlFor="menu-btn" className="menu-icon">
              <span className="navicon"></span>
            </label>
            <nav className="navbar-menu">
              <ul className="nav">
                <li className="nav-item">
                  <NavLink to="/" style={{ textDecoration: "none" }}>
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <AnchorLink
                    href="#services"
                    style={{ textDecoration: "none" }}
                  >
                    Services
                  </AnchorLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/works" style={{ textDecoration: "none" }}>
                    Works
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/about" style={{ textDecoration: "none" }}>
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/news" style={{ textDecoration: "none" }}>
                    Latest news
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/testimonials"
                    style={{ textDecoration: "none" }}
                  >
                    Testimonials
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/contact" style={{ textDecoration: "none" }}>
                    Contact
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavDropdown
                    title={<span className="navdropdownitem">Login</span>}
                    id="collasible-nav-dropdown"
                  >
                    <NavDropdown.Item
                      className="navdropdownitem"
                      href="login/patient-login"
                    >
                      Patient
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      className="navdropdownitem"
                      href="login/staff-login"
                    >
                      Staff
                    </NavDropdown.Item>
                  </NavDropdown>
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
      {/* main section */}
      <main>
        <div className="section-body" id="services">
          <ul className="row">
            <li className="col-1-3">
              <div className="card-services">
                <h3 className="card-title">
                  <NavLink to="#" style={{ textDecoration: "none" }}>
                    Service 1
                  </NavLink>
                </h3>
              </div>
            </li>
            <li className="col-1-3">
              <div className="card-services">
                <h3 className="card-title">
                  <NavLink to="#" style={{ textDecoration: "none" }}>
                    Service 2
                  </NavLink>
                </h3>
              </div>
            </li>
            <li className="col-1-3">
              <div className="card-services">
                <h3 className="card-title">
                  <NavLink to="#" style={{ textDecoration: "none" }}>
                    Service 3
                  </NavLink>
                </h3>
              </div>
            </li>
          </ul>
          <ul className="row">
            <li className="col-1-3">
              <div className="card-services">
                <h3 className="card-title">
                  <NavLink to="#" style={{ textDecoration: "none" }}>
                    Service 4
                  </NavLink>
                </h3>
              </div>
            </li>
            <li className="col-1-3">
              <div className="card-services">
                <h3 className="card-title">
                  <NavLink to="#" style={{ textDecoration: "none" }}>
                    Service 5
                  </NavLink>
                </h3>
              </div>
            </li>
            <li className="col-1-3">
              <div className="card-services">
                <h3 className="card-title">
                  <NavLink to="#" style={{ textDecoration: "none" }}>
                    Service 6
                  </NavLink>
                </h3>
              </div>
            </li>
          </ul>
        </div>
      </main>
      {/* Footer */}
      <Footer />{" "}
    </>
  );
};

export default Service;
