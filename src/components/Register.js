import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css"; // Ensure to import the CSS file

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = () => {
    if (!email) {
      setError("Email is required");
      return;
    }
    if (!password) {
      setError("Password is required");
      return;
    }

    // Save the user's information (in a real application, this would be saved to a backend server)
    localStorage.setItem("registeredUser", JSON.stringify({ email, password }));

    // Automatically log in the user
    localStorage.setItem("isAuthenticated", "true");

    // Redirect to the dashboard
    navigate("/dashboard");
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <h2 className="register-header">Register</h2>
        {error && <p className="error-message">{error}</p>}
        <div className="register-form">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleRegister}>Register</button>
        </div>
      </div>
    </div>
  );
};

export default Register;
