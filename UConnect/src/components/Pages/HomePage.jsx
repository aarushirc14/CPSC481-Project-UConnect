// src/components/HomePage.jsx

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SearchBar from "../SearchBar";

//profile pic imports
import rashidaWilliams from "../../assets/profilePics/rashidaWilliams.jpeg";
import saulAlvarez from "../../assets/profilePics/saulAlvarez.jpg";
import aaronPatel from "../../assets/profilePics/aaronPatel.jpg";
import alexJones from "../../assets/profilePics/alexJones.jpg";
import tracySmith from "../../assets/profilePics/tracySmith.jpeg";
import shirleyLee from "../../assets/profilePics/shirleyLee.webp";
import davidSingh from "../../assets/profilePics/davidSingh.jpg";
import landonStone from "../../assets/profilePics/landonStone.jpg";

// Define featured users array
const featuredUsers = [
  {
    name: "Rashida Williams",
    major: "Biochemistry",
    image: rashidaWilliams,
  },
  {
    name: "Saul Alvarez",
    major: "Energy Science",
    image: saulAlvarez,
  },
  {
    name: "Aaron Patel",
    major: "Natural Science",
    image: aaronPatel,
  },

  {
    name: "David Singh",
    major: "Bioinformatics",
    image: davidSingh,
  },

  {
    name: "Tracy Smith",
    major: "Urban Studies",
    image: tracySmith,
  },

  {
    name: "Alex Jones",
    major: "Physics",
    image: alexJones,
  },

  {
    name: "Landon Stone",
    major: "Geology",
    image: landonStone,
  },

  {
    name: "Shirley Lee",
    major: "Plant Biology",
    image: shirleyLee,
  },
];

// Define featured posts array
const featuredPosts = [
  {
    userName: "Tracy Smith",
    userMajor: "Urban Studies",
    userImage: tracySmith,
    postTitle: "Photography Enthusiasts",
    postContent:
      "Any photography enthusiasts here? Would love to connect with fellow photographers for some campus shots this weekend.",
  },
  {
    userName: "Alex Jones",
    userMajor: "Physics",
    userImage: alexJones,
    postTitle: "Movie Night",
    postContent:
      "Anyone going to the campus movie night this Friday? Heard they're playing classic movies in Mac Hall. Let’s go as a group!",
  },

  {
    userName: "Shirley Lee",
    userMajor: "Plant Biology",
    userImage: shirleyLee,
    postTitle: "Plant Swap and Care Tips!",
    postContent:
      "I've got some thriving spider plants, pothos, and jade cuttings up for grabs. If you've got anything interesting to swap (succulents, ferns, or even propagation tips), let's connect🌿",
  },

  {
    userName: "David Singh",
    userMajor: "Bioinformatics",
    userImage: davidSingh,
    postTitle: "Research Participants in Bioinformatics",
    postContent:
      "I’m currently working on a bioinformatics research project exploring the genetic markers associated with sleep patterns. I’m looking for participants who are willing to fill out a short survey.",
  },
];

export default function HomePage({ setIsActive }) {
  const [activeItem, setActiveItem] = useState("home"); // State to track the active sidebar item
  const navigate = useNavigate();

  const handleChatClick = () => {
    navigate("/chats");
    setIsActive(5);
  };

  return (
    <div className="flex min-h-screen bg-uConnectLight-background dark:bg-uConnectDark-background text-uConnectLight-textMain dark:text-uConnectDark-textMain m-auto max-w-7xl">
      {/* Sidebar
      <Sidebar activeItem={activeItem} onSelectItem={setActiveItem} /> */}

      {/* Main Content */}
      <div className="flex-1 p-6 mt-10 ml-40 ">
        {/* Search Bar */}
        <div className="sticky top-0 z-10 mb-6">
          <SearchBar />
        </div>
        <div className="mb-4 text-3xl font-bold text-uConnectLight-textMain dark:text-uConnectDark-textMain">
          Suggested People
        </div>
        {/* Featured Users */}
        <div className="grid grid-cols-4 gap-8 mb-8">
          {featuredUsers.map((user) => (
            <div
              key={user.id}
              className="bg-uConnectLight-layer2Primary dark:bg-uConnectDark-layer2Primary p-4 rounded-lg text-center transition relative"
            >
              {/* Profile Link */}
              <Link to={`/profile/${user.id}`} className="block">
                {/* User Image */}
                <img
                  src={user.image}
                  alt={`${user.name}`}
                  className="mb-4 w-28 h-28 mx-auto rounded-full border-2 border-[#131313] object-cover"
                />
                {/* User Name */}
                <h3 className="text-xl font-semibold text-uConnectDark-accent">
                  {user.name}
                </h3>
                {/* User Major */}
                <p className="text-uConnectLight-textMain dark:text-uConnectDark-textMain">
                  {user.major}
                </p>
              </Link>
              {/* Chat Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation(); // Prevent the click from propagating to the parent Link
                  handleChatClick();
                }}
                className="mt-4 px-4 py-2 border border-uConnectDark-accent text-uConnectLight-textMain dark:text-uConnectDark-textMain rounded-full hover:bg-uConnectDark-accent hover:text-uConnectDark-textMain hover:dark:text-uConnectLight-textMain"
              >
                Chat
              </button>
            </div>
          ))}
        </div>
        {/* Featured Posts */}
        <div className="mb-4 text-3xl font-bold text-uConnectLight-textMain dark:text-uConnectDark-textMain">
         Suggested Posts
        </div>
        <div className="grid grid-cols-2 gap-8">
          {featuredPosts.map((post, index) => (
            <Link
              to={`/post/${post.id}`}
              key={post.id}
              className="bg-uConnectLight-layer2Primary dark:bg-uConnectDark-layer2Primary p-4 rounded-lg transition"
            >
              <div className="flex items-center space-x-4 mb-4">
                {/* User Image */}
                <img
                  src={post.userImage}
                  alt={`${post.userName}`}
                  className="w-16 h-16 rounded-full border-2 border-[#131313] object-cover"
                />
                {/* User Details */}
                <div className="flex flex-col">
                  <h3 className="text-xl font-semibold text-uConnectLight-textMain dark:text-uConnectDark-textMain">
                    {post.userName}
                  </h3>
                  <p className="text-uConnectLight-textSub dark:text-uConnectDark-layer3">
                    {post.userMajor}
                  </p>
                </div>
              </div>

              {/* Post Content */}
              <p className="mt-4 font-semibold text-uConnectDark-accent">
                {post.postTitle}
              </p>
              <p className="text-uConnectLight-textMain dark:text-uConnectDark-textMain">
                {post.postContent}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
