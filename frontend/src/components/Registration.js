import '../style/StyleLogin.css';
import React, { useState } from "react"
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function (props) {

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatePassword, setRepeatePassword] = useState('');
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  async function registration() {
    console.log("registration", fullName, email, password, repeatePassword);
    const res = await fetch("http://localhost:8080/user/registration", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            fullName: fullName,
            email: email,
            password: password,
            repeatPassword: repeatePassword
      })
    }).then(response => {
      console.log("res: " + response);

      if(response.ok){
        console.log("response ok");

        handleClick();
      }
    });

    console.log(fullName, email, password, repeatePassword)
    if (res.status === 200) {
        setFullName("");
        setEmail("");
        setPassword("");
        setRepeatePassword("");
        setMessage("Registration successfully");
    } else {
        setMessage("Some error occured");
    }
  }

  function handleClick() {
    window.location.replace("/user/login")
  }

return (
    <div className="Auth-form-container">
      <div className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign Un</h3>
          <div className="text-center">
            Already registered?
            <Link to = "/user/login">
              <button type="submit" className="link-primary">
                Sign In
              </button>
            </Link>
          </div>
          <div className="form-group mt-3">
            <label>Full Name</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="ex Giacomo Sbaragli"
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Email Address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Repeate Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Repeate Password"
              onChange={(e) => setRepeatePassword(e.target.value)}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary" onClick={e => registration()}>
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
