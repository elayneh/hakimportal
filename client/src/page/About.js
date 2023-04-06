import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";

import about_image from "../assets/images/logo_ortho.jpeg";
import logo from "../assets/images/logo.jpeg";
import Footer from "../components/Footer";
import NavDropdown from "react-bootstrap/NavDropdown";

import "../styles/nav.css";
import "../styles/styles.css";
import "../styles/login.css";

const About = () => {
  return (
    <>
      <>
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
                    <Link to="/services" style={{ textDecoration: "none" }}>
                      Services
                    </Link>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/works" style={{ textDecoration: "none" }}>
                      Works
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <AnchorLink
                      href="#about"
                      style={{ textDecoration: "none" }}
                    >
                      About
                    </AnchorLink>
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
      </>
      <>
        <main>
          <section
            className="section-hero hero-homepage"
            data-section-theme="dark"
          >
            <div className="container">
              <div className="section-body">
                <section className="section-inner">
                  <h2 className="section-title">We Are 4 Optimal Mobility</h2>
                  <Link
                    to="#top"
                    className="button"
                    style={{ textDecoration: "none" }}
                  >
                    Get Started
                  </Link>
                </section>
                <section id="about" className="section section-about-us">
                  <div className="container">
                    <header className="section-header">
                      <h2 className="section-title">About Us</h2>
                      <p className="section-tagline">Everything about us</p>
                    </header>
                    <div className="section-body">
                      <div className="row">
                        <div className="col-1-2">
                          <img
                            sizes="(max-width: 3000px) 40vw, 1200px"
                            srcSet="
                    pic-about-01_avq1un_c_scale,w_380.jpg   380w,
                    pic-about-01_avq1un_c_scale,w_881.jpg   881w,
                    pic-about-01_avq1un_c_scale,w_1200.jpg 1200w
                  "
                            src="pic-about-01_avq1un_c_scale,w_1200.jpg"
                            alt=""
                          />
                        </div>
                        <div className="col-1-2">
                          <img src={about_image} alt="" />
                          <h3>Who are we</h3>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Ipsum, omnis expedita! Eum, praesentium cumque
                            accusantium rem, sit quaerat est nisi ratione,
                            deserunt ducimus quidem iste dicta quibusdam atque
                            maxime cum!
                          </p>
                          <h3>Our culture</h3>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Ipsum, omnis expedita! Eum, praesentium cumque
                            accusantium rem, sit quaerat est nisi ratione,
                            deserunt ducimus quidem iste dicta quibusdam atque
                            maxime cum!
                          </p>
                          <h3>How we work</h3>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Ipsum, omnis expedita! Eum, praesentium cumque
                            accusantium rem, sit quaerat est nisi ratione,
                            deserunt ducimus quidem iste dicta quibusdam atque
                            maxime cum!
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </section>
        </main>
      </>
      <>
        <Footer />
      </>
    </>
  );
};

export default About;
