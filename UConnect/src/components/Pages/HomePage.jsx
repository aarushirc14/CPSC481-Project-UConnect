// src/components/HomePage.jsx

import React, { useState } from "react";
import Sidebar from "../Sidebar";
import SearchBar from "../SearchBar";

//profile pic imports
import rashidaWilliams from "../../assets/profilePics/rashidaWilliams.jpeg";
import saulAlvarez from "../../assets/profilePics/saulAlvarez.jpg";
import aaronPatel from "../../assets/profilePics/aaronPatel.jpg";
import alexJones from "../../assets/profilePics/alexJones.jpg";
import tracySmith from "../../assets/profilePics/tracySmith.jpeg";

// Define featured users array
const featuredUsers = [
  {
    name: "Rashida Williams",
    major: "Software Engineering",
    image: rashidaWilliams, 
  },
  {
    name: "Saul Alvarez",
    major: "Computer Science",
    image: saulAlvarez,
  },
  {
    name: "Aaron Patel",
    major: "Mechanical Engineering",
    image: aaronPatel,
  },
];

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
          {featuredUsers.map((user, index) => (
            <div key={index} className="bg-[#414040] p-4 rounded-lg text-center">
              {/* User Image */}
              <img
                src={user.image}
                alt={`${user.name}`}
                className="mb-4 w-20 h-20 mx-auto rounded-full object-cover"
              />
              {/* User Name */}
              <h3 className="text-xl font-semibold text-[#FC9D04]">{user.name}</h3>
              {/* User Major  */}
              <p className="text-[#FFFFFF]">{user.major}</p>
              {/* Chat Button */}
              <button className="mt-4 px-4 py-2 border border-[#FC9D04] text-[#FFFFFF] rounded-full hover:bg-[#FC9D04] hover:text-black">
                Chat
              </button>
            </div>
          ))}
        </div>

        {/* Recent Posts */}
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-[#414040] p-4 rounded-lg">
            <h4 className="text-lg font-semibold text-[#FFFFFF]">Tracy Smith</h4>
            <p className="text-[#C6C3C3] mb-2">Fine Arts</p>
            <p className="font-semibold text-[#FC9D04]">Photography Enthusiasts</p>
            <p className="text-[#FFFFFF]">
              Any photography enthusiasts here? Would love to connect with fellow photographers for
              some campus shots this weekend.
            </p>
          </div>

          <div className="bg-[#414040] p-4 rounded-lg">
            <h4 className="text-lg font-semibold text-[#FFFFFF]">Alex Jones</h4>
            <p className="text-[#C6C3C3] mb-2">Physics</p>
            <p className="font-semibold text-[#FC9D04]">Movie Night</p>
            <p className="text-[#FFFFFF]">
              Anyone going to the campus movie night this Friday? Heard they’re playing classic
              movies in Mac Hall. Let’s go as a group!
            </p>
          </div>
        
        </div>
      </div>
    </div>
  );
}
