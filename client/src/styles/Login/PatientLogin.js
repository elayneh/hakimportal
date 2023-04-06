import React, { useState } from "react";
import signin from "../../assets/signin1.jpeg";
import NavBar from "./NavBar";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import "../styles/nav.css";

import AnchorLink from "react-anchor-link-smooth-scroll";
// import { useState } from "react";
// import { FiChevronDown } from "react-icons/fi";
import logo from "../assets/images/logo.jpeg";
import about_image from "../assets/images/logo_ortho.jpeg";
import "../styles/styles.css";
import "../styles/login.css";
import person_01 from "../assets/images/cus1.jpeg";
import person_02 from "../assets/images/cus2.png";
import person_03 from "../assets/images/wcus1.png";
import work1 from "../assets/images/work1.jpeg";
import work2 from "../assets/images/work2.jpeg";
import work3 from "../assets/images/work3.jpeg";
import ortho_home from "../assets/images/orthopeds.jpeg";

import Dropdown from "react-bootstrap/Dropdown";

export default function (props) {
  let [loginMode, setloginMode] = useState("signin");
  const [gender, setGender] = useState("");
  const handleChange = (e) => {
    setGender(e.target.value);
  };
  const changeLoginMode = () => {
    setloginMode(loginMode === "signin" ? "signup" : "signin");
  };

  if (loginMode === "signin") {
    return (
      <>
        <Nav />
        <div className="Auth-form-container">
          <form className="Auth-form">
            <div className="Auth-form-content">
              <h3 className="Auth-form-title">Patient Login</h3>
              <div className="form-group mt-3">
                <label>Email address</label>
                <input
                  type="email"
                  className="form-control mt-1"
                  placeholder="Enter email"
                />
              </div>
              <div className="form-group mt-3">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control mt-1"
                  placeholder="Enter password"
                />
              </div>
              <div className="d-grid gap-2 mt-3">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
              <p className="text-center mt-2">
                Forgot <a href="#">password?</a> &nbsp;&nbsp; &nbsp;&nbsp; Don't
                have an account?{"  "}
                <span className="link-primary" onClick={changeLoginMode}>
                  Sign Up
                </span>
              </p>
            </div>
          </form>
        </div>
      </>
    );
  }

  return (
    <>
      <Nav />
      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Patient SignUp</h3>
            <div className="form-group mt-3">
              <input
                type="email"
                className="form-control mt-1"
                placeholder="First Name"
              />
            </div>
            <div className="form-group mt-3">
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Last Name"
              />
            </div>
            <div className="form-group mt-3">
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Email Address"
              />
            </div>
            <div className="form-group mt-3">
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Password"
              />
            </div>
            <div className="form-group mt-3">
              <input
                className="form-control mt-1"
                type="number"
                min={0}
                max={150}
                placeholder="Age"
              />
            </div>
            <div className="form-group mt-3">
              <select className="form-control mt-1">
                <option>Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
            <p className="text-center mt-2">
              Forgot <a href="#">password?</a>
              &nbsp;&nbsp; &nbsp;&nbsp; Already registered?
              <span className="link-primary" onClick={changeLoginMode}>
                Sign In
              </span>
            </p>
          </div>
        </form>
      </div>
    </>
  );
}
