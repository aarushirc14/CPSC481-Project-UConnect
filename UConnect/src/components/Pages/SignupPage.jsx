// src/components/SignupForm.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../InputField";

export default function SignupForm() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate(); // Correctly define navigate function

  const togglePassword = () => setShowPassword(!showPassword);

  // Handle signup action
  const handleSignup = () => {
    // Perform any signup validation here if needed
    // Navigate to the profile creation page
    navigate("/create-profile"); // Use correct path
  };

  return (
    <div className="w-full max-w-md text-center">
      <div className="text-left">
        <InputField label="First Name" type="text" />
        <InputField label="Last Name" type="text" />
        <InputField label="UCalgary Email" type="email" />
        <InputField
          label="Password"
          type={showPassword ? "text" : "password"}
          togglePassword={togglePassword}
        />
        <InputField
          label="Confirm Password"
          type={showPassword ? "text" : "password"}
          togglePassword={togglePassword}
        />
      </div>
      <button
        className="login_signup_button w-full mt-6"
        onClick={handleSignup} // Add onClick event to navigate on signup
      >
        SIGN UP
      </button>
    </div>
  );
}
