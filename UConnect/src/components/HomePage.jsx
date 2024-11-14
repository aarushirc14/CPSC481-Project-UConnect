// src/components/HomePage.jsx
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import SearchBar from "./SearchBar";

export default function HomePage() {
  const [activeItem, setActiveItem] = useState("home"); // State to track the active sidebar item

  return (
    <div className="flex min-h-screen bg-[#131313] text-white">
      {/* Sidebar */}
      <Sidebar activeItem={activeItem} onSelectItem={setActiveItem} />

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Search Bar */}
        <div className="flex justify-center mb-8">
          <div className="w-3/4 max-w-xl">
            <SearchBar />
          </div>
        </div>

        {/* Featured Users */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          {["Simon Mann", "Jordan Li", "Aaron Patel"].map((name, index) => (
            <div key={index} className="bg-gray-700 p-4 rounded-lg text-center">
              <div className="mb-4 w-20 h-20 mx-auto rounded-full bg-gray-500"></div> {/* Placeholder for image */}
              <h3 className="text-xl font-semibold text-orange-500">{name}</h3>
              <p className="text-gray-400">Field of Study</p>
              <button className="mt-4 px-4 py-2 border border-orange-500 text-orange-500 rounded-full hover:bg-orange-500 hover:text-black">
                Chat
              </button>
            </div>
          ))}
        </div>

        {/* Recent Posts */}
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-gray-700 p-4 rounded-lg">
            <h4 className="text-lg font-semibold text-orange-500">Tracy Smith</h4>
            <p className="text-gray-400 mb-2">Fine Arts</p>
            <p className="font-semibold text-orange-500">Photography Enthusiasts</p>
            <p className="text-gray-400">
              Any photography enthusiasts here? Would love to connect with fellow photographers for
              some campus shots this weekend.
            </p>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg">
            <h4 className="text-lg font-semibold text-orange-500">Alex Jones</h4>
            <p className="text-gray-400 mb-2">Physics</p>
            <p className="font-semibold text-orange-500">Movie Night</p>
            <p className="text-gray-400">
              Anyone going to the campus movie night this Friday? Heard they’re playing classic
              movies in Mac Hall. Let’s go as a group!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
