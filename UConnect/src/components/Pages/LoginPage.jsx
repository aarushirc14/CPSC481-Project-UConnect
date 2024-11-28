// src/components/LoginForm.jsx

import React, { useState } from "react";
import InputField from "../InputField";
import Notification from "../PopupMessage";

export default function LoginPage({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const togglePassword = () => setShowPassword(!showPassword);

  const handleLogin = () => {
    // Clear previous error messages
    setErrorMessage("");

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

    // If all validations pass, proceed with login
    onLogin();
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

      <div className="text-left">
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
      </div>
      <button
        onClick={handleLogin}
        className="login_signup_button w-full mt-6"
      >
        LOGIN
      </button>
    </div>
  );
}
