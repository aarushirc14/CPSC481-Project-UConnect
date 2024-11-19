// src/components/pages/profiles/OtherUserProfilePage.jsx

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Notification from "../../PopupMessage";
import SearchBar from "../../SearchBar";
import rashidaWilliams from "../../../assets/profilePics/rashidaWilliams.jpeg";

export default function OtherUserProfilePage() {
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");
  const navigate = useNavigate();

  const user = {
    profileImage: rashidaWilliams,
    firstName: "Rashida",
    lastName: "Williams",
    major: "Biochemistry",
    year: "2nd Year",
    bio: "Passionate about exploring the intricate chemistry of life, I thrive on uncovering the mysteries of biochemistry. When I’m not immersed in labs or lectures, you’ll find me outdoors camping, capturing moments through my camera lens, or dancing to my favorite tunes. I love traveling to new places and giving back through volunteer work!",
    courses: ["BIOL 311", "BIOL 331", "BIOL 371", "CHEM 311", "CHEM 315"],
    interests: [
      "Camping",
      "Dancing",
      "Photography",
      "Traveling",
      "Volunteering",
    ],
    posts: [
      {
        id: 1,
        title: "Volunteering at the Science Outreach Program",
        content:
          "Spent the weekend mentoring high school students about the wonders of biochemistry at the Science Outreach Program. It’s amazing to see the next generation getting excited about science!",
      },
      {
        id: 2,
        title: "Camping Under the Stars",
        content:
          "Just came back from an unforgettable camping trip! There’s nothing like stargazing, campfire stories, and the serenity of nature to recharge after a busy week of classes.",
      },
      {
        id: 3,
        title: "Excited for Biochemistry Research Project!",
        content:
          "I’ve been accepted into a project on protein structures and their role in disease prevention. Can’t wait to contribute and learn more about this fascinating field!",
      },
    ],
  };

  const handleChatClick = () => {
    navigate("/chats");
  };

  const handleFollowClick = () => {
    setNotificationMessage(`You are now following ${user.firstName}!`);
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);
  };

  return (
    <div className="min-h-screen bg-uConnectDark-textMain dark:bg-uConnectLight-textMain text-uConnectLight-textMain dark:text-uConnectDark-textMain flex">
      {/* Notification */}
      {showNotification && (
        <Notification
          message={notificationMessage}
          type="success"
          onClose={() => setShowNotification(false)}
        />
      )}
      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center pl-[10rem] pr-6">
        {/* Sticky Search Bar */}
        <div className="sticky top-0 z-10 w-full max-w-7xl bg-uConnectLight-background dark:bg-uConnectDark-background p-4 mb-14">
          <SearchBar />
        </div>
        {/* Top Section */}
        <div className="flex flex-wrap w-full max-w-7xl gap-6">
          {/* Left Section */}
          <div className="flex-[2] bg-uConnectLight-layer2Primary dark:bg-uConnectDark-layer2Primary rounded-lg p-8 flex flex-col items-center">
            {/* Profile Image */}
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-uConnectLight-textMain mb-4">
              <img
                src={user.profileImage}
                alt={`${user.firstName} ${user.lastName}`}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Name */}
            <h1 className="text-3xl font-semibold text-uConnectDark-accent">
              {user.firstName} {user.lastName}
            </h1>
            {/* Major */}
            <p className="text-lg text-uConnectLight-textMain dark:text-uConnectDark-textMain">
              {user.major}
            </p>
            {/* Year */}
            <p className="text-md text-uConnectLight-textMain dark:text-uConnectDark-textMain">
              {user.year}
            </p>
            {/* Chat and Follow Buttons */}
            <div className="flex mt-6 gap-4">
              <button
                onClick={handleChatClick}
                className="py-1 px-4 bg-transparent border-2 border-uConnectDark-accent text-uConnectLight-textMain dark:text-uConnectDark-textMain rounded-full hover:bg-uConnectDark-accent hover:text-uConnectDark-textMain hover:dark:text-uConnectLight-textMain transition text-center w-[100px]"
              >
                Chat
              </button>
              <button
                onClick={handleFollowClick}
                className="py-1 px-4 bg-transparent border-2 border-uConnectDark-accent text-uConnectLight-textMain dark:text-uConnectDark-textMain rounded-full hover:bg-uConnectDark-accent hover:text-uConnectDark-textMain hover:dark:text-uConnectLight-textMain transition text-center w-[100px]"
              >
                Follow
              </button>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex-[3] bg-uConnectLight-layer2Primary dark:bg-uConnectDark-layer2Primary rounded-lg p-6">
            {/* Bio Section */}
            <div className="bg-uConnectLight-layer3 dark:bg-uConnectDark-layer3 rounded-lg p-6 mb-6">
              <h2 className="text-lg font-semibold text-uConnectLight-textMain">
                Bio
              </h2>
              <p className="text-uConnectLight-textMain mt-2">
                {user.bio}
              </p>
            </div>

            {/* Courses Section */}
            <div className="bg-uConnectLight-layer3 dark:bg-uConnectDark-layer3 rounded-lg p-6 mb-6">
              <h2 className="text-lg font-semibold text-uConnectLight-textMain">
                Courses
              </h2>
              <div className="grid grid-cols-5 gap-2 mt-2">
                {user.courses.map((course, index) => (
                  <span
                    key={index}
                    className="bg-uConnectLight-layer2Primary dark:bg-uConnectDark-layer2Primary border-2 border-uConnectDark-accent text-uConnectLight-textMain dark:text-uConnectDark-textMain px-4 py-1 rounded-full text-center"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>

            {/* Interests Section */}
            <div className="bg-uConnectLight-layer3 dark:bg-uConnectDark-layer3 rounded-lg p-6 mb-6">
              <h2 className="text-lg font-semibold text-uConnectLight-textMain">
                Interests
              </h2>
              <div className="flex flex-wrap gap-2 mt-2">
                {user.interests.map((interest, index) => (
                  <span
                    key={index}
                    className="bg-uConnectLight-layer2Primary dark:bg-uConnectDark-layer2Primary border-2 border-uConnectDark-accent text-uConnectLight-textMain dark:text-uConnectDark-textMain px-4 py-1 rounded-full"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* My Posts Section */}
        <div className="w-full max-w-7xl bg-uConnectLight-layer2Primary dark:bg-uConnectDark-layer2Primary rounded-lg p-6 mt-8">
          <h2 className="text-lg font-semibold text-uConnectDark-accent mb-4">
            Posts
          </h2>
          <div className="flex flex-col gap-4">
            {user.posts.map((post) => (
              <div
                key={post.id}
                className="bg-uConnectLight-layer3 dark:bg-uConnectDark-layer3 rounded-lg p-4"
              >
                <h3 className="text-md font-semibold text-uConnectLight-textMain">
                  {post.title}
                </h3>
                <p className="text-sm text-uConnectLight-textMain mt-2">
                  {post.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
