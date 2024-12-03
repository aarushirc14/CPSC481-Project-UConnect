// src/components/LoginForm.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import navigation
import InputField from "../InputField"; // Assuming InputField component is being reused

export default function LoginPage({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // State for error messages
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate(); // Add navigate

  // Toggle password visibility
  const togglePassword = () => setShowPassword(!showPassword);

  // Handle login
  const handleLogin = () => {
    let isValid = true; // Track if the form is valid

    // Reset error messages
    setEmailError("");
    setPasswordError("");

    // Validate email
    if (!email.trim()) {
      setEmailError("Email is required.");
      isValid = false;
    } else if (!email.endsWith("@ucalgary.ca")) {
      setEmailError("Invalid email. Please use your @ucalgary.ca email.");
      isValid = false;
    }

    // Validate password
    if (!password.trim()) {
      setPasswordError("Password is required.");
      isValid = false;
    }

    // If validation passes, proceed with login
    if (isValid) {
      onLogin(); // Proceed with login
    }
  };

  // Handle forgot password
  const handleForgotPassword = () => {
    navigate("/forgot-password"); // Navigate to Forgot Password page
  };

  return (
    <div className="w-full max-w-md text-center">
      <div className="text-left flex flex-col gap-5">
        {/* Email Input */}
        <div>
          <InputField
            label="Email"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setEmailError(""); // Reset email error when user starts typing
            }}
            required
          />
          {/* Display error message for email */}
          {emailError && (
            <div className="mt-2 text-sm text-red-500">{emailError}</div>
          )}
        </div>

        {/* Password Input */}
        <div>
          <InputField
            label="Password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setPasswordError(""); // Reset password error when user starts typing
            }}
            togglePassword={togglePassword}
            required
          />
          {/* Display error message for password */}
          {passwordError && (
            <div className="mt-2 text-sm text-red-500">{passwordError}</div>
          )}

          {/* Forgot Password Link */}
          <div className="text-left text-sm">
            <button
              onClick={handleForgotPassword}
              className="text-uConnectDark-accent hover:underline"
            >
              Forgot Password?
            </button>
          </div>
        </div>
      </div>

      {/* Login Button */}
      <button onClick={handleLogin} className="login_signup_button w-full mt-6">
        LOGIN
      </button>
    </div>
  );
}
