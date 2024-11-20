// src/components/MultiSelectDropdown.jsx

import React, { useState, useEffect } from "react";
import { FaSearch, FaPlusCircle } from "react-icons/fa";

export default function MultiSelectDropdown({
  options,
  label,
  existingSelectedOptions,
  onChange,
}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedOptions, setSelectedOptions] = useState(
    existingSelectedOptions || []
  );
  const [isOpen, setIsOpen] = useState(false);

  // Notify the parent component when selectedOptions changes
  useEffect(() => {
    if (onChange) {
      onChange(selectedOptions);
    }
  }, [selectedOptions, existingSelectedOptions]);

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
    if (selectedOptions.length <= 0) return null;
    return selectedOptions.map((option) => (
      <span
        key={option.value}
        className="bg-uConnectLight-layer2Primary dark:bg-uConnectDark-layer2Primary border-2 border-uConnectDark-accent text-uConnectLight-textMain dark:text-uConnectDark-textMain px-4 py-1 rounded-full"
      >
        {option.label}
        <button
          type="button"
          className="text-uConnectLight-textMain dark:text-uConnectDark-textMain ml-4"
          onClick={() => removeOption(option)}
        >
          &#x2715;
        </button>
      </span>
    ));
  };

  return (
    <div className="multi-select-dropdown w-full">
      {/* Selected tags */}

      {/* Dropdown label */}
      <div
        className="dropdown-label flex rounded"
        onClick={() => setIsOpen(!isOpen)}
        role="button"
      >
        <span className="flex flex-wrap gap-2">{renderTags() || label}</span>
        <span
          className={`caret self-end ${isOpen ? "caret-open" : "caret-closed"}`}
        >
          &#9662;
        </span>
      </div>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="dropdown-menu">
          <div className="dropdown-search-wrapper flex items-center bg-[#E0E0E0] p-2 rounded">
            <FaSearch className="text-gray-500" />
            <input
              type="text"
              className="dropdown-search flex-1 bg-transparent border-none outline-none text-uConnectDark-textMain dark:text-uConnectLight-textMain"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

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
