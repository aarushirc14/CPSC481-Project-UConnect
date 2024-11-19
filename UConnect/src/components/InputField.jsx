// src/components/InputField.jsx

import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import eye icons from react-icons

export default function InputField({ label, type, name, value, onChange }) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setIsPasswordVisible((prevState) => !prevState); // Toggle the password visibility state
  };

  return (
    <div className="mb-6">
      <label className="login_signup_form_label block text-sm mb-2">
        {label.toUpperCase()}
      </label>
      <div className="relative">
        <input
          type={isPasswordVisible && type === "password" ? "text" : type} // Toggle between "text" and "password"
          name={name} // Form field name
          value={value} // Controlled value
          onChange={onChange} // Handle input changes
          className="login_signup_input_field w-full"
        />
        {type === "password" && (
          <span
            onClick={handleTogglePasswordVisibility} // Toggle visibility
            className="absolute right-3 top-3 cursor-pointer text-uConnectDark-accent"
          >
            {isPasswordVisible ? <FaEye /> : <FaEyeSlash />} {/* Fix eye icon logic */}
          </span>
        )}
      </div>
    </div>
  );
}
