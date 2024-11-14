// src/components/InputField.jsx
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import eye icons from react-icons

export default function InputField({ label, type }) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <div className="mb-6">
      <label className="login_signup_form_label block text-sm mb-2">
        {label.toUpperCase()}
      </label>
      <div className="relative">
        <input
          type={isPasswordVisible ? "text" : type}
          className="login_signup_input_field w-full"
        />
        {label.toLowerCase().includes("password") && (
          <span
            onClick={togglePasswordVisibility}
            className="absolute right-3 top-3 cursor-pointer text-[#FC9D04]"
          >
            {isPasswordVisible ? <FaEye /> : <FaEyeSlash />}
          </span>
        )}
      </div>
    </div>
  );
}
