import React, { useState } from "react";

export default function (props) {
  const [input, setInput] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    confirmPassword: "",
    age: "",
    gender: "",
    phone: "",
  });
  const [error, setError] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    confirmPassword: "",
    age: "",
    gender: "",
    phone: "",
  });

  var regName = /^[a-zA-Z]+ [a-zA-Z]+$/;

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
    validateInput(e);
  };
  const validateInput = (e) => {
    let { name, value } = e.target;
    setError((prev) => {
      const stateObj = { ...prev, [name]: "" };
      switch (name) {
        case "fname":
          if (value.match(regName) != null) {
            stateObj[name] = "Please enter valid first name";
          }
          break;
        case "lname":
          if (value.match(regName) != null) {
            stateObj[name] = "Please enter valid first name";
          }
          break;
        case "password":
          if (!value) {
            stateObj[name] = "Please enter Password.";
          } else if (input.confirmPassword && value !== input.confirmPassword) {
            stateObj["confirmPassword"] =
              "Password and Confirm Password does not match.";
          } else {
            stateObj["confirmPassword"] = input.confirmPassword
              ? ""
              : error.confirmPassword;
          }
          break;
        case "confirmPassword":
          if (!value) {
            stateObj[name] = "Please enter Confirm Password.";
          } else if (input.password && value !== input.password) {
            stateObj[name] = "Password and Confirm Password does not match.";
          }
          break;
        default:
          break;
      }
      return stateObj;
    });
  };
  return (
    <div className="Form">
      <h4>Registration Form</h4>
      <form>
        <input
          type="text"
          name="fname"
          placeholder="Enter First Name"
          value={input.fname}
          onChange={onInputChange}
          onBlur={validateInput}
        ></input>
        {error.fname && <span className="err">{error.fname}</span>}

        <input
          type="text"
          name="lname"
          placeholder="Enter Last Name"
          value={input.lname}
          onChange={onInputChange}
          onBlur={validateInput}
        ></input>
        {error.lname && <span className="err">{error.lname}</span>}

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={input.password}
          onChange={onInputChange}
          onBlur={validateInput}
        ></input>
        {error.password && <span className="err">{error.password}</span>}

        <input
          type="password"
          name="confirmPassword"
          placeholder="Enter Confirm Password"
          value={input.confirmPassword}
          onChange={onInputChange}
          onBlur={validateInput}
        ></input>
        {error.confirmPassword && (
          <span className="err">{error.confirmPassword}</span>
        )}

        <button>Submit</button>
      </form>
    </div>
  );
}

