// src/components/LoginForm.jsx
import React, { useState } from "react";
import InputField from "./InputField";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => setShowPassword(!showPassword);

  return (
    <div className="w-full max-w-md text-center">
      <div className="text-left">
        <InputField label="School Email" type="email" />
        <InputField
          label="Password"
          type={showPassword ? "text" : "password"}
          togglePassword={togglePassword}
        />
      </div>
      <button className="login_signup_button w-full mt-6">
        LOGIN
      </button>
    </div>
  );
}
