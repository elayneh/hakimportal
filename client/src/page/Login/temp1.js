import React, { useState } from "react";
import { Form, Button } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { useForm } from "react-hook-form";
import "./Form.css";

export default function StaffLogin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Field className="form-field">
          <label>First Name</label>
          <input
            placeholder="First Name"
            type="text"
            {...register("fistName", {
              required: true,
              pattern: /^[a-zA-Z]+$/,
            })}
          />
        </Form.Field>
        {errors.fistName && <p>Enter Valid Name</p>}
        <Form.Field className="form-field">
          <label>Last Name</label>
          <input
            placeholder="Last Name"
            type="text"
            {...register("lastName", {
              required: true,
              pattern: /^[A-Za-z]+$/,
            })}
          />
        </Form.Field>
        {errors.lastName && <p>Enter Valid Name</p>}
        <Form.Field className="form-field">
          <label>Email</label>
          <input
            type="email"
            placeholder="email"
            {...register("email", {
              required: true,
              pattern:
                /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            })}
          />
        </Form.Field>
        {errors.email && <p>Please enter valid email address</p>}
        <Form.Field className="form-field">
          <label>Password</label>
          <input
            type="phone"
            placeholder="password"
            {...register("password", {
              required: true,
              pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,15}$/,
            })}
          />
        </Form.Field>
        {errors.password && <p>Please enter valid password </p>}
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
          />
        </Form.Field>
        {errors.tel && <p>Please enter valid phone number</p>}
        <Form.Field className="form-field">
          <label>Gender</label>
          <select
            {...register("gender", {
              required: true,
            })}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </Form.Field>
        <Form.Field className="form-field">
          <label>Age</label>
          <input
            type="number"
            min={0}
            max={150}
            placeholder="age"
            {...register("age", {
              required: true,
            })}
          />
        </Form.Field>
        <Button type="submit" className="submit-btn">
          Submit
        </Button>
      </Form>
    </div>
  );
}
