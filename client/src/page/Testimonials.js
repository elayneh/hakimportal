import AnchorLink from "react-anchor-link-smooth-scroll";
import { NavLink, Link } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";

import logo from "../assets/images/logo.jpeg";
import person_01 from "../assets/images/cus1.jpeg";
import person_02 from "../assets/images/cus2.png";
import person_03 from "../assets/images/wcus1.png";
import Footer from "../components/Footer";

import "../styles/styles.css";
import "../styles/login.css";

const Testimonial = () => {
  return (
    <>
      {/* header section */}
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
                    <NavLink to="/about" style={{ textDecoration: "none" }}>
                      About
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <AnchorLink
                      href="#latest_news"
                      style={{ textDecoration: "none" }}
                    >
                      Latest news
                    </AnchorLink>
                  </li>
                  <li className="nav-item">
                    <AnchorLink
                      href="#testimonial"
                      style={{ textDecoration: "none" }}
                    >
                      Testimonials
                    </AnchorLink>
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
      {/* main section */}
      <main>
        <section id="testimonial" className="section section-testimonial">
          <div className="container">
            <header className="section-header">
              <h2 className="section-title">Testimonials</h2>
              <p className="section-tagline">We are more than a treating</p>
            </header>
            <div className="section-body">
              <ul className="row">
                <li className="col-1-3">
                  <article className="card-testimonial">
                    <img
                      src={person_01}
                      alt="Yuri Y. avatar"
                      width="100"
                      height="100"
                      className="card-avatar"
                    />
                    <blockquote className="card-quote">
                      <p>
                        I am completely blown away. Thanks to CareAll, we've
                        just launched our 5th website!
                        <cite>Tamagn B.</cite>
                      </p>
                    </blockquote>
                  </article>
                </li>
                <li className="col-1-3">
                  <article className="card-testimonial">
                    <img
                      src={person_02}
                      alt="Dorrie S. avatar"
                      width="100"
                      height="100"
                      className="card-avatar"
                    />
                    <blockquote className="card-quote">
                      <p>
                        Thank you so much for your help. CareAll company is
                        awesome!
                        <cite>Mebit T.</cite>
                      </p>
                    </blockquote>
                  </article>
                </li>
                <li className="col-1-3">
                  <article className="card-testimonial">
                    <img
                      src={person_03}
                      alt="Sven H. avatar"
                      width="100"
                      height="100"
                      className="card-avatar"
                    />
                    <blockquote className="card-quote">
                      <p>
                        I love your system. Definitely worth the investment. I'd
                        be lost without CareAll company.
                        <cite>Dr Seblewongel A.</cite>
                      </p>
                    </blockquote>
                  </article>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      {/* Footer */}
      <Footer />{" "}
    </>
  );
};

export default Testimonial;
