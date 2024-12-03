// src/components/SingleSelectDropdown.jsx

import React, { useState, useEffect, useRef } from "react";

export default function SingleSelectDropdown({
  options,
  label,
  selectedOption,
  onChange,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleOptionChange = (option) => {
    onChange(option);
    setIsOpen(false); // Close the dropdown after selection
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false); // Close the dropdown
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="single-select-dropdown w-full">
      {/* Selected option */}
      <div
        className="dropdown-label rounded "
        onClick={() => setIsOpen(!isOpen)}
        role="button"
      >
        <span
          className={`text-gray-500 ${
            selectedOption ? " dark:text-uConnectLight-textMain" : ""
          }`}
        >
          {selectedOption ? selectedOption.label : label}
        </span>
        <span className={`caret ${isOpen ? "caret-open" : "caret-closed"}`}>
          &#9662;
        </span>
      </div>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="dropdown-menu">
          <ul className="dropdown-options">
            {options.map((option) => (
              <li key={option.value} className="dropdown-option">
                <label>
                  <input
                    type="radio"
                    name="single-select"
                    value={option.value}
                    checked={selectedOption?.value === option.value}
                    onChange={() => handleOptionChange(option)}
                  />
                  {option.label}
                </label>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
