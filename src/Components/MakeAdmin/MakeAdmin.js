import axios from "axios";
import React, { useRef } from "react";
import "./MakeAdmin.css";
function MakeAdmin() {
  const emailRef = useRef();
  const makeAdmin = (e) => {
    const email = emailRef.current.value;
    emailRef.current.value = "";
    axios
      .post(`https://glacial-basin-60167.herokuapp.com/admin`, { email })
      .then(() => {
        alert("Make Admin Successfully");
      });
    e.preventDefault();
  };
  return (
    <div className="container admin-design w-75">
      <h1 className="my-3 text-color fw-bold">Make an Admin</h1>
      <div className="row">
        <form onSubmit={makeAdmin}>
          <div class="input-group mb-3">
            <input
              ref={emailRef}
              type="email"
              class="form-control"
              placeholder="Email Address"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              required
            />
            <button type="submit" className="btn-card">
              <span id="basic-addon2">Submit</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default MakeAdmin;
