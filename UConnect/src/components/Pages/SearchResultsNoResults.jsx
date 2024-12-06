import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
//import Sidebar from "../Sidebar"; // Import Sidebar component
import SearchBar from "../SearchBar";
import MultiSelectDropdownFilter from "../MultiSelectDropdownFilter";
import { majorOptions, interestOptions } from "../../data/dropdownOptions";

export default function SearchResultsInterestsMajorPeoplePage({ setIsActive }) {
  const [selectedInterests, setSelectedInterests] = useState([
    { value: "skiing", label: "Skiing" },
    { value: "drawing", label: "Drawing" },
    { value: "cycling", label: "Cycling" },
    { value: "dancing", label: "Dancing" },
    { value: "debating", label: "Debating" },
    { value: "digital_art", label: "Digital Art" },
  ]);
  // Ensure the selectedMajors state has the correct format for the default selected value
  const [selectedMajors, setSelectedMajors] = useState([
    { value: "environmental_science", label: "Environmental Science" },
  ]);
  const navigate = useNavigate();

  const handleClickPosts = () => {
    navigate("/search-results-posts");
  };
  const handleClicksPeople = () => {
    navigate("/search-results");
  };
  const handleClickChat = () => {
    setIsActive(0);
    navigate("/chats");
  };
  const handleClicksReset = () => {
    navigate("/search-results");
  };

  const handleInterestChange = (selectedOptions) => {
    setSelectedInterests(selectedOptions);
  };

  const handleMajorChange = (selectedOptions) => {
    setSelectedMajors(selectedOptions);
  };

  const resetFilters = () => {
    setSelectedInterests([]);
    setSelectedMajors([
      { value: "environmental_science", label: "Environmental Science" },
    ]); // Reset to default major
  };

  const majorDropdownStyles = {
    backgroundColor: "#e0f7fa",
    color: "#00796b",
    padding: "10px",
    borderRadius: "8px",
    labelBackgroundColor: "#F99F28", // Background color for the label
    label: "#131313",
  };

  const isFiltersSelected =
    selectedInterests.some((interest) => interest.value === "skiing") &&
    selectedInterests.some((interest) => interest.value === "drawing") &&
    selectedMajors.some((major) => major.value === "environmental_science") &&
    selectedMajors.length === 1 &&
    selectedInterests.length === 6;

  return (
    <div className="flex min-h-screen bg-uConnectLight-background dark:bg-uConnectDark-background text-uConnectLight-textMain dark:text-uConnectDark-textMain m-auto max-w-7xl">
      {/* Sidebar */}
      {/* <Sidebar /> */}

      {/* Main content area */}
      <main className="flex-1 p-6 mt-10 ml-40">
        {/* Search Bar */}
        <div className="sticky top-0 z-10 mb-0">
          <SearchBar searched={"Math 211"} />
        </div>
        {/* Filter Section */}
        <div className="max-w-4xl m-auto">
          <div className="mb-4 text-3xl font-bold text-uConnectLight-textMain dark:text-uConnectDark-textMain">
            Search Results For "
            <span className="text-uConnectDark-accent">Math 211</span>"
          </div>

          <div className="mt-5 font-bold">Filter By:</div>

          {/* Selected filters (tags) */}
          <div className="flex flex-wrap gap-2 mt-3 mb-4 min-h-8">
            {/* Display selected interests */}
            {selectedInterests.map((interest) => (
              <div
                key={interest.value}
                className="bg-uConnectLight-layer2Primary dark:bg-uConnectDark-layer2Primary border-2 border-uConnectDark-accent text-uConnectLight-textMain dark:text-uConnectDark-textMain px-4 rounded-full"
              >
                {interest.label}
                <button
                  type="button"
                  className="text-uConnectLight-textMain dark:text-uConnectDark-textMain ml-4"
                  onClick={() =>
                    setSelectedInterests(
                      selectedInterests.filter((i) => i !== interest)
                    )
                  }
                >
                  &#x2715;
                </button>
              </div>
            ))}

            {/* Display selected majors */}
            {selectedMajors.map((major) => (
              <div
                key={major.value}
                className="bg-uConnectLight-layer2Primary dark:bg-uConnectDark-layer2Primary border-2 border-uConnectDark-accent text-uConnectLight-textMain dark:text-uConnectDark-textMain px-4 rounded-full"
              >
                {major.label}
                <button
                  type="button"
                  className="text-uConnectLight-textMain dark:text-uConnectDark-textMain ml-4"
                  onClick={() =>
                    setSelectedMajors(selectedMajors.filter((m) => m !== major))
                  }
                >
                  &#x2715;
                </button>
              </div>
            ))}
          </div>

          {/* Filter buttons */}
          <div className="grid grid-cols-4 gap-6 mb-1">
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleClickPosts();
              }}
              className=" hover:underline h-12 px-4 py-2 border bg-[#C6C3C3] dark:bg-uConnectDark-background border-uConnectDark-accent text-uConnectLight-textMain dark:text-uConnectDark-textMain rounded-full "
            >
              Posts
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleClicksPeople();
              }}
              className=" hover:underline h-12 px-4 py-2 border bg-uConnectDark-accent dark:bg-uConnectDark-accent border-uConnectDark-accent text-uConnectDark-textMain dark:text-uConnectDark-background rounded-full "
            >
              People
            </button>

            {/* Dropdown Filters */}
            <MultiSelectDropdownFilter
              options={interestOptions}
              label="Interests"
              existingSelectedOptions={selectedInterests}
              onChange={handleInterestChange}
              style={majorDropdownStyles}
            />
            <MultiSelectDropdownFilter
              options={majorOptions}
              label="Majors"
              existingSelectedOptions={selectedMajors}
              onChange={handleMajorChange}
              style={majorDropdownStyles}
            />
          </div>

          {/* Apply Filters Button */}
          <div className="flex justify-start">
            <div className="mb-8 flex justify-start mt-4 group relative">
              {/* Apply Filters Button */}
              <button
                className="flex px-4 py-2 border disabled:bg-transparent disabled:cursor-not-allowed disabled:dark:border-uConnectDark-layer3 disabled:dark:text-uConnectDark-textSub disabled:text-uConnectLight-textSub disabled:dark:bg-uConnectDark-background bg-uConnectDark-accent dark:bg-uConnectDark-accent border-uConnectDark-accent text-uConnectDark-textMain dark:text-uConnectLight-textMain rounded-xl hover:opacity-80 dark:hover:opacity-80"
                disabled={isFiltersSelected}
              >
                Apply Filters
              </button>

              {/* Tooltip: Only show on hover when button is disabled */}
              {isFiltersSelected && (
                <div className="absolute transform bottom-full mb-3 bg-uConnectLight-layer2Primary dark:bg-uConnectDark-layer2Primary text-uConnectLight-textMain dark:text-uConnectDark-layer3 text-xs rounded-md px-2 py-1 whitespace-nowrap shadow-md z-10 hidden group-hover:block">
                  You have already applied these filters!
                </div>
              )}
            </div>
            <div className="mb-8 flex justify-start mt-4 group relative">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleClicksReset();
                }}
                className="flex ml-4 px-4 py-2 border bg-red-500 text-white border-none rounded-xl hover:opacity-80 dark:hover:opacity-80"
              >
                Reset Filters
              </button>
            </div>
          </div>
        </div>
        {/* No Results Section */}
        <div className="flex justify-center items-center mt-12 p-6 bg-uConnectLight-layer2Primary dark:bg-uConnectDark-layer2Primary rounded-lg shadow-lg">
          <div className="text-center">
            <div className="text-xl font-semibold text-uConnectLight-textMain dark:text-uConnectDark-textMain">
              No Results Found
            </div>
            <p className="mt-2 text-uConnectLight-textSub dark:text-uConnectDark-textSub">
              It seems like there are no results matching your search and
              filters.
            </p>
            <p className="mt-2 text-uConnectLight-textSub dark:text-uConnectDark-textSub">
              Try removing some filters or searching for something else.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
