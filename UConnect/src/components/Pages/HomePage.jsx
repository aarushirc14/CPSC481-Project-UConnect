// src/components/HomePage.jsx

import React, { useState } from "react";
import { Link, useNavigate  } from "react-router-dom";

import Sidebar from "../Sidebar";
import SearchBar from "../SearchBar";

//profile pic imports
import rashidaWilliams from "../../assets/profilePics/rashidaWilliams.jpeg";
import saulAlvarez from "../../assets/profilePics/saulAlvarez.jpg";
import aaronPatel from "../../assets/profilePics/aaronPatel.jpg";
import alexJones from "../../assets/profilePics/alexJones.jpg";
import tracySmith from "../../assets/profilePics/tracySmith.jpeg";
import shirleyLee from "../../assets/profilePics/shirleyLee.webp";
import sofiaMartinez from "../../assets/profilePics/sofiaMartinez.jpg";
import davidSingh from "../../assets/profilePics/davidSingh.jpg";

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

  {
    name: "David Singh",
    major: "Biology",
    image: davidSingh,
  },

  {
    name: "Tracy Smith",
    major: "Fine Arts",
    image: tracySmith,
  },

  {
    name: "Alex Jones",
    major: "Physics",
    image: alexJones,
  },

  {
    name: "Sofia Martinez",
    major: "Environmental Science",
    image: sofiaMartinez,
  },

  {
    name: "Shirley Lee",
    major: "Chemical Engineering",
    image: shirleyLee,
  },
];

// Define featured posts array
const featuredPosts = [
  
  {
    userName: "Tracy Smith",
    userMajor: "Fine Arts",
    userImage: tracySmith,
    postTitle: "Photography Enthusiasts",
    postContent: "Any photography enthusiasts here? Would love to connect with fellow photographers for some campus shots this weekend.",
  },
  {
    userName: "Alex Jones",
    userMajor: "Physics",
    userImage: alexJones,
    postTitle: "Movie Night",
    postContent: "Anyone going to the campus movie night this Friday? Heard they're playing classic movies in Mac Hall. Let’s go as a group!",
  },

  {
    userName: "Shirley Lee",
    userMajor: "Chemical Engineering",
    userImage: shirleyLee,
    postTitle: "Internship Opportunties at Suncor",
    postContent: "I'm currently interning at Suncor and they are recruiting for the next cycle. I'd be happy to chat if anyone wants to learn more!",
  },

  {
    userName: "Sofia Martinez",
    userMajor: "Environmental Science",
    userImage: sofiaMartinez,
    postTitle: "Community Garden",
    postContent: "Looking for some volunteers to join a UofC Community Garden intiative.",
  },
];


export default function HomePage() {
  const [activeItem, setActiveItem] = useState("home"); // State to track the active sidebar item
  const navigate = useNavigate();

  const handleChatClick = () => {
    navigate("/chats");
  };

  return (
    <div className="flex min-h-screen bg-[#131313] text-white">
      {/* Sidebar */}
      <Sidebar activeItem={activeItem} onSelectItem={setActiveItem} />

      {/* Main Content */}
      <div className="flex-1 p-6 mt-10 ml-40">
        
        {/* Search Bar */}
        <div className="mb-6">
          <SearchBar />     
        </div>

         {/* Featured Users */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          {featuredUsers.map((user) => (
            <div key={user.id} className="bg-[#414040] p-4 rounded-lg text-center hover:bg-[#515151] transition relative">
              {/* Profile Link */}
              <Link to={`/profile/${user.id}`} className="block">
                {/* User Image */}
                <img
                  src={user.image}
                  alt={`${user.name}`}
                  className="mb-4 w-28 h-28 mx-auto rounded-full border-2 border-[#131313] object-cover"
                />
                {/* User Name */}
                <h3 className="text-xl font-semibold text-[#FC9D04]">{user.name}</h3>
                {/* User Major */}
                <p className="text-[#FFFFFF]">{user.major}</p>
              </Link>
              {/* Chat Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation(); // Prevent the click from propagating to the parent Link
                  handleChatClick();
                }}
                className="mt-4 px-4 py-2 border border-[#FC9D04] text-[#FFFFFF] rounded-full hover:bg-[#FC9D04] hover:text-black"
              >
                Chat
              </button>
            </div>
          ))}
        </div>
        {/* Featured Posts */}
        <div className="grid grid-cols-2 gap-6">
            {featuredPosts.map((post, index) => (
              <Link to={`/post/${post.id}`} key={post.id} className="bg-[#414040] p-4 rounded-lg hover:bg-[#515151] transition">
                <div className="flex items-center space-x-4 mb-4">
                  {/* User Image */}
                  <img
                    src={post.userImage}
                    alt={`${post.userName}`}
                    className="w-16 h-16 rounded-full border-2 border-[#131313] object-cover"
                  />
                  {/* User Details */}
                  <div className="flex flex-col">
                    <h3 className="text-xl font-semibold text-[#FFFFFF]">{post.userName}</h3>
                    <p className="text-[#C6C3C3]">{post.userMajor}</p>
                  </div>
                </div>
               
                  {/* Post Content */}
                  <p className="mt-4 font-semibold text-[#FC9D04]">{post.postTitle}</p>
                  <p className="text-[#FFFFFF]">{post.postContent}</p>
                </Link>
              
              ))}
              </div>
        </div>
    </div>
  );
}

