import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css"; // Ensure to import the CSS file

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const validateForm = () => {
    if (!email) {
      setError("Email is required");
      return false;
    }
    if (!password) {
      setError("Password is required");
      return false;
    }
    return true;
  };

  const handleLogin = () => {
    setError(""); // Clear previous error message
    if (!validateForm()) return;

    // Retrieve the registered user information
    const registeredUser = JSON.parse(localStorage.getItem("registeredUser"));

    if (!registeredUser || email !== registeredUser.email) {
      setError("Incorrect email");
    } else if (password !== registeredUser.password) {
      setError("Incorrect password");
    } else {
      localStorage.setItem("isAuthenticated", "true");
      navigate("/dashboard");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-header">Login</h2>
        {error && <p className="error-message">{error}</p>}
        <table className="login-form">
          <tbody>
            <tr>
              <td>Email:</td>
              <td>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>Password:</td>
              <td>
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <button onClick={handleLogin}>Login</button>
              </td>
            </tr>
          </tbody>
        </table>
        <p>
          Don't have an account? <Link to="/register">Register here</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
