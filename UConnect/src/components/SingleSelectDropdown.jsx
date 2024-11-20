// src/components/SingleSelectDropdown.jsx

import React, { useState } from "react";

export default function SingleSelectDropdown({
  options,
  label,
  selectedOption,
  onChange,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionChange = (option) => {
    onChange(option);
    setIsOpen(false); // Close the dropdown after selection
  };

  return (
    <div className="single-select-dropdown w-full">
      {/* Selected option */}
      <div
        className="dropdown-label rounded"
        onClick={() => setIsOpen(!isOpen)}
        role="button"
      >
        <span>{selectedOption ? selectedOption.label : label}</span>
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
