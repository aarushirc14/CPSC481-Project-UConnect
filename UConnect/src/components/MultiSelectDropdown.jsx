// src/components/MultiSelectDropdown.jsx

import React, { useState } from "react";

export default function MultiSelectDropdown({ options, label }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleOption = (option) => {
    setSelectedOptions((prevSelected) =>
      prevSelected.includes(option)
        ? prevSelected.filter((item) => item !== option)
        : [...prevSelected, option]
    );
  };

  const removeOption = (option) => {
    setSelectedOptions((prevSelected) =>
      prevSelected.filter((item) => item !== option)
    );
  };

  const renderTags = () => {
    return selectedOptions.map((option) => (
      <span key={option.value} className="tag">
        {option.label}
        <button
          type="button"
          className="tag-remove"
          onClick={() => removeOption(option)}
        >
          &#x2715;
        </button>
      </span>
    ));
  };

  return (
    <div className="multi-select-dropdown">
      {/* Selected tags */}
      <div className="selected-tags">{renderTags()}</div>

      {/* Dropdown label */}
      <div
        className="dropdown-label"
        onClick={() => setIsOpen(!isOpen)}
        role="button"
      >
        <span>{label}</span>
        <span
          className={`caret ${isOpen ? "caret-open" : "caret-closed"}`}
        >&#9662;</span>
      </div>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="dropdown-menu">
          <input
            type="text"
            className="dropdown-search"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <ul className="dropdown-options">
            {filteredOptions.map((option) => (
              <li key={option.value} className="dropdown-option">
                <label>
                  <input
                    type="checkbox"
                    checked={selectedOptions.includes(option)}
                    onChange={() => toggleOption(option)}
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
