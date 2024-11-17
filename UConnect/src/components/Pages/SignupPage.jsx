// src/components/SignupPage.jsx

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../InputField";
import Notification from "../PopupMessage"; 

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showNotification, setShowNotification] = useState(false); // State for error notification

  const navigate = useNavigate(); // Navigation function

  const togglePassword = () => setShowPassword(!showPassword);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignup = (e) => {
    e.preventDefault();

    const { email, password, confirmPassword } = formData;

    // Validate all fields are filled
    if (!email || !password || !confirmPassword) {
      setShowNotification(true); // Show error notification
      setTimeout(() => setShowNotification(false), 3000); // Auto-hide after 3 seconds
      return;
    }

    // Navigate to the profile creation page if all fields are valid
    navigate("/create-profile");
  };

  return (
    <div className="w-full max-w-md text-center">
      {/* Error Notification */}
      {showNotification && (
        <Notification
          message="Please fill out all fields!"
          type="error"
          onClose={() => setShowNotification(false)} // Allow manual close
        />
      )}
      
      <div className="text-left">
        <InputField
          label="UCalgary Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <InputField
          label="Password"
          type={showPassword ? "text" : "password"}
          name="password"
          value={formData.password}
          onChange={handleChange}
          togglePassword={togglePassword}
        />
        <InputField
          label="Confirm Password"
          type={showPassword ? "text" : "password"}
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          togglePassword={togglePassword}
        />
      </div>
      <button
        className="login_signup_button w-full mt-6"
        onClick={handleSignup}
      >
        SIGN UP
      </button>
    </div>
  );
}
