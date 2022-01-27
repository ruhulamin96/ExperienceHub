import React, { useRef } from "react";
import { Link } from "react-router-dom";
import useAuth from '../../hooks/useAuth'
import './Login.css'


function Login() {
  const emailRef = useRef();
  const passRef = useRef();
 const {googleSignIn, loginUser, error}=useAuth()
  const handleLogin = (e) => {
    const email = emailRef.current.value;
    const password = passRef.current.value;
    const loginData = {
      email,
      password,
    };
    loginUser(email, password)
    e.preventDefault();
  };
  return (
    <div className="container form-design text_color">
       <h1 className="my-3 text-color">Login</h1>
      <form action="" className="form-child" onSubmit={handleLogin}>
        
        <div class="form-floating mb-3">
          <input
            type="email"
            class="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            ref={emailRef}
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
          />
          <label for="floatingPassword">Password</label>
        </div>
        <div>
          {error && <p className="text-danger">{error}</p>}
          <button type="submit" className="my-3 btn-card w-100">
            Submit
          </button>
     
          <p className="fs-3 text-center">
            Are you new user ?<Link to="/register">Register First</Link>
          </p>
        </div>
        <div className="text-center">
            <h3>OR</h3>
           <button className="btn-card w-75" onClick={googleSignIn}>Google SignIn</button>
        </div>
      </form>
    </div>
  );
}

export default Login;