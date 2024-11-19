// src/components/pages/ChatPage.jsx
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";

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
const chatNameData = [
  {
    chatName: "Rashida Williams",
    image: rashidaWilliams,
    notification: 2,
  },
  {
    chatName: "Saul Alvarez",
    image: saulAlvarez,
    notification: 1,
  },
  {
    chatName: "Aaron Patel",
    image: aaronPatel,
  },

  {
    chatName: "David Singh",
    image: davidSingh,
  },

  {
    chatName: "Tracy Smith",
    image: tracySmith,
  },

  {
    chatName: "Alex Jones",
    image: alexJones,
  },

  {
    chatName: "Landon Stone",
    image: landonStone,
  },

  {
    chatName: "Bio 101 Students",
    image: [shirleyLee, landonStone],
    memberCount: 3,
  },
];

export default function ChatPage() {
  return (
    <div className="block min-h-screen bg-uConnectLight-background dark:bg-uConnectDark-background text-uConnectLight-textMain dark:text-uConnectDark-textMain text-center">
      <ChatSideBar />
      <h1 className="bg-blue-500"> Chat Page. Needs to be implemented </h1>
    </div>
  );
}

function ChatSideBar() {
  const [active, setIsActive] = useState(chatNameData[0].chatName);

  return (
    <div className="fixed ml-16 bg-uConnectLight-layer2Primary dark:bg-uConnectDark-layer2Primary min-h-screen w-56">
      <div className="flex border-2 rounded-full border-uConnectDark-accent m-5">
        <div className="m-3 flex items-center ">
          <FaSearch className="text-uConnectDark-accent" /> {/* Search Icon */}
        </div>
        <input
          type="text"
          placeholder="Search Chat"
          className="bg-transparent placeholder-uConnectLight-textSub dark:placeholder-uConnectDark-layer3 outline-none w-full pr-2"
        />
      </div>{" "}
      <div className="flex flex-col">
        {chatNameData.map((chat) => (
          <button onClick={() => setIsActive(chat.chatName)}>
            <Chat
              Name={chat.chatName}
              Profile={chat.image}
              Members={chat.memberCount}
              Notification={chat.notification}
              Active={active == chat.chatName}
            />
          </button>
        ))}
      </div>
    </div>
  );
}

function Chat({ Name, Profile, Members, Notification, Active }) {
  const nameColor = Notification
    ? "text-uConnectDark-accent"
    : "dark:text-uConnectDark-textMain text-uConnectLight-textMain";

  const borderActive = Active
    ? "border-2 border-uConnectLight-accent bg-uConnectLight-layer2Secondary dark:bg-uConnectDark-layer2Secondary"
    : "";
  return (
    <div className={`${borderActive}`}>
      <div
        className={`flex flex-row justify-start items-center border-b p-3 gap-4 border-uConnectLight-layer3 dark:border-uConnectDark-layer3 font-semibold ${nameColor}`}
      >
        <div className="relative w-12 h-12">
          {Notification && (
            <span className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4 bg-uConnectLight-accent text-xs text-uConnectLight-layer1 dark:text-uConnectDark-layer1 rounded-full px-2">
              {Notification}
            </span>
          )}
          {Members &&
            Profile.map((profileImg, index) => (
              <img
                key={index}
                src={profileImg}
                alt={`${Name} - Profile ${index + 1}`}
                className={`absolute w-8 h-8 rounded-full border-2 border-[#131313] object-cover`}
                style={{
                  left: `${index * 15}px`, // Adjust horizontal overlap
                  top: `${index * 15}px`, // Adjust vertical overlap
                  zIndex: index, // Control stack order of images
                }}
              />
            ))}
          {!Members && (
            <img
              src={Profile}
              alt={`${Name}`}
              className={`w-12 h-12 rounded-full border-2 border-[#131313] object-cover`}
            />
          )}
        </div>
        <div className="flex flex-col items-start">
          {Name}
          {Members && (
            <span className="text-xs text-uConnectLight-textSub dark:text-uConnectDark-textSub">
              {Members} Members
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
