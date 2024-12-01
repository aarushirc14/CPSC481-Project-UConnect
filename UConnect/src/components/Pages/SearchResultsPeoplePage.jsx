//SearchResultsPeoplePage.jsx
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Sidebar from "../Sidebar"; // Import Sidebar component
import SearchBar from "../SearchBar";
import MultiSelectDropdownFilter from "../MultiSelectDropdownFilter";
import {majorOptions, interestOptions,} from "../../data/dropdownOptions";
import kaylaWilkerson from "../../assets/profilePics/kaylaWilkerson.jpg";
import simonMann from "../../assets/profilePics/simonMann.jpg";
import jaredAllen from "../../assets/profilePics/jaredAllen.jpg";
import tenzinLopez from "../../assets/profilePics/tenzinLopez.jpg";
import kyraCosta from "../../assets/profilePics/kyraCosta.jpg";
import lucaConnors from "../../assets/profilePics/lucaConnors.jpg";

const users = [
  {
    image: kaylaWilkerson,
    name: "Kayla Wilkerson",
    majorAndYear: "Economics, 3rd Year",
    interests: "Backpacking, Hiking, Photography, Adventures"
  },
  {
    image: simonMann,
    name: "Simon Mann",
    majorAndYear: "Environmental Science, 4th Year",
    interests: "Cooking, Sports, Fitness, Traveling"
  },
  {
    image: jaredAllen,
    name: "Jared Allen",
    majorAndYear: "Enviornmental Science, 4th Year",
    interests: "Art, Drawing, Creative writing, Music"
  },
  {
    image: tenzinLopez,
    name: "Tenzin Lopez",
    majorAndYear: "Business, 3rd Year",
    interests: "Astrology, Comedy, Skiing, Videography"
  },
  {
    image: kyraCosta,
    name: "Kyra Costa",
    majorAndYear: "Mathematics, 2nd Year",
    interests: "Hiking, Karaoke, Podcasting, Running"
  },
  {
    image: lucaConnors,
    name: "Luca Connors",
    majorAndYear: "Computer Science, 2nd Year",
    interests: "Board games, Dancing, Debating, E-Sports"
  }
];


export default function SearchResultsPeoplePage() {
  const [searchResults, setSearchResults] = useState([]);
  const [selectedInterests, setSelectedInterests] = useState([]);
  const [selectedMajors, setSelectedMajors] = useState([]);
  const navigate = useNavigate();

  const handleClickPosts = () => {navigate("/search-results-posts");};
  const handleClicksPeople = () => {navigate("/search-results");};
  const handleClickChat = () => {navigate("/chats");};
  const handleClicksApplyFilters =() => {navigate("/search-results-major-and-people");};
  const handleClicksReset = () => { navigate("/search-results"); };

  const handleInterestChange = (selectedOptions) => {
    setSelectedInterests(selectedOptions);
  };

  const handleMajorChange = (selectedOptions) => {
    setSelectedMajors(selectedOptions);
  };
  const resetFilters = () => {
    setSelectedInterests([]); r
    setSelectedMajors([]); 
  };

  return (
    <div className="flex min-h-screen bg-uConnectLight-background dark:bg-uConnectDark-background text-uConnectLight-textMain dark:text-uConnectDark-textMain">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content area */}
      <main className="flex-1 p-6 mt-10 ml-40">
        {/* Search Bar */}
        <div className="sticky top-0 z-10 mb-0">
        <SearchBar placeholder={"Math 211"} />
        </div>

        {/* Filter Section */}
        <div className="mt-5 ml-4 font-bold">Filter By..</div>

        {/* Selected filters (tags) */}
        <div className="flex flex-wrap gap-2 mt-3 mb-4">
          {/* Display selected interests */}
          {selectedInterests.map((interest) => (
            <div
              key={interest.value}
              className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full flex items-center"
            >
              {interest.label}
              <button
                type="button"
                className="ml-2 text-red-500"
                onClick={() =>
                  setSelectedInterests(selectedInterests.filter(i => i !== interest))
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
              className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full flex items-center"
            >
              {major.label}
              <button
                type="button"
                className="ml-2 text-red-500"
                onClick={() =>
                  setSelectedMajors(selectedMajors.filter(m => m !== major))
                }
              >
                &#x2715;
              </button>
            </div>
          ))}
        </div>

        {/* Filter buttons */}
        <div className="grid grid-cols-4 gap-6 mb-1 h-16">
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleClickPosts();
            }}
            className="mt-4 px-4 py-2 border bg-[#C6C3C3] dark:bg-uConnectDark-background hover:dark:bg-uConnectDark-accent border-uConnectDark-accent text-uConnectLight-textMain dark:text-uConnectDark-textMain rounded-full hover:bg-uConnectDark-accent hover:text-uConnectDark-textMain hover:dark:text-uConnectLight-textMain"
          >
            Posts
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleClicksPeople();
            }}
            className="mt-4 px-4 py-2 border bg-uConnectDark-accent dark:bg-uConnectDark-accent hover:dark:bg-uConnectDark-background border-uConnectDark-accent text-uConnectDark-textMain dark:text-uConnectDark-background rounded-full hover:bg-[#C6C3C3] hover:text-uConnectLight-textMain hover:dark:text-uConnectDark-textMain">
            People
          </button>

          {/* Dropdown Filters */}
          <MultiSelectDropdownFilter
            options={interestOptions}
            label="Interests"
            existingSelectedOptions={selectedInterests}
            onChange={handleInterestChange}
          />
          <MultiSelectDropdownFilter
            options={majorOptions}
            label="Majors"
            existingSelectedOptions={selectedMajors}
            onChange={handleMajorChange}
          />
        </div>

        {/* Apply Filters Button */}
        <div className="mb-8 flex justify-end mt-8">
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleClicksApplyFilters();
            }}
            className="flex px-4 py-2 border bg-uConnectDark-accent dark:bg-uConnectDark-accent border-uConnectDark-accent text-uConnectDark-textMain dark:text-uConnectLight-textMain rounded-full hover:opacity-80 dark:hover:opacity-80"
          >
            Apply Filters
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleClicksReset();
            }}
            
            className="flex ml-4 px-4 py-2 border bg-red-500 text-white border-uConnectDark-accent rounded-full hover:opacity-80 dark:hover:opacity-80"
          >
            Reset Filters
          </button>
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
                  className="w-28 h-28 rounded-full border-2 border-[#131313] object-cover mr-6"
                />
                <div className="flex flex-col">
                  <h3 className="text-xl font-semibold text-uConnectDark-accent">{user.name}</h3>
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
