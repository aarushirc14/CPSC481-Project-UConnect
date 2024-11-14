// src/components/SignupForm.jsx
import { useState } from "react";
import InputField from "./InputField";

export default function SignupForm() {
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => setShowPassword(!showPassword);

  return (
    <div className="w-full max-w-md text-center">
      <div className="flex justify-center space-x-8 mb-4 text-lg font-semibold">
        <h2 className="login_signup_form_label border-b-2 border-[#FC9D04] pb-2 cursor-pointer">
          SIGN UP
        </h2>
        <h2 className="text-gray-500 pb-2 cursor-pointer">LOGIN</h2>
      </div>
      <div className="text-left">
        <InputField label="First Name" type="text" />
        <InputField label="Last Name" type="text" />
        <InputField label="School Email" type="email" />
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
