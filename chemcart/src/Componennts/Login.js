import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles/Login.module.scss";
import chemiLogo from '../images/chemi.jpeg';  
import Header from "./header/Header";  // Ensure this path is correct based on your project structure
import Footer from "./footer/Footer";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    // Remove any previous invalid classes
    document.getElementById("username-input").classList.remove(styles["login-invalid"]);
    document.getElementById("password-input").classList.remove(styles["login-invalid"]);

    if (username && password) {
      // Simulate successful login by just navigating to the homepage
      console.log("Login Successful", username, password);  // Log the credentials for demonstration
      navigate("/");  // Navigate to the homepage or dashboard as per route setup
    } else {
      // Apply invalid classes if fields are empty
      document.getElementById("username-input").classList.add(styles["login-invalid"]);
      document.getElementById("password-input").classList.add(styles["login-invalid"]);
      setErrorMessage("Please enter both username and password.");
    }
  };

  return (
    <div>
      <Header /> 
      <div className={styles["login-container"]}>
        <div className={styles["login-logo"]}>
          <a href="/">
            <img
              className={styles["login-logo-image"]}
              src={chemiLogo}
              alt="Chemi Logo"
            />
          </a>
        </div>
        <span className={styles["login-vertical-divider"]}></span>
        <div className={styles["login-form-container"]}>
          <form onSubmit={handleLogin}>
            <h1 className={styles["login-header"]}>Login</h1>
            <div>
              <input
                id="username-input"
                type="text"
                placeholder="Username"
                onChange={handleUsername}
                className={styles["login-input"]}
              />
            </div>
            <div>
              <input
                id="password-input"
                type="password"
                placeholder="Password"
                onChange={handlePassword}
                className={styles["login-input"]}
              />
            </div>
            {errorMessage && (
              <div className={styles["login-error-message"]}>{errorMessage}</div>
            )}
            <button
              className={styles["login-submit-button"]}
              type="submit"
            >
              Sign In
            </button>
            <div className={styles["login-links"]}>
              <a href="/register">Don't have an account?</a>
              <a href="/">Back to Home</a>
            </div>
          </form>
        </div>
      </div>
  
    </div>
  );
}

export default Login;
