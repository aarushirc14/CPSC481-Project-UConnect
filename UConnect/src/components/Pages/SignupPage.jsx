// src/components/SignupForm.jsx
import { useState } from "react";
import InputField from "../InputField";

export default function SignupForm() {
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => setShowPassword(!showPassword);

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
      <button className="login_signup_button w-full mt-6">
        SIGN UP
      </button>
    </div>
  );
}
