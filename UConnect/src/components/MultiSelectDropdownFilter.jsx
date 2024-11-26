// src/components/MultiSelectDropdownFilter.jsx

import React, { useState, useEffect } from "react";
import { FaSearch, FaPlusCircle } from "react-icons/fa";

export default function MultiSelectDropdownFilter({
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
  }, [selectedOptions]);

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
      <div
        key={option.value}
        className="bg-uConnectLight-layer2Primary dark:bg-uConnectDark-layer2Primary border-2 border-uConnectDark-accent text-uConnectLight-textMain dark:text-uConnectDark-textMain px-4 py-2 rounded-full text-center"
      >
        {option.label}
        <button
          type="button"
          className="text-uConnectLight-textMain dark:text-uConnectDark-textMain"
          onClick={() => removeOption(option)}
        >
          &#x2715;
        </button>
      </div>
    ));
  };

  return (
    <div className="multi-select-dropdown w-full">
      {/* Selected tags */}

      {/* Dropdown label */}
      <div
        className="dropdown-label flex justify-center items-center rounded-full border dark:bg-uConnectDark-background hover:dark:bg-uConnectDark-accent border-uConnectDark-accent text-uConnectLight-textMain dark:text-uConnectDark-textMain hover:bg-uConnectDark-accent hover:text-uConnectDark-textMain hover:dark:text-uConnectLight-textMain cursor-pointer mt-3"
        onClick={() => setIsOpen(!isOpen)}
        role="button"
      >
        <div className="flex-grow flex justify-center gap-2">{renderTags() || label}</div>
        <div
          className={`caret self-end ${isOpen ? "caret-open" : "caret-closed"}`}
        >
          &#9662;
        </div>
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
