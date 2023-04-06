import { useForm } from "react-hook-form";
import { Form, Button } from "semantic-ui-react";
import React, { useState } from "react";

import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";

import "../../styles/login.css";
import "../../styles/styles.css";
import "../../components/Nav.css";

export default function () {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("male");
  const [age, setAge] = useState("");

  const singupSubmitHandler = (event) => {
    const allData = {
      firstName,
      lastName,
      email,
      password,
      cpassword,
      phone,
      age,
      gender,
    };
    fetch("http://localhost:3001/api/v1/users/signup", {
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

  // Login submit handler
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
                // {"email", {
                //   required: true,
                //   pattern:
                //     /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                // }}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              {/* {errors.email && (
                <p style={{ color: "red" }}>Please enter valid email address</p>
              )} */}
            </Form.Field>
            <Form.Field className="form-field" style={{ padding: "0% 0% 4%" }}>
              <label>Password</label>
              <input
                type="password"
                placeholder="password"
                // {...register("password", {
                //   required: true,
                //   pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,15}$/,
                // })}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              {/* {errors.password && (
                <p style={{ color: "red" }}>Please enter valid password </p>
              )} */}
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
              required
              type="text"
              // {...register("fistName", {
              //   required: true,
              //   pattern: /^[a-zA-Z]+$/,
              // })}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
            {/* {errors.fistName && (
              <p style={{ color: "red" }}>Enter Valid Name</p>
            )} */}
          </Form.Field>
          <Form.Field className="form-field" style={{ padding: "0% 0% 4%" }}>
            <label>Last Name</label>
            <input
              placeholder="Last Name"
              required
              type="text"
              //   {...register("lastName", {
              //     required: true,
              //     pattern: /^[A-Za-z]+$/,
              //   })}
              //   onChange={changeHandler}
              // />
              // {errors.lastName && (
              //   <p style={{ color: "red" }}>Enter Valid Name</p>
              // )}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
          </Form.Field>
          <Form.Field className="form-field" style={{ padding: "0% 0% 4%" }}>
            <label>Email</label>
            <input
              type="email"
              required
              placeholder="email"
              //   {...register("email", {
              //     required: true,
              //     pattern:
              //       /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              //   })}
              //   onChange={changeHandler}
              // />
              // {errors.email && (
              //   <p style={{ color: "red" }}>Please enter valid email address</p>
              // )}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </Form.Field>
          <Form.Field className="form-field" style={{ padding: "0% 0% 4%" }}>
            <label>Password</label>
            <input
              type="password"
              required
              placeholder="password"
              //   {...register("password", {
              //     required: true,
              //     pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,15}$/,
              //   })}
              //   onChange={changeHandler}
              // />
              // {errors.password && (
              //   <p style={{ color: "red" }}>Please enter valid password </p>
              // )}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </Form.Field>
          <Form.Field className="form-field" style={{ padding: "0% 0% 4%" }}>
            <label>Confirm Password</label>
            <input
              type="password"
              required
              placeholder="Confirm Password"
              //   {...register("password", {
              //     required: true,
              //     pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,15}$/,
              //   })}
              //   onChange={changeHandler}
              // />
              // {errors.password && (
              //   <p style={{ color: "red" }}>Please enter valid password </p>
              // )}
              onChange={(e) => {
                setCpassword(e.target.value);
              }}
            />
          </Form.Field>
          <Form.Field className="form-field">
            <label>Phone</label>
            <input
              type="tel"
              required
              placeholder="phone"
              //   {...register("tel", {
              //     required: true,
              //     maxLength: 13,
              //     minLength: 10,
              //     pattern: /^[+]?[0-9]*(?:[0-9]*)$/,
              //   })}
              //   onChange={changeHandler}
              // />
              // {errors.tel && (
              //   <p style={{ color: "red" }}>Please enter valid phone number</p>
              // )}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
          </Form.Field>
          <Form.Field className="form-field" style={{ padding: "0% 0% 4%" }}>
            <label>Gender</label>
            <select
              value={gender}
              required
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
              placeholder="age"
              required
              // {...register("age", {
              //   required: true,
              // })}
              onChange={(e) => {
                setAge(e.target.value);
              }}
            />
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
