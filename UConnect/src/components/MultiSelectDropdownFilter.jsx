import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";

export default function MultiSelectDropdownFilter({
  options,
  label,
  existingSelectedOptions,
  onChange,
  style,
}) {
  const [searchTerm, setSearchTerm] = useState("");
  // Check if dropdown is open
  const [isOpen, setIsOpen] = useState(false);

  // Check if an item is selected
  const isSelected = (option) => {
    return !!existingSelectedOptions.find(
      (selected) => selected.value === option.value
    );
  };

  const toggleOption = (option) => {
    if (isSelected(option)) {
      onChange(existingSelectedOptions.filter((o) => o.value !== option.value));
    } else {
      onChange([...existingSelectedOptions, option]);
    }
  };

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="multi-select-dropdown w-full">
      {/* Dropdown Label */}
      <div
        className="dropdown-label justify-center items-center rounded-full border dark:bg-uConnectDark-background hover:dark:bg-uConnectDark-accent border-uConnectDark-accent text-uConnectLight-textMain dark:text-uConnectDark-textMain hover:bg-uConnectDark-accent hover:text-uConnectDark-textMain hover:dark:text-uConnectLight-textMain cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
        role="button"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          height: "5px",
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          position: "relative",
          backgroundColor: style?.labelBackgroundColor || "",
          color: style?.label || "",
        }}
      >
        <div
          className="flex-grow flex justify-center gap-2"
          style={{ flexWrap: "nowrap", overflow: "hidden" }}
        >
          {label}
        </div>
        {/* Caret Icon */}
        <div
          className={`caret self-end ${isOpen ? "caret-open" : "caret-closed"}`}
        >
          &#9662;
        </div>
      </div>
      {/* Checking if dropdown is open and display dropdown menu */}
      {isOpen && (
        <div className="dropdown-menu">
          {/* Search bar inside menu */}
          <div className="dropdown-search-wrapper flex items-center bg-[#E0E0E0] rounded mt-2">
            <FaSearch className="text-gray-500" />
            {/* Setup for each option */}
            <input
              type="text"
              className="dropdown-search flex-1 bg-transparent border-none outline-none text-uConnectDark-textMain dark:text-uConnectLight-textMain"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          {/* List for filtered options */}
          <ul className="dropdown-options mt-2">
            {filteredOptions.map((option) => (
              <li key={option.value} className="dropdown-option">
                <label>
                  <input
                    type="checkbox"
                    checked={isSelected(option)}
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
