// src/components/MultiSelectDropdown.jsx

import React, { useState, useEffect, useRef } from "react";
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
  const dropdownRef = useRef(null);

  // Notify the parent component when selectedOptions changes
  useEffect(() => {
    if (onChange) {
      onChange(selectedOptions);
    }
  }, [selectedOptions, existingSelectedOptions]);

  useEffect(() => {
    if (existingSelectedOptions) {
      setSelectedOptions(existingSelectedOptions);
    }
  }, [existingSelectedOptions]);

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleOption = (option) => {
    setSelectedOptions((prevSelected) => {
      // Check if the option is already selected based on its value
      if (prevSelected.some((selected) => selected.value === option.value)) {
        // If it is selected, remove it
        return prevSelected.filter((item) => item.value !== option.value);
      } else {
        // If it is not selected, add it
        return [...prevSelected, option];
      }
    });
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
        className="bg-uConnectLight-layer2Primary dark:bg-uConnectDark-layer2Primary border-2 border-uConnectDark-accent text-uConnectLight-textMain dark:text-uConnectDark-textMain px-4 rounded-full"
      >
        {option.label}
        <button
          type="button"
          className="text-uConnectLight-textMain dark:text-uConnectDark-textMain ml-4"
          onClick={(e) => {
            e.stopPropagation();
            removeOption(option);
          }}
        >
          &#x2715;
        </button>
      </span>
    ));
  };

  return (
    <div ref={dropdownRef} className="multi-select-dropdown w-full">
      {/* Selected tags */}

      {/* Dropdown label */}
      <div // this is VERY hardcoded lol...
        className={`dropdown-label flex rounded`}
        onClick={() => setIsOpen(!isOpen)}
        role="button"
      >
        <span className="flex flex-wrap gap-2 text-gray-500">
          {renderTags() || label}
        </span>
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
            {filteredOptions.map((option) => {
              // Log the current selectedOptions and the current option being mapped
              console.log("Selected Options: ", selectedOptions);
              console.log("Current Option: ", option);

              return (
                <li key={option.value} className="dropdown-option">
                  <label>
                    <input
                      type="checkbox"
                      checked={selectedOptions.some(
                        (selectedOption) =>
                          selectedOption.value === option.value
                      )}
                      onChange={() => toggleOption(option)}
                    />
                    {option.label}
                  </label>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
