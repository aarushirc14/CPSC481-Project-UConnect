// src/components/SignupPage.jsx

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../InputField";
import Notification from "../PopupMessage"; // Assuming you have a notification component

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errorMessage, setErrorMessage] = useState(""); // State for error messages
  const [passwordsMatch, setPasswordsMatch] = useState(false); // State to track if passwords match

  const navigate = useNavigate(); // Navigation function

  // Regular expression for password validation
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  // Toggle password visibility
  const togglePassword = () => setShowPassword(!showPassword);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear error message when user starts typing
    if (errorMessage) {
      setErrorMessage("");
    }

    // If user is typing in confirmPassword, check if passwords match
    if (name === "confirmPassword") {
      setPasswordsMatch(value === formData.password);
    }

    // If user is typing in password, also check if confirmPassword matches
    if (name === "password") {
      setPasswordsMatch(value === formData.confirmPassword);
    }
  };

  // Handle form submission
  const handleSignup = (e) => {
    e.preventDefault();

    const { email, password, confirmPassword } = formData;

    // Validate all fields are filled
    if (!email || !password || !confirmPassword) {
      setErrorMessage("Please fill out all fields!");
      return;
    }

    // Validate email ends with "@ucalgary.ca"
    if (!email.endsWith("@ucalgary.ca")) {
      setErrorMessage("Please enter a valid @ucalgary.ca email address.");
      return;
    }

    // Validate password strength
    if (!passwordRegex.test(password)) {
      setErrorMessage(
        "Password must be at least 8 characters long and include uppercase, lowercase, number, and special character."
      );
      return;
    }

    // Validate passwords match
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    // If all validations pass, clear error and navigate to profile creation
    setErrorMessage("");
    navigate("/create-profile");
  };

  return (
    <div className="w-full max-w-md text-center">
      {/* Error Notification */}
      {errorMessage && (
        <Notification
          message={errorMessage}
          type="error"
          onClose={() => setErrorMessage("")} // Allow manual close
        />
      )}

      <form onSubmit={handleSignup} className="text-left">
        <InputField
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <InputField
          label="Password"
          type={showPassword ? "text" : "password"}
          name="password"
          value={formData.password}
          onChange={handleChange}
          togglePassword={togglePassword}
          required
        />
        <InputField
          label="Confirm Password"
          type={showPassword ? "text" : "password"}
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          togglePassword={togglePassword}
          required
        />

        {/* Password Match Message */}
        {formData.confirmPassword && (
          <div className="mt-2 text-sm">
            {passwordsMatch ? (
              <span className="text-green-500">Passwords match!</span>
            ) : (
              <span className="text-red-500">Passwords do not match.</span>
            )}
          </div>
        )}

        <button
          type="submit"
          className="login_signup_button w-full mt-6"
        >
          SIGN UP
        </button>
      </form>
    </div>
  );
}

