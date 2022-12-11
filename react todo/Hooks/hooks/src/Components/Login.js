import React from "react";
import { useRef } from "react";

export default function Login() {
  let emailInput = useRef(null);
  let passwordInput = useRef(null);
  const postlogin = (event) => {
    event.preventDefault();
    let formData = {
      email: emailInput.current.value,
      password: passwordInput.current.value,
    };
    console.log(formData);
  };
  return (
    <>
      <h1>Form for login using useRef</h1>
      <form onSubmit={postlogin}>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            ref={emailInput}
            placeholder="email..."
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            ref={passwordInput}
            placeholder="password..."
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}
