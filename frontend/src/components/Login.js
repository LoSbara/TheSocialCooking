import '../style/StyleLogin.css';
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function (props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState("");

  async function login() {
    console.log("login", email, password);
    const res = await fetch("http://localhost:8080/user/login", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: email,
            password: password
      })
    }).then(response => {
      console.log("res: " + response);

      if(response.ok){
        console.log("response ok");

        window.location.replace("/")
      }
    });

    console.log(email, password)
    if (res.status === 200) {
        setEmail("");
        setPassword("");
        setMessage("Login successfully");
    } else {
        setMessage("Some error occured");
    }
  }

  function handleClick() {
    window.location.replace("/user/registration")
  }

    return (
      <div className="Auth-form-container">
        <div className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="text-center">
              Not registered yet?{" "}
              <Link to = "/user/registration">
                <button type="submit" className="link-primary">
                  Sign Up
                </button>
              </Link>
            </div>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button className="btn btn-primary" onClick={e => login()}>
                Submit
              </button>
            </div>
            <p className="text-center mt-2">
              Forgot <a href="#">password?</a>
            </p>
          </div>
        </div>
      </div>
    )
}