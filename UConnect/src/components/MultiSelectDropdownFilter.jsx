import React, { useState, useEffect } from "react";
import { FaSearch, FaPlusCircle } from "react-icons/fa";

export default function MultiSelectDropdownFilter({
  options,
  label,
  existingSelectedOptions,
  onChange,
  style
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

  const removeAllOptions = () => {
    setSelectedOptions([]);
  };

  return (
    <div className="multi-select-dropdown w-full" >
      {/* Dropdown label */}
      <div
        className="dropdown-label justify-center items-center rounded-full border dark:bg-uConnectDark-background hover:dark:bg-uConnectDark-accent border-uConnectDark-accent text-uConnectLight-textMain dark:text-uConnectDark-textMain hover:bg-uConnectDark-accent hover:text-uConnectDark-textMain hover:dark:text-uConnectLight-textMain cursor-pointer mt-3"
        onClick={() => setIsOpen(!isOpen)}
        role="button"
        style={{
          display: 'flex',
          alignItems: 'center', // Vertically center content
          justifyContent: 'space-between', // Ensure space between label and caret
          width: '100%', // Full width of the parent container
          height: '60px', // Fixed height for the label
          overflow: 'hidden', // Hide any overflow that occurs
          textOverflow: 'ellipsis', // Truncate text if it overflows
          whiteSpace: 'nowrap', // Prevent text wrapping
          position: 'relative', // For caret positioning
          backgroundColor: style?.labelBackgroundColor || '',
          color: style?.label || '',
        }}
      >
        <div className="flex-grow flex justify-center gap-2" style={{ flexWrap: 'nowrap', overflow: 'hidden' }}>
          {label}
        </div>
        <div className={`caret self-end ${isOpen ? "caret-open" : "caret-closed"}`}>
          &#9662;
        </div>
      </div>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="dropdown-menu">
          {/* Selected options at the top */}
          {/*{selectedOptions.length > 0 && (
            <div className="selected-options p-2 bg-[#E0E0E0] rounded">
              <span className="font-semibold">Selected:</span>
              <div className="flex flex-wrap gap-2 mt-1">
                {selectedOptions.map((option) => (
                  <div
                    key={option.value}
                    className="selected-option bg-uConnectLight-layer2Primary dark:bg-uConnectDark-layer2Primary border-2 border-uConnectDark-accent text-uConnectLight-textMain dark:text-uConnectDark-textMain px-4 py-2 rounded-full flex items-center"
                  >
                    {option.label}
                    <button
                      type="button"
                      className="ml-2 text-uConnectLight-textMain dark:text-uConnectDark-textMain"
                      onClick={() => removeOption(option)}
                    >
                      &#x2715;
                    </button>
                  </div>
                ))}
              </div>
              */}
              
              {/* "Remove All" button */}
              {/* <button
                type="button"
                className="remove-all-btn mt-2 text-uConnectLight-textMain dark:text-uConnectDark-textMain font-semibold"
                onClick={removeAllOptions}
                style={{
                  backgroundColor: '#FF0000',  // Red color for visibility
                  color: '#fff',
                  padding: '8px 12px',
                  borderRadius: '4px',
                  cursor: 'pointer',
                }}
              >
                Clear All
              </button>
            </div>
          )} */}

          {/* Search input */}
          <div className="dropdown-search-wrapper flex items-center bg-[#E0E0E0] p-2 rounded mt-2">
            <FaSearch className="text-gray-500" />
            <input
              type="text"
              className="dropdown-search flex-1 bg-transparent border-none outline-none text-uConnectDark-textMain dark:text-uConnectLight-textMain"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Filterable options */}
          <ul className="dropdown-options mt-2">
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
