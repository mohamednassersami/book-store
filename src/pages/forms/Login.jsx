import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./forms.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // Form Submit Handler
  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (email.trim() === "") return toast.error("Email is required");
    if (password.trim() === "") return toast.error("Password is required");
  };

  // Show Password Handler
  const showPasswordHandler = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div onSubmit={formSubmitHandler} className="form-wrapper">
      <ToastContainer theme="colored" />
      <h1 className="form-title">Login to your account</h1>
      <form className="form">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type={showPassword ? "text" : "Password"}
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {showPassword && (
          <i
            className="bi bi-eye-slash-fill show-password-icon"
            onClick={showPasswordHandler}
          ></i>
        )}
        {!showPassword && (
          <i
            className="bi bi-eye-fill show-password-icon"
            onClick={showPasswordHandler}
          ></i>
        )}

        <button className="form-btn">Login</button>
      </form>
      <div className="form-footer">
        Don't have an account?{" "}
        <Link to="/register" className="form-link">
          Register
        </Link>
      </div>
    </div>
  );
};

export default Login;
