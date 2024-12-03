import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
//import Sidebar from "../Sidebar"; // Import Sidebar component
import SearchBar from "../SearchBar";
import MultiSelectDropdownFilter from "../MultiSelectDropdownFilter";
import { majorOptions, interestOptions } from "../../data/dropdownOptions";
//import kaylaWilkerson from "../../assets/profilePics/kaylaWilkerson.jpg";
//import simonMann from "../../assets/profilePics/simonMann.jpg";
//import jaredAllen from "../../assets/profilePics/jaredAllen.jpg";
import tenzinLopez from "../../assets/profilePics/tenzinLopez.jpg";
//import kyraCosta from "../../assets/profilePics/kyraCosta.jpg";
//import lucaConnors from "../../assets/profilePics/lucaConnors.jpg";
import imaniBates from "../../assets/profilePics/imaniBates.jpg";
import kaiSon from "../../assets/profilePics/kaiSon.jpg";
import harrisonYang from "../../assets/profilePics/harrisonYang.jpg";
import jamesBraun from "../../assets/profilePics/jamesBraun.jpg";
import kenzieSmith from "../../assets/profilePics/kenzieSmith.jpg";

const users = [
  {
    image: tenzinLopez,
    name: "Tenzin Lopez",
    majorAndYear: "Environmental Science, 3rd Year",
    interests: "Astrology, Drawing, Comedy, Skiing, Videography",
  },
  {
    image: kaiSon,
    name: "Kai Son",
    majorAndYear: "Environmental Science, 2nd Year",
    interests: "3D Printing, Drawing, Comedy, Skiing, Videography",
  },
  {
    image: imaniBates,
    name: "Imani Bates",
    majorAndYear: "Environmental Science, 3rd Year",
    interests: "Cycling, Drawing, Martial Arts, Movie Club, Skiing",
  },
  {
    image: harrisonYang,
    name: "Harrison Yang",
    majorAndYear: "Environmental Science, 2nd Year",
    interests: "Cycling, Drawing, Baking, Skiing",
  },
  {
    image: jamesBraun,
    name: "James Braun",
    majorAndYear: "Environmental Science, 4th Year",
    interests: "Cooking, Drawing, Gardening, Movie Club, Skiing",
  },
  {
    image: kenzieSmith,
    name: "Kenzie Smith",
    majorAndYear: "Environmental Science, 1st Year",
    interests: "Gaming, Drawing, Community Service, Skiing",
  },
];

export default function SearchResultsInterestsMajorPeoplePage({ setIsActive }) {
  const [selectedInterests, setSelectedInterests] = useState([
    { value: "skiing", label: "Skiing" },
    { value: "drawing", label: "Drawing" },
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
          <div className="mb-8 flex justify-start mt-4">
            <button className="flex px-4 py-2 border bg-uConnectDark-accent dark:bg-uConnectDark-accent border-uConnectDark-accent text-uConnectDark-textMain dark:text-uConnectLight-textMain rounded-xl hover:opacity-80 dark:hover:opacity-80">
              Apply Filters
            </button>
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

        {/* Grid of Profiles */}
        <div className="grid grid-cols-2 gap-6 mb-8">
          {users.map((user, index) => (
            <div
              key={index}
              className="bg-uConnectLight-layer2Primary dark:bg-uConnectDark-layer2Primary p-6 rounded-lg text-left transition relative flex items-start w-full cursor-pointer"
            >
              <Link to={`/profile/${user.id}`} className="flex items-center">
                <img
                  src={user.image}
                  alt={`${user.name}`}
                  className="w-24 h-24 rounded-full border-2 border-[#131313] object-cover mr-6"
                />
                <div className="flex flex-col">
                  <h3 className="text-xl font-semibold text-uConnectDark-accent">
                    {user.name}
                  </h3>
                  <p className="text-uConnectLight-textMain dark:text-uConnectDark-textMaintext-uConnectLight-textSub dark:text-uConnectDark-textSub mb-2">
                    {user.majorAndYear}
                  </p>
                  <p className="text-uConnectLight-textMain dark:text-uConnectDark-textMain break-words">
                    {"Interests: " + user.interests}
                  </p>
                </div>
              </Link>
              <div className="ml-auto">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleClickChat();
                  }}
                  className="mt-4 px-4 py-2 border border-uConnectDark-accent text-uConnectLight-textMain dark:text-uConnectDark-textMain rounded-full hover:bg-uConnectDark-accent hover:text-uConnectDark-textMain hover:dark:text-uConnectLight-textMain"
                >
                  Chat
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
