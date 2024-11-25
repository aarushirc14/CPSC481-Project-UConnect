// src/components/pages/posts/DetailedPostViewPageNewpost.jsx

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { IoMdArrowBack } from "react-icons/io";
import { BiLike, BiDislike } from "react-icons/bi";
import { MdOutlineInsertComment } from "react-icons/md";
import {
  FaSmile,
  FaPaperPlane,
  FaSort,
} from "react-icons/fa";

import sofiaMartinez from "../../../assets/profilePics/sofiaMartinez.jpg";

// Define the Poster
const poster = {
    name: "Sofia Martinez",
    title: "SUMMER INTERNSHIPS AVAILABLE",
    content: (
      <div className="mt-2.5">
          <p>
              <b>Several new Summer Tech Internships are open for 2025! Companies offering these internships are listed below:</b>
          </p>
          <ul className="list-disc pl-4 my-5 mr-4 ml-1.5">
              <li className="mt-2.5">Apple - software and hardware engineering</li>
              <li className="mt-2.5">Microsoft - software engineering, data science, and cloud computing roles</li>
              <li className="mt-2.5">Goldman Sachs - Summer Analyst</li>
              <li className="mt-2.5">NVIDIA - AI research, autonomous vehicle development, and gaming technology</li>
              <li className="mt-2.5">JPMorgan - quantitative analysis and fintech development</li>
              <li className="mt-2.5">Cenovus Energy - Process Data Operations, OT Integrity and Integration and Automation Support</li>
              <li className="mt-2.5">Lockheed Martin Corporation - Software Development Intern, work primarily in C++</li>
              <li className="mt-2.5">Propra - Operations Intern</li>
              <li className="mt-2.5">liTAQA - IT Service Delivery Summer Student</li>
          </ul>
          <p>Good Luck!</p>
      </div>
  ),
    image: sofiaMartinez,
    time: "1/21/2025 - 10:05 pam",
    likes: 0,
    dislike: 0,
};

// Define the Current User
const currentUser = {
  name: "Sofia Martinez",
  image: sofiaMartinez,
};

export default function DetailedPostViewPage() {
  {/* Update Likes and Dislikes */}
  const [likeStyle, setLikeStyle] = useState("inactive");
  const [dislikeStyle, setDislikeStyle] = useState("inactive");

  const [likes, setLikes] = useState(poster.likes); // Initial likes count
  const [dislikes, setDislikes] = useState(poster.dislike); // Initial dislikes count

  const dislikeChangeStyle = () => {
      if (dislikeStyle === "inactive") {
        setDislikeStyle("disliked")
        setDislikes((prevDislikes) => prevDislikes + 1); // Increment dislikes by 1
        if (likes > 0 && likes > poster.likes) setLikes(likes - 1); // Decrement likes if there are any
      } else if ( dislikeStyle !== "inactive") {
          setDislikeStyle("inactive")
          if (dislikes > 0) setDislikes((prevDislikes) => prevDislikes - 1); // subract dislikes by 1
      }
    setLikeStyle("inactive")
  };

  const likeChangeStyle = () => {
    if (likeStyle === "inactive") {
      setLikeStyle("disliked")
      setLikes((prevLikes) => prevLikes + 1); // Increment likes by 1
      if (dislikes > 0 && dislikes > poster.dislike) setDislikes(dislikes - 1); // Decrement dislikes if there are any
    } else if ( likeStyle !== "inactive") {
        setLikeStyle("inactive")
        if (likes > 0) setLikes((prevLikes) => prevLikes - 1); // subract likes by 1
    }
    setDislikeStyle("inactive")
};

  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/home");      // After posting go straight to Post view
  };

  return (
    <div className="flex min-h-screen bg-uConnectLight-background dark:bg-uConnectDark-background transition">
      <div className = "flex-1 p-6 mt-10 ml-40">
        <div className="flex">
          {/* Back Button */}
          <button
            onClick={(e) => {
              e.stopPropagation(); // Prevent the click from propagating to the parent Link
              handleBackClick();
            }}
            className=" px-4 dark:text-uConnectDark-textSub text-uConnectLight-textSub text-4xl h-full"
            >
            <IoMdArrowBack />
          </button>
          <div className = "flex-col detail_page mx-8">
            {/* Post Contents */}
            <div className=" bg-uConnectLight-layer2Primary dark:bg-uConnectDark-layer2Primary rounded-lg p-11">
              <h1 className="text-4xl font-semibold text-uConnectLight-textMain dark:text-uConnectDark-textMain">
                {poster.title}
              </h1>
              <h2 className="flex items-center mt-4 mx-4 text-xl font-semibold text-uConnectLight-textMain dark:text-uConnectDark-textMain">
                Posted by: 
                <img src={poster.image} alt={`${poster.name}`} class="w-12 h-12 rounded-full border-2 border-[#131313] object-cover mx-2" />
                {/* Username is linked to their profile */}
                <Link to={`/profile/${poster.id}`}>
                  <span className="text-uConnectDark-accent"> {poster.name} </span>
                </Link>
              </h2>
              <h3 className="italic font-thin text-lg mx-4 mt-2 text-uConnectLight-textMain dark:text-uConnectDark-textMain">
                {poster.time}
              </h3>
              <hr class="w-11/12 mx-auto my-5 border-uConnectLight-textMain dark:border-uConnectDark-textSub border-1"></hr>
              <p className="text-lg mx-4 text-uConnectLight-textMain dark:text-uConnectDark-textMain">
              {poster.content}
              </p>
            </div>
            {/* Comment, Like and Dislike Buttons */}
            <div className = "flex-row text-lg">
              <button className="font-semibold mt-4 px-4 py-2 border inline-flex items-center gap-2 border-uConnectDark-accent text-uConnectLight-textMain dark:text-uConnectDark-textMain rounded-full hover:bg-uConnectDark-accent hover:text-uConnectDark-textMain hover:dark:text-uConnectLight-textMain"
                  >
                    <MdOutlineInsertComment /> Comment
              </button>
              <button className={`${
                          likeStyle === "inactive" 
                          ? "text-uConnectLight-textMain dark:text-uConnectDark-textMain hover:text-uConnectDark-accent hover:dark:text-uConnectLight-accent"
                          : "text-uConnectLight-accent dark:text-uConnectDark-accent hover:text-uConnectLight-textMain hover:dark:text-uConnectDark-textMain" 
                        } mt-4 px-4 py-2 inline-flex items-center gap-2`}
                  onClick={likeChangeStyle}>
                    {likes} <BiLike />
              </button>
              <button className={`${
                          dislikeStyle === "inactive" 
                          ? "text-uConnectLight-textMain dark:text-uConnectDark-textMain hover:text-uConnectDark-accent hover:dark:text-uConnectLight-accent"
                          : "text-uConnectLight-accent dark:text-uConnectDark-accent hover:text-uConnectLight-textMain hover:dark:text-uConnectDark-textMain" 
                        } mt-4 px-4 py-2 inline-flex gap-2 items-center`}
                  onClick={dislikeChangeStyle}
                  >
                    {dislikes} <BiDislike />
              </button>
            </div>
            {/* Input Comment */}
            <div className="flex mt-10 items-center">
              <img src={currentUser.image} alt={`${currentUser.name}`} class=" w-14 h-14 rounded-full border-2 border-[#131313] object-cover" />
              <div className=" flex-col top-0 left-0 py-1 flex w-full mt-4 lg:mt-0  text-uConnectLight-textMain dark:text-uConnectDark-textMain">
                <input
                  type="text"
                  placeholder="Comment here..."
                  className="placeholder:italic p-3 text-xl bg-transparent placeholder-uConnectLight-textSub dark:placeholder-uConnectDark-layer3 outline-none"
                />
                <hr class=" ml-3 w-full border-uConnectLight-textMain dark:border-uConnectDark-textMain border-1"></hr>
              </div>
              <button className="mt-4 px-4 py-2 text-uConnectLight-textSub dark:text-uConnectDark-layer3 rounded-full hover:bg-uConnectDark-accent hover:text-uConnectDark-textMain hover:dark:text-uConnectLight-textMain"
                  >
                    <FaSmile />
              </button>
              <button className="mt-4 px-4 py-2 text-uConnectLight-textSub dark:text-uConnectDark-layer3 rounded-full hover:bg-uConnectDark-accent hover:text-uConnectDark-textMain hover:dark:text-uConnectLight-textMain"
                  >
                    <FaPaperPlane />
              </button>
            </div>
            <div className="flex mx-20 my-4 text-uConnectLight-textSub dark:text-uConnectDark-layer3 place-content-between">
              0 People Have Commented
              <button className="flex items-center gap-1">
                <FaSort className="text-2xl"/> Sort By
              </button>
            </div>
          </div>
        </div> 
      </div>
    </div>
  );
}


