//SearchResultsPage.jsx
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
//import Sidebar from "../Sidebar"; // Import Sidebar component
import SearchBar from "../SearchBar";
import MultiSelectDropdownFilter from "../MultiSelectDropdownFilter";
import { majorOptions, interestOptions } from "../../data/dropdownOptions";
import kaylaWilkerson from "../../assets/profilePics/kaylaWilkerson.jpg";
import simonMann from "../../assets/profilePics/simonMann.jpg";
import jaredAllen from "../../assets/profilePics/jaredAllen.jpg";
import tenzinLopez from "../../assets/profilePics/tenzinLopez.jpg";
import leoCarter from "../../assets/profilePics/leoCarter.jpg";
import leoCarterPost from "../../assets/profilePics/leoCarterPost.webp";
import emmaLang from "../../assets/profilePics/emmaLang.jpg";
import emmaLangPost from "../../assets/profilePics/emmaLangPost.jpg";

const users = [
  {
    image: kaylaWilkerson,
    name: "Kayla Wilkerson",
    majorAndYear: "Economics, 3rd Year",
    interests: "Backpacking, Hiking, Photography, Adventures",
  },
  {
    image: simonMann,
    name: "Simon Mann",
    majorAndYear: "Environmental Science, 4th Year",
    interests: "Cooking, Sports, Fitness, Traveling",
  },
  {
    image: jaredAllen,
    name: "Jared Allen",
    majorAndYear: "Environmental Science, 4th Year",
    interests: "Art, Drawing, Creative writing, Music",
  },
  {
    image: tenzinLopez,
    name: "Tenzin Lopez",
    majorAndYear: "Environmental Science, 3rd Year",
    interests: "Astrology, Comedy, Skiing, Videography",
  },
];
const posts = [
  {
    image: leoCarter,
    postImage: leoCarterPost,
    name: "Leo Carter",
    majorAndYear: "Environmental Science, 4th Year",
    time: "Today at 2:59PM",
    description:
      "Hey eveyone I am a new student at UofC I am curently looking for other students who are interested in joining a study group for MATH 211. Message me if you're interested in joining!",
  },
  {
    image: emmaLang,
    postImage: emmaLangPost,
    name: "Emma Lang",
    majorAndYear: "Mathematics, 2nd Year",
    time: "Today at 11:11AM",
    description:
      "Hey everyone! I was talking to a few people today in MATH 211 about a ski trip that my club was planning over this Christmas break! Message me know if you wanted to come join us for a weekend of skiing! Skiing trip will be from December 19-21.",
  },
];

export default function SearchResultsPage() {
  const [searchResults, setSearchResults] = useState([]);
  const [selectedInterests, setSelectedInterests] = useState([]);
  const [selectedMajors, setSelectedMajors] = useState([]);
  const navigate = useNavigate();

  const handleClickPosts = () => {
    navigate("/search-results-posts");
  };
  const handleClickChat = () => {
    navigate("/chats");
  };
  const handleClicksPeople = () => {
    navigate("/search-results-people");
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
    r;
    setSelectedMajors([]);
  };
  const handleTagRemove = (tagType, tag) => {
    if (tagType === "interest") {
      const newInterests = selectedInterests.filter(
        (i) => i.value !== tag.value
      );
      setSelectedInterests(newInterests);
    } else if (tagType === "major") {
      const newMajors = selectedMajors.filter((m) => m.value !== tag.value);
      setSelectedMajors(newMajors);
    }
  };

  const isFiltersApplied =
    selectedInterests.length > 0 || selectedMajors.length > 0;

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
            {!isFiltersApplied && (
              <div className="text-uConnectDark-textSub italic">
                No Selected Filter Tags
              </div>
            )}
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
                  onClick={() => handleTagRemove("major", major)}
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
              className="hover:underline h-12 px-4 py-2 border bg-[#C6C3C3] dark:bg-uConnectDark-background border-uConnectDark-accent text-uConnectLight-textMain dark:text-uConnectDark-textMain rounded-full "
            >
              Posts
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleClicksPeople();
              }}
              className="hover:underline h-12 px-4 py-2 border bg-[#C6C3C3] dark:bg-uConnectDark-background border-uConnectDark-accent text-uConnectLight-textMain dark:text-uConnectDark-textMain rounded-full "
            >
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
          <div className="flex justify-start">
          <div className="mb-8 flex justify-start mt-4 group relative">
            <button
              disabled={!isFiltersApplied}
              className="flex px-4 py-2 border disabled:bg-transparent disabled:cursor-not-allowed disabled:dark:border-uConnectDark-layer3 disabled:dark:text-uConnectDark-textSub disabled:text-uConnectLight-textSub disabled:dark:bg-uConnectDark-background bg-uConnectDark-accent dark:bg-uConnectDark-accent border-uConnectDark-accent text-uConnectDark-textMain dark:text-uConnectLight-textMain rounded-xl hover:opacity-80 dark:hover:opacity-80"
            >
              Apply Filters
            </button>
            {!isFiltersApplied && (
                <div className="absolute transform bottom-full mb-3 bg-uConnectLight-layer2Primary dark:bg-uConnectDark-layer2Primary text-uConnectLight-textMain dark:text-uConnectDark-layer3 text-xs rounded-md px-2 py-1 whitespace-nowrap shadow-md z-10 hidden group-hover:block">
                  No filters applied!
                </div>
              )}
            </div>
            <div className="mb-8 flex justify-start mt-4 group relative">
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleClicksReset();
              }}
              disabled={!isFiltersApplied}
              className="flex ml-4 px-4 py-2 disabled:border disabled:cursor-not-allowed disabled:dark:border-uConnectDark-layer3 disabled:dark:text-uConnectDark-textSub disabled:text-uConnectLight-textSub disabled:bg-transparent bg-red-500 text-white rounded-xl hover:opacity-80 dark:hover:opacity-80"
            >
              Reset Filters
            </button>
            {!isFiltersApplied && (
                <div className="ml-5 absolute transform bottom-full mb-3 bg-uConnectLight-layer2Primary dark:bg-uConnectDark-layer2Primary text-uConnectLight-textMain dark:text-uConnectDark-layer3 text-xs rounded-md px-2 py-1 whitespace-nowrap shadow-md z-10 hidden group-hover:block">
                  No filters to reset!
                </div>
              )}
          </div>
          </div>
        </div>

        {/* Grid of Profiles */}
        <div className="grid grid-cols-2 gap-6 mb-8 ">
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

        {/* Grid for Posts */}
        <div className="grid grid-cols-1 gap-6 mb-8">
          {posts.map((post, index) => (
            <div
              key={index}
              className="bg-uConnectLight-layer2Primary dark:bg-uConnectDark-layer2Primary p-6 rounded-lg text-left transition relative flex items-start w-full cursor-pointer"
            >
              <Link
                to={`/detailed-post-from-search/${post.index}`}
                className="flex"
              >
                <img
                  src={post.image}
                  alt={`${post.name}`}
                  className="w-24 h-24 rounded-full border-2 border-[#131313] object-cover mr-6"
                />
                <div className="flex flex-col">
                  <div className="flex items-center">
                    <h3 className="text-xl font-semibold text-uConnectDark-accent">
                      {post.name}
                    </h3>
                    <p className="text-uConnectLight-textSub dark:text-uConnectDark-textSub break-words ml-5 text-xs">
                      {post.time}
                    </p>
                  </div>
                  <p className="text-uConnectLight-textMain dark:text-uConnectDark-textMaintext-uConnectLight-textSub dark:text-uConnectDark-textSub mb-2">
                    {post.majorAndYear}
                  </p>
                  <p className="text-uConnectLight-textMain dark:text-uConnectDark-textMain mb-4">
                    {post.description}
                  </p>
                  <div className="flex items-center justify-center mr-28">
                    <img
                      src={post.postImage}
                      alt={`${post.name}`}
                      className="max-w-xl"
                    />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
