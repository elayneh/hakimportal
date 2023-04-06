import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

import { Form, Button } from "semantic-ui-react";
import { useForm } from "react-hook-form";

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
      <NavBar />
      <div className="login-main" style={{ backgroundColor: "hwb(27 37% 49%)" }}>
        <h3 style={{ padding: "10% 0% 0% 40%" }}>Staff Login</h3>
        <Form
          onSubmit={handleSubmit(onSubmit)}
          action="../../../post"
          method="get"
          style={{ padding: "0% 25% 0.7% 25%" }}
        >
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
            />
            {errors.email && <p style={{color: "red"}}>Please enter valid email address</p>}
          </Form.Field>
          <Form.Field className="form-field" style={{ padding: "0% 0% 15%" }}>
            <label>Password</label>
            <input
              type="phone"
              placeholder="password"
              {...register("password", {
                required: true,
                pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,15}$/,
              })}
            />
            {errors.password && <p style={{color: "red"}}>Please enter valid password </p>}
          </Form.Field>
          <Button type="submit">
            Submit
          </Button>
          <p className="text-center mt-2" style={{ color: "black" }}>
            Forgot{" "}
            <a href="#" style={{ color: "blue" }}>
              password?
            </a>
          </p>
        </Form>
      </div>
      <Footer />
    </div>
  );
}
