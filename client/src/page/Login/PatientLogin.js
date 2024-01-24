import { useForm } from "react-hook-form";
import { Form, Button } from "semantic-ui-react";
import React, { useState } from "react";

import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";

import "../../styles/login.css";
import "../../styles/styles.css";
import "../../components/Nav.css";

export default function () {
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [cpassword, setCpassword] = useState("");
  // const [phone, setPhone] = useState("");
  // const [gender, setGender] = useState("male");
  // const [age, setAge] = useState("");

  // Error state
  // const [errorFirstName, setErrorfirstName] = useState("");
  // const [errorLastName, setErrorlastName] = useState("");
  const [errorEmail, setErroremail] = useState("");
  const [errorPassword, setErrorpassword] = useState("");
  // const [errorCpassword, setErrorcpassword] = useState("");
  // const [errorPhone, setErrorphone] = useState("");
  // const [errorGender, setErrorgender] = useState("male");
  // const [errorAge, setErrorage] = useState("");

  const singupSubmitHandler = (event) => {
    const allData = {
      // firstName,
      // lastName,
      email,
      password,
      // cpassword,
      // phone,
      // age,
      // gender,
    };
    fetch("http://localhost:3001/api/v1/users/signup", {
      method: "POST",
      // We convert the React state to JSON and send it as the POST body
      body: JSON.stringify(allData),
      headers: { "Content-Type": "application/json" },
    })
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        console.log(data);
        // setErrorfirstName(data.errors.firstName);
        // setErrorlastName(data.errors.lastName);
        setErroremail(data.errors.email);
        setErrorpassword(data.errors.password);
        // setErrorcpassword(data.errors.cpassword);
        // setErrorphone(data.errors.phone);
        // setErrorgender(data.errors.gender);
        // setErrorage(data.errors.age);
      });
  };
  const signinSubmitHandler = (event) => {
    const allData = {
      email,
      password,
    };
    fetch("http://localhost:3001/api/v1/users/login", {
      method: "POST",
      // We convert the React state to JSON and send it as the POST body
      body: JSON.stringify(allData),
      headers: { "Content-Type": "application/json" },
    }).then(function (response) {
      console.log(response);
      return response.json();
    });

    event.preventDefault();
  };

  const [loginMode, setloginMode] = useState("signin");

  const changeLoginMode = () => {
    setloginMode(loginMode === "signin" ? "signup" : "signin");
  };

  if (loginMode === "signin") {
    return (
      <div style={{ backgroundColor: "hwb(27 37% 49%)" }}>
        <NavBar />
        <div
          className="login-main"
          style={{ backgroundColor: "white", margin: "5% 15%" }}
        >
          <h3 style={{ padding: "10% 0% 0% 40%" }}>Patient Login</h3>
          <Form
            onSubmit={signinSubmitHandler}
            style={{ padding: "0 25% 0.7% 25%" }}
          >
            <Form.Field className="form-field" style={{ padding: "0% 0% 4%" }}>
              <label>Email</label>
              <input
                type="email"
                placeholder="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              {errorEmail != "" ? (
                <p style={{ color: "red" }}>{errorEmail}</p>
              ) : (
                ""
              )}
            </Form.Field>
            <Form.Field className="form-field" style={{ padding: "0% 0% 4%" }}>
              <label>Password</label>
              <input
                type="password"
                placeholder="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              {errorPassword != "" ? (
                <p style={{ color: "red" }}>{errorPassword}</p>
              ) : (
                ""
              )}
            </Form.Field>
            <Button type="submit" className="submit-btn">
              Submit
            </Button>
          </Form>
          <p className="text-center mt-2" style={{ color: "black" }}>
            Forgot{" "}
            <a href="#" className="link-primary">
              password?
            </a>{" "}
            &nbsp;&nbsp; &nbsp;&nbsp; Don't have an account?{"  "}
            <span className="link-primary" onClick={changeLoginMode}>
              Sign Up
            </span>
          </p>
        </div>
        {/* Footer section */}
        <Footer />
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: "hwb(27 37% 49%)" }}>
      <NavBar />
      <div
        className="login-main"
        style={{ backgroundColor: "white", margin: "5% 15%" }}
      >
        <h3 style={{ padding: "10% 0% 0% 40%" }}>Patient Signup</h3>
        <Form
          onSubmit={singupSubmitHandler}
          style={{ padding: "0 25% 0.7% 25%" }}
        >
          <Form.Field className="form-field" style={{ padding: "0% 0% 4%" }}>
            <label>First Name</label>
            <input
              placeholder="First Name"
              type="text"
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
            {errorFirstName != "" ? (
              <p style={{ color: "red" }}>{errorFirstName}</p>
            ) : (
              ""
            )}
          </Form.Field>
          <Form.Field className="form-field" style={{ padding: "0% 0% 4%" }}>
            <label>Last Name</label>
            <input
              placeholder="Last Name"
              type="text"
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
            {errorLastName != "" ? (
              <p style={{ color: "red" }}>{errorLastName}</p>
            ) : (
              ""
            )}
          </Form.Field>
          <Form.Field className="form-field" style={{ padding: "0% 0% 4%" }}>
            <label>Email</label>
            <input
              type="email"
              placeholder="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            {errorEmail != "" ? (
              <p style={{ color: "red" }}>{errorEmail}</p>
            ) : (
              ""
            )}
          </Form.Field>
          <Form.Field className="form-field" style={{ padding: "0% 0% 4%" }}>
            <label>Password</label>
            <input
              type="password"
              placeholder="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            {errorPassword != "" ? (
              <p style={{ color: "red" }}>{errorPassword}</p>
            ) : (
              ""
            )}
          </Form.Field>
          <Form.Field className="form-field" style={{ padding: "0% 0% 4%" }}>
            <label>Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm Password"
              onChange={(e) => {
                setCpassword(e.target.value);
              }}
            />
            {errorCpassword != "" ? (
              <p style={{ color: "red" }}>{errorCpassword}</p>
            ) : (
              ""
            )}
          </Form.Field>
          <Form.Field className="form-field">
            <label>Phone</label>
            <input
              type="tel"
              placeholder="phone"
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
            {errorPhone != "" ? (
              <p style={{ color: "red" }}>{errorPhone}</p>
            ) : (
              ""
            )}
          </Form.Field>
          <Form.Field className="form-field" style={{ padding: "0% 0% 4%" }}>
            <label>Gender</label>
            <select
              value={gender}
              onChange={(e) => {
                setGender(e.target.value);
              }}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </Form.Field>
          <Form.Field className="form-field" style={{ padding: "0% 0% 15%" }}>
            <label>Age</label>
            <input
              type="number"
              min={0}
              max={150}
              placeholder="Age"
              onChange={(e) => {
                setAge(e.target.value);
              }}
            />
            {errorAge != "" ? <p style={{ color: "red" }}>{errorAge}</p> : ""}
          </Form.Field>
          <Button type="submit">Submit</Button>
        </Form>
        <p className="text-center mt-2" style={{ color: "black" }}>
          Forgot{" "}
          <a href="#" className="link-primary">
            password?
          </a>
          &nbsp;&nbsp; &nbsp;&nbsp; Already registered?&nbsp;&nbsp;
          <span className="link-primary" onClick={changeLoginMode}>
            Sign In
          </span>
        </p>
      </div>

      {/* Footer section */}
      <Footer />
    </div>
  );
}
