import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import "../styles/nav.css";
import Footer from "./Footer";

import logo from "../assets/images/logo.jpeg";
import AnchorLink from "react-anchor-link-smooth-scroll";
// import { useState } from "react";
// import { FiChevronDown } from "react-icons/fi";
import about_image from "../assets/images/logo_ortho.jpeg";
import "../styles/styles.css";
import "../styles/login.css";
import person_01 from "../assets/images/cus1.jpeg";
import person_02 from "../assets/images/cus2.png";
import person_03 from "../assets/images/wcus1.png";
import work1 from "../assets/images/work1.jpeg";
import work2 from "../assets/images/work2.jpeg";
import work3 from "../assets/images/work3.jpeg";

import NavDropdown from "react-bootstrap/NavDropdown";
import { useState } from "react";

const Nav = () => {
  const [isHovering, setIsHovering] = useState(false);


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
                  <AnchorLink
                    href="#services"
                    style={{ textDecoration: "none" }}
                  >
                    Services
                  </AnchorLink>
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
                  <AnchorLink
                    href="#testimonial"
                    style={{ textDecoration: "none" }}
                  >
                    Testimonials
                  </AnchorLink>
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
                  <NavDropdown
                    title={ <span className="navdropdownitem">Login</span>}
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
      <main>
        {/* home section */}
        <section
          className="section-hero hero-homepage"
          data-section-theme="dark"
        >
          <div className="container">
            <div className="section-body">
              <section className="section-inner">
                <h2 className="section-title">We Are 4 Optimal Mobility</h2>
                <Link
                  to="#"
                  className="button"
                  style={{ textDecoration: "none" }}
                >
                  Get Started
                </Link>
              </section>
              {/* service section */}
              <section id="services" className="section section-services">
                <div className="container">
                  <header className="section-header">
                    <h2 className="section-title">Services</h2>
                    <p className="section-tagline">
                      We Are here 4 Optimal Mobility!!
                    </p>
                  </header>
                  {/* Service section */}
                  <div className="section-body">
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
                  <div className="section-footer">
                    <NavLink
                      className="button"
                      to="services"
                      style={{ color: "#4169E1" }}
                    >
                      See More...
                    </NavLink>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </section>
        {/* Works section */}
        <section
          id="works"
          className="section section-works"
          data-section-theme="dark"
        >
          <div className="container">
            <header className="section-header">
              <h2 className="section-title">Works</h2>
              <p className="section-tagline">Take a look at our portfolio</p>
            </header>
            <div className="section-body">
              <ul className="row">
                <li className="col-1-3">
                  <article className="card-work">
                    <div className="card-outer">
                      <div className="card-image">
                        <img src={work1} alt="Work1" />
                      </div>
                      <div className="card-inner">
                        <h3 className="card-title">
                          <NavLink to="#">Hip Arthroplasty</NavLink>
                        </h3>
                      </div>
                    </div>
                  </article>
                </li>
                <li className="col-1-3">
                  <article className="card-work">
                    <div className="card-outer">
                      <div className="card-image">
                        <img src={work2} alt="Work2" />
                      </div>
                      <div className="card-inner">
                        <h3 className="card-title">
                          <NavLink to="#">Hip Replacement</NavLink>
                        </h3>
                      </div>
                    </div>
                  </article>
                </li>
                <li className="col-1-3">
                  <article className="card-work">
                    <div className="card-outer">
                      <div className="card-image">
                        <img src={work3} alt="Work3" />
                      </div>
                      <div className="card-inner">
                        <h3 className="card-title">
                          <NavLink to="#">Complex Fracture</NavLink>
                        </h3>
                      </div>
                    </div>
                  </article>
                </li>
              </ul>
              <div className="section-footer">
                <NavLink
                  className="button"
                  to="works"
                  style={{ color: "#4169E1" }}
                >
                  See More...
                </NavLink>
              </div>
            </div>
          </div>
        </section>

        {/* about section –> */}
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
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Ipsum, omnis expedita! Eum, praesentium cumque accusantium
                    rem, sit quaerat est nisi ratione, deserunt ducimus quidem
                    iste dicta quibusdam atque maxime cum!
                  </p>
                  <h3>Our culture</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Ipsum, omnis expedita! Eum, praesentium cumque accusantium
                    rem, sit quaerat est nisi ratione, deserunt ducimus quidem
                    iste dicta quibusdam atque maxime cum!
                  </p>
                  <h3>How we work</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Ipsum, omnis expedita! Eum, praesentium cumque accusantium
                    rem, sit quaerat est nisi ratione, deserunt ducimus quidem
                    iste dicta quibusdam atque maxime cum!
                  </p>
                </div>
              </div>
            </div>
            <div className="section-footer">
              <Link className="button" to="/about" style={{ color: "#4169E1	" }}>
                More about us...
              </Link>
            </div>
          </div>
        </section>
        {/* Latest news section */}
        <section id="latest_news" className="section section-latest-news">
          <div className="container">
            <header className="section-header">
              <h2 className="section-title">Latest News</h2>
            </header>
            <div className="section-body">
              <ul className="row">
                <li className="col-1-3">
                  <article className="card-blog">
                    <div>
                      <img
                        sizes="(max-width: 3000px) 40vw, 1200px"
                        srcSet="
                        ../assets/image/pic-article-01_zpc5mw_c_scale,w_380.jpg   380w,
                        ../assets/image/pic-article-01_zpc5mw_c_scale,w_936.jpg   936w,
                        ../assets/image/pic-article-01_zpc5mw_c_scale,w_1200.jpg 1200w
                      "
                        src="../assets/image/pic-article-01_zpc5mw_c_scale,w_1200.jpg"
                        alt=""
                      />
                    </div>
                    <p className="card-category">Career</p>
                    <h3>
                      <NavLink to="#" style={{ textDecoration: "none" }}>
                        Hoc loco tenere se Triarius non potuit.
                      </NavLink>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Id Sextilius factum negabat. Quo tandem modo? At eum
                      nihili facit; Quae contraria sunt his, malane?
                    </p>
                    <small>By Dr Teshome T.</small>
                  </article>
                </li>
                <li className="col-1-3">
                  <article className="card-blog">
                    <div>
                      <img
                        sizes="(max-width: 3000px) 40vw, 1200px"
                        srcset="
                        ../assets/image/pic-article-02_z0vera_c_scale,w_380.jpg   380w,
                        ../assets/image/pic-article-02_z0vera_c_scale,w_926.jpg   926w,
                        ../assets/image/pic-article-02_z0vera_c_scale,w_1200.jpg 1200w
                      "
                        src="../assets/image/pic-article-02_z0vera_c_scale,w_1200.jpg"
                        alt=""
                      />
                    </div>
                    <p className="card-category">Digital Life</p>
                    <h3>
                      <NavLink style={{ textDecoration: "none" }} to="#">
                        Ut alios omittam, hunc appello, quem ille unum secutus
                        est.
                      </NavLink>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Tum mihi Piso: Quid ergo? Tum ille: Ain tandem? Non autem
                      hoc: igitur ne illud quidem. Sed quod proximum fuit non
                      vidit. Nos commodius agimus. An nisi populari fama?
                    </p>
                    <small>By Belayneh G.</small>
                  </article>
                </li>
                <li className="col-1-3">
                  <article className="card-blog">
                    <div>
                      <img
                        sizes="(max-width: 3000px) 40vw, 1200px"
                        srcset="
                        pic-article-03_emcpkf_c_scale,w_380.jpg   380w,
                        pic-article-03_emcpkf_c_scale,w_882.jpg   882w,
                        pic-article-03_emcpkf_c_scale,w_1200.jpg 1200w
                      "
                        src="pic-article-03_emcpkf_c_scale,w_1200.jpg"
                        alt=""
                      />
                    </div>
                    <p className="card-category">Social</p>
                    <h3>
                      <NavLink style={{ textDecoration: "none" }} to="#">
                        Bestiarum vero nullum iudicium puto.
                      </NavLink>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Non igitur bene. Quid enim est a Chrysippo praetermissum
                      in Stoicis? Pugnant Stoici cum Peripateticis. Prioris
                      generis est docilitas, memoria; Apparet statim, quae sint
                      officia, quae actiones.
                    </p>
                    <small>By Temesgen G.</small>
                  </article>
                </li>
              </ul>
              <div className="section-footer">
                <NavLink
                  className="button"
                  to="news"
                  style={{ color: "#4169E1" }}
                >
                  More News...
                </NavLink>
              </div>
            </div>
          </div>
        </section>
        {/* <!– Testimonials section –> */}
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
              <div className="section-footer">
                <NavLink className="button" to="testimonials">
                  More Testimonials...
                </NavLink>
              </div>
            </div>
          </div>
        </section>
        {/* <!– Contact section –> */}
        <section id="contact" className="section section-contact">
          <div className="container">
            <header className="section-header">
              <h2 className="section-title">Contact</h2>
              <p className="section-tagline">We'd love to hear from you!</p>
            </header>
            <div className="section-body">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id
                Sextilius factum negabat. Quo tandem modo? At eum nihili facit;
                Quae contraria sunt his, malane?
              </p>
            </div>
            <div className="section-footer">
              <NavLink className="button" to="contact">
                Get in touch
              </NavLink>
            </div>
          </div>
        </section>
      </main>
      {/* Footer */}
      <Footer />
    </>
  );
};

export default Nav;
