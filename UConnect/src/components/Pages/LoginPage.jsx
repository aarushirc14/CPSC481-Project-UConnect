// src/components/LoginForm.jsx
import React, { useState } from "react";
import InputField from "../InputField";
import Notification from "../PopupMessage"; // Import the notification component

export default function LoginPage({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  const togglePassword = () => setShowPassword(!showPassword);

  const handleLogin = () => {
    if (!email.trim() || !password.trim()) {
      setShowNotification(true); // Show error notification
      setTimeout(() => setShowNotification(false), 3000); // Hide after 3 seconds
      return;
    }
    onLogin(); // Proceed with login
  };

  return (
    <div className="w-full max-w-md text-center">
      {/* Error Notification */}
      {showNotification && (
        <Notification
          message="Please fill out all fields!"
          type="error"
          onClose={() => setShowNotification(false)}
        />
      )}

      <div className="text-left">
        <InputField
          label="UCalgary Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputField
          label="Password"
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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
