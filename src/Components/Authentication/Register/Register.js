import React, { useRef } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "../Login.css";

function Register() {
  const { createUser, error} = useAuth();
  const emailRef = useRef();
  const passRef = useRef();
  const nameRef = useRef();

  const handleLogin = (e) => {
    const email = emailRef.current.value;
    emailRef.current.value = "";
    const password = passRef.current.value;
    passRef.current.value = "";
    const loginData = {
      email,
      password,
    };
    createUser(email, password);
    e.preventDefault();
  };
  return (
    <div className="container form-design text_color">
      <h1 className="my-3 text-color">Create Account</h1>
      <form action="" className="form-child" onSubmit={handleLogin}>
        <div class="form-floating mb-3">
          <input
            type="email"
            class="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            ref={emailRef}
            required
          />
          <label for="floatingInput">Email address</label>
        </div>
        <div class="form-floating">
          <input
            type="password"
            class="form-control"
            id="floatingPassword"
            placeholder="Password"
            ref={passRef}
            required
          />
          <label for="floatingPassword">Password</label>
        </div>
        <div>
          {error && <p className="text-danger">error</p>}
          <button type="submit" className="btn-card w-100 my-3">
            Submit
          </button>

          <p className="fs-3 text-center">
            Already Registered ?<Link to="/login">Login</Link>
          </p>
        </div>
        <div className="text-center">
          <h1>OR</h1>
          <button className="btn-card w-75">Google SignIn</button>
        </div>
      </form>
    </div>
  );
}

export default Register;
