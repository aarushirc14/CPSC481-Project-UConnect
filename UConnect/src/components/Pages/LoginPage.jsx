// src/components/LoginForm.jsx

import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import navigation
import InputField from "../InputField";
import Notification from "../PopupMessage";

export default function LoginPage({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate(); // Add navigate

  const togglePassword = () => setShowPassword(!showPassword);

  const handleLogin = () => {
    setErrorMessage(""); // Reset error message

    // Check for empty fields
    if (!email.trim() || !password.trim()) {
      setErrorMessage("Please fill out all fields!");
      setShowNotification(true);
      return;
    }

    // Validate email ends with "@ucalgary.ca"
    if (!email.endsWith("@ucalgary.ca")) {
      setErrorMessage("Invalid email. Please use your @ucalgary.ca email.");
      setShowNotification(true);
      return;
    }

    onLogin(); // Proceed with login
  };

  const handleForgotPassword = () => {
    navigate("/forgot-password"); // Navigate to Forgot Password page
  };

  return (
    <div className="w-full max-w-md text-center">
      {/* Error Notification */}
      {showNotification && errorMessage && (
        <Notification
          message={errorMessage}
          type="error"
          onClose={() => setShowNotification(false)}
        />
      )}

      <div className="text-left mb-6">
        <InputField
          label="Email"
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setShowNotification(false); // Reset notification when user starts typing
          }}
        />
        <InputField
          label="Password"
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setShowNotification(false); // Reset notification when user starts typing
          }}
          togglePassword={togglePassword}
        />
        {/* Forgot Password Link */}
        <div className=" text-sm">
          <button
            onClick={handleForgotPassword}
            className="text-uConnectDark-accent hover:underline"
          >
            Forgot Password?
          </button>
        </div>
      </div>
      <button onClick={handleLogin} className="login_signup_button w-full mt-6">
        LOGIN
      </button>
    </div>
  );
}
