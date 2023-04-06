import React from "react";
import "../styles/Footer.css";
import { NavLink } from "react-router-dom";
import "../styles/nav.css";

import ortho_home from "../assets/images/orthopeds.jpeg";


export default function (props) {
  return (
    <>
      <footer className="footer" data-section-theme="dark">
        <div className="container">
          <div className="row">
            <div className="col-1-2">
              <img
                src={ortho_home}
                alt="CareAll logo"
                width="160"
                height="40"
              />
              <address className="footer-address">
                777 Bole
                <br />
                Addis Ababa Ethiopia
                <br />
                10000
              </address>
            </div>
            <div className="col-1-2">
              <ul className="social nav">
                <li className="social-item nav-item">
                  <NavLink
                    to="https://www.facebook.com/"
                    className="social-link"
                    target="_blank"
                  >
                    <svg
                      viewbox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                    >
                      <title>Facebook icon</title>
                      <path d="M23.998 12c0-6.628-5.372-12-11.999-12C5.372 0 0 5.372 0 12c0 5.988 4.388 10.952 10.124 11.852v-8.384H7.078v-3.469h3.046V9.356c0-3.008 1.792-4.669 4.532-4.669 1.313 0 2.686.234 2.686.234v2.953H15.83c-1.49 0-1.955.925-1.955 1.874V12h3.328l-.532 3.469h-2.796v8.384c5.736-.9 10.124-5.864 10.124-11.853z" />
                    </svg>
                  </NavLink>
                </li>
                <li className="social-item nav-item">
                  <NavLink
                    to="https://twitter.com/betenatefera"
                    className="social-link"
                    target="_blank"
                  >
                    <svg
                      viewbox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                    >
                      <title>Twitter icon</title>
                      <path d="M23.954 4.569a10 10 0 0 1-2.825.775 4.958 4.958 0 0 0 2.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 0 0-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 0 0-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 0 1-2.228-.616v.061a4.923 4.923 0 0 0 3.946 4.827 4.996 4.996 0 0 1-2.212.085 4.937 4.937 0 0 0 4.604 3.417 9.868 9.868 0 0 1-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0 0 7.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 0 0 2.46-2.548l-.047-.02z" />
                    </svg>
                  </NavLink>
                </li>
                <li className="social-item nav-item">
                  <NavLink
                    to="https://www.instagram.com/mikbeyay/"
                    className="social-link"
                    target="_blank"
                  >
                    <svg
                      viewbox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                    >
                      <title>Instagram icon</title>
                      <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913a5.885 5.885 0 0 0 1.384 2.126A5.868 5.868 0 0 0 4.14 23.37c.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558a5.898 5.898 0 0 0 2.126-1.384 5.86 5.86 0 0 0 1.384-2.126c.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913a5.89 5.89 0 0 0-1.384-2.126A5.847 5.847 0 0 0 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227a3.81 3.81 0 0 1-.899 1.382 3.744 3.744 0 0 1-1.38.896c-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421a3.716 3.716 0 0 1-1.379-.899 3.644 3.644 0 0 1-.9-1.38c-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 1 0 0-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 0 1-2.88 0 1.44 1.44 0 0 1 2.88 0z" />
                    </svg>
                  </NavLink>
                </li>
                <li className="social-item nav-item">
                  <NavLink
                    to="https://www.linkedin.com/"
                    className="social-link"
                    target="_blank"
                  >
                    <svg
                      viewbox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                    >
                      <title>linkedin icon</title>
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />{" "}
                    </svg>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <hr style={{ color: "white" }} />
          <div className="row">
            <div className="col-1-2">
              <p className="footer-copyright">
                © 2023 CareAll, made with ♥ by BG.
              </p>
            </div>
            <div className="col-1-2">
              <ul className="footer-nav nav">
                <li className="footer-nav-item nav-item">
                  <NavLink
                    style={{ textDecoration: "none" }}
                    to="#"
                    className="footer-nav-link"
                  >
                    Terms of use
                  </NavLink>
                </li>
                <li className="footer-nav-item nav-item">
                  <NavLink
                    style={{ textDecoration: "none" }}
                    to="#"
                    className="footer-nav-link"
                  >
                    Privacy Policy
                  </NavLink>
                </li>
                <li className="footer-nav-item nav-item">
                  <NavLink
                    style={{
                      textDecoration: "none",
                    }}
                    to="#"
                    className="footer-nav-link"
                  >
                    Cookie Policy
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}