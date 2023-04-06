import "../styles/nav.css";
import "../styles/styles.css";
import { NavLink, Link } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";
import NavDropdown from "react-bootstrap/NavDropdown";

import logo from "../assets/images/logo.jpeg";

import Footer from "../components/Footer";

const News = () => {
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
                    <NavLink to="#top" style={{ textDecoration: "none" }}>
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

      {/* main section */}
      <>
        <main>
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
                        Tum mihi Piso: Quid ergo? Tum ille: Ain tandem? Non
                        autem hoc: igitur ne illud quidem. Sed quod proximum
                        fuit non vidit. Nos commodius agimus. An nisi populari
                        fama?
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
                        generis est docilitas, memoria; Apparet statim, quae
                        sint officia, quae actiones.
                      </p>
                      <small>By Temesgen G.</small>
                    </article>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </main>
      </>
      {/* Footer */}
      <Footer />
    </>
  );
};

export default News;
