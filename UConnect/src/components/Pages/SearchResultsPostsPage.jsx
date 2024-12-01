//SearchResultsPage.jsx
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Sidebar from "../Sidebar"; // Import Sidebar component
import SearchBar from "../SearchBar";
import MultiSelectDropdownFilter from "../MultiSelectDropdownFilter";
import { majorOptions, interestOptions } from "../../data/dropdownOptions";
import kaylaWilkerson from "../../assets/profilePics/kaylaWilkerson.jpg";
import simonMann from "../../assets/profilePics/simonMann.jpg";
import jaredAllen from "../../assets/profilePics/jaredAllen.jpg";
import tenzinLopez from "../../assets/profilePics/tenzinLopez.jpg";
import leoCarter from "../../assets/profilePics/leoCarter.jpg";
import leoCarterPost from "../../assets/profilePics/leoCarterPost.png";

const users = [
  {
    image: kaylaWilkerson,
    name: "Kayla Wilkerson",
    majorAndYear: "Environmental Science, 3rd Year",
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
    majorAndYear: "Enviornmental Science, 4th Year",
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
];

export default function SearchResultsPage() {
  const [searchResults, setSearchResults] = useState([]); // State to handle search results

  return (
    <div className="flex min-h-screen bg-uConnectLight-background dark:bg-uConnectDark-background text-uConnectLight-textMain dark:text-uConnectDark-textMain">
      {/* Sidebar*/}
      {/* Main content area */}
      <main className="flex-1 p-6 mt-10 ml-40">
        {/* Search Bar */}
        <div className="sticky top-0 z-10 mb-0">
          <SearchBar />
        </div>
        {/* Container and Filter buttons*/}
        <div className="grid grid-cols-4 gap-6 mb-8 mt-5">
          <button className="mt-4 px-4 py-2 border border-uConnectDark-accent text-uConnectLight-textMain dark:text-uConnectDark-textMain rounded-full hover:bg-uConnectDark-accent hover:text-uConnectDark-textMain hover:dark:text-uConnectLight-textMain">
            Posts
          </button>
          <button className="mt-4 px-4 py-2 border border-uConnectDark-accent text-uConnectLight-textMain dark:text-uConnectDark-textMain rounded-full hover:bg-uConnectDark-accent hover:text-uConnectDark-textMain hover:dark:text-uConnectLight-textMain">
            People
          </button>
          <MultiSelectDropdownFilter
            options={interestOptions}
            label="Interests"
          />
          <MultiSelectDropdownFilter options={majorOptions} label="Majors" />
        </div>
        {/*Grid placement of profiles*/}
        <div className="grid grid-cols-2 gap-6 mb-8">
          {users.map((user, index) => (
            <div
              key={index}
              className="bg-uConnectLight-layer2Primary dark:bg-uConnectDark-layer2Primary p-6 rounded-lg text-left transition relative flex items-start w-full cursor-pointer"
            >
              {/*Fomart for each profile card information*/}
              <img
                src={user.image}
                alt={`${user.name}`}
                className="w-28 h-28 rounded-full border-2 border-[#131313] object-cover mr-6"
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
              <div className="ml-auto">
                <button className="mt-4 px-4 py-2 border border-uConnectDark-accent text-uConnectLight-textMain dark:text-uConnectDark-textMain rounded-full hover:bg-uConnectDark-accent hover:text-uConnectDark-textMain hover:dark:text-uConnectLight-textMain">
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
