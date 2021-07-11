import React from "react";
import "./Login.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { db, auth } from "./firebase";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault(); //prevent page refresh

    //   firebase login
  };

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // if successfully created a new user
        console.log(auth);
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login-wrapper">
        <Link to="/">
          <img
            className="login__logo"
            alt="company logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1280px-Amazon_logo.svg.png"
          />
        </Link>

        <div className="login__container">
          <h1>Sign-in</h1>
          <form>
            <label for="email">Email</label>
            <br />
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <label for="password">Password</label>
            <br />
            <input
              type="text"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <button
              className="login__signInButton"
              type="submit"
              onClick={signIn}
            >
              Sign In
            </button>
          </form>
          <p>
            By creating an account you agree to Amazon Clone 's Terms and
            Conditions . Consult and view our Privacy Notice , our Cookie
            Statement and our policy of interest-based ads .
          </p>
        </div>
        <div className="login__divider">
          <h5>New to Amazon?</h5>
        </div>
        <button className="login__registerButton" onClick={register}>
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
