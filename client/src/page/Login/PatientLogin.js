import { useForm } from "react-hook-form";
import { Form, Button } from "semantic-ui-react";
import React, { useState } from "react";

import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";

import "../../styles/login.css";
import "../../styles/styles.css";
import "../../components/Nav.css";

// export default function (props)

export default function (props) {
  const {
    register,
    formState: { errors },
  } = useForm();

  const [loginMode, setloginMode] = useState("signin");
  const [state, setState] = useState({
    firstName: "default",
    lastName: "",
    email: "",
    password: "",
    age: "",
    gender: "",
    phone: "",
  });

  const { onSubmit, firstName, lastName, age, gender, phone, email, password } =
    state;

  const changeHandler = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setState( {[name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    let fistName = state.firstName;
    let lastName = state.lastName;
    let age = state.age;
    let email = state.email;
    console.log(`First name: ${fistName}\nLast name: ${lastName}\nAge: ${age}\nEmail address: ${email}\n`)
  };

  // const changeHandler = (event) => {
  //   let name = event.target.name;
  //   let value = event.target.value;
  //   setFormData({ [name]: value });
  //   alert(event.target.name)
  // };
  // const [fistName, setFirstName] = useState("");
  // const handleFnameChange = (e) => {
  //   setFirstName({ ...firstName, firstName: e.target.value });
  // };

  // const handleChange = (e) => {
  //   setState({ ...formData, [e.target.name]: e.target.value });
  // };

  const changeLoginMode = () => {
    setloginMode(loginMode === "signin" ? "signup" : "signin");
  };

  const handleSubmit = () => {
    console.log(`Fist name: ${firstName}`);
  };

  function handleClick() {
    fetch("http://localhost:3001/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });
  }

  if (loginMode === "signin") {
    return (
      <div style={{ backgroundColor: "hwb(27 37% 49%)" }}>
        <NavBar />
        <div
          className="login-main"
          style={{ backgroundColor: "white", margin: "5% 15%" }}
        >
          <h3 style={{ padding: "10% 0% 0% 40%" }}>Patient Login</h3>
          <Form onSubmit={handleSubmit} style={{ padding: "0 25% 0.7% 25%" }}>
            <Form.Field className="form-field" style={{ padding: "0% 0% 4%" }}>
              <label>Email</label>
              <input
                type="email"
                placeholder="email"
                {...register("email", {
                  required: true,
                  pattern:
                    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                })}
                onChange={changeHandler}
              />
              {errors.email && (
                <p style={{ color: "red" }}>Please enter valid email address</p>
              )}
            </Form.Field>
            <Form.Field className="form-field" style={{ padding: "0% 0% 4%" }}>
              <label>Password</label>
              <input
                type="password"
                placeholder="password"
                {...register("password", {
                  required: true,
                  pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,15}$/,
                })}
                onChange={changeHandler}
              />
              {errors.password && (
                <p style={{ color: "red" }}>Please enter valid password </p>
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
        <h3 style={{ padding: "10% 0% 0% 40%" }}>Patient Login</h3>
        <Form onSubmit={handleSubmit} style={{ padding: "0 25% 0.7% 25%" }}>
          <Form.Field className="form-field" style={{ padding: "0% 0% 4%" }}>
            <label>First Name</label>
            <input
              placeholder="First Name"
              type="text"
              {...register("fistName", {
                required: true,
                pattern: /^[a-zA-Z]+$/,
              })}
              onChange={changeHandler}
            />
            {errors.fistName && (
              <p style={{ color: "red" }}>Enter Valid Name</p>
            )}
          </Form.Field>
          <Form.Field className="form-field" style={{ padding: "0% 0% 4%" }}>
            <label>Last Name</label>
            <input
              placeholder="Last Name"
              type="text"
              {...register("lastName", {
                required: true,
                pattern: /^[A-Za-z]+$/,
              })}
              onChange={changeHandler}
            />
            {errors.lastName && (
              <p style={{ color: "red" }}>Enter Valid Name</p>
            )}
          </Form.Field>
          <Form.Field className="form-field" style={{ padding: "0% 0% 4%" }}>
            <label>Email</label>
            <input
              type="email"
              placeholder="email"
              {...register("email", {
                required: true,
                pattern:
                  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              })}
              onChange={changeHandler}
            />
            {errors.email && (
              <p style={{ color: "red" }}>Please enter valid email address</p>
            )}
          </Form.Field>
          <Form.Field className="form-field" style={{ padding: "0% 0% 4%" }}>
            <label>Password</label>
            <input
              type="password"
              placeholder="password"
              {...register("password", {
                required: true,
                pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,15}$/,
              })}
              onChange={changeHandler}
            />
            {errors.password && (
              <p style={{ color: "red" }}>Please enter valid password </p>
            )}
          </Form.Field>
          <Form.Field className="form-field">
            <label>Phone</label>
            <input
              type="tel"
              placeholder="phone"
              {...register("tel", {
                required: true,
                maxLength: 13,
                minLength: 10,
                pattern: /^[+]?[0-9]*(?:[0-9]*)$/,
              })}
              onChange={changeHandler}
            />
            {errors.tel && (
              <p style={{ color: "red" }}>Please enter valid phone number</p>
            )}
          </Form.Field>
          <Form.Field className="form-field" style={{ padding: "0% 0% 4%" }}>
            <label>Gender</label>
            <select
              {...register("gender", {
                required: true,
              })}
              onChange={changeHandler}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </Form.Field>
          <Form.Field className="form-field" style={{ padding: "0% 0% 15%" }}>
            <label>Age</label>
            <input
              type="number"
              min={0}
              max={150}
              placeholder="age"
              {...register("age", {
                required: true,
              })}
              onChange={changeHandler}
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
