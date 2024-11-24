// src/components/pages/NotificationsPage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import tracySmith from "../../assets/profilePics/tracySmith.jpeg";
import aaronPatel from "../../assets/profilePics/aaronPatel.jpg";
import jordanLi from "../../assets/profilePics/shirleyLee.webp";
import sofiaMartinez from "../../assets/profilePics/sofiaMartinez.jpg";

// Notifications Data
const notificationsData = [
  {
    category: "Today",
    items: [
      {
        id: 1,
        name: "Tracy Smith",
        profilePic: tracySmith,
        message: "Followed You",
        action: "View Profile",
        time: "2h ago",
        route: "/profile/tracy-smith",
      },
      {
        id: 2,
        name: "Tracy Smith",
        profilePic: tracySmith,
        message: "Sent You a Message in Private",
        action: "View Chat",
        time: "2h ago",
        route: "/chats/tracy-smith",
      },
      {
        id: 3,
        name: "Tracy Smith",
        profilePic: tracySmith,
        message: "Sent You a Message in Group Bio 101",
        action: "View Chat",
        time: "4h ago",
        route: "/chats/group-bio-101",
      },
      {
        id: 4,
        name: "Aaron Patel",
        profilePic: aaronPatel,
        message: "Liked Your Post",
        action: "View Post",
        time: "7h ago",
        route: "/posts/123",
      },
    ],
  },
  {
    category: "Yesterday",
    items: [
      {
        id: 5,
        name: "Jordan Li",
        profilePic: jordanLi,
        message: "Followed You",
        action: "View Profile",
        time: "4:32 PM",
        route: "/profile/jordan-li",
      },
      {
        id: 6,
        name: "Aaron Patel",
        profilePic: aaronPatel,
        message: "Commented On Your Post",
        action: "View Comment",
        time: "2:41 PM",
        route: "/posts/123#comment-456",
      },
    ],
  },
  {
    category: "Past 7 Days",
    items: [
      {
        id: 7,
        name: "Sofia Martinez",
        profilePic: sofiaMartinez,
        message: "Followed You",
        action: "View Profile",
        time: "9/15/2024",
        route: "/profile/sofia-martinez",
      },
      {
        id: 8,
        name: "Aaron Patel",
        profilePic: aaronPatel,
        message: "Shared a Post",
        action: "View Post",
        time: "9/15/2024",
        route: "/posts/789",
      },
    ],
  },
];

export default function NotificationsPage() {
  const navigate = useNavigate();

  const handleButtonClick = (route) => {
    if (route) {
      navigate(route); // Navigate to the specified route
    } else {
      console.log("No route defined for this action.");
    }
  };

  return (
    <div className="flex min-h-screen bg-uConnectLight-background dark:bg-uConnectDark-background text-uConnectLight-textMain dark:text-uConnectDark-textMain">
      {/* Content Offset to Avoid Overlap */}
      <div className="ml-64 w-full">
        {/* Search Bar */}
        <div className="flex items-center border-2 rounded-full border-uConnectDark-accent m-10 mx-20 p-3 bg-uConnectLight-layer2Primary dark:bg-uConnectDark-layer2Primary">
          <FaSearch className="text-uConnectDark-accent mr-3" />
          <input
            type="text"
            placeholder="Search Notifications"
            className="bg-transparent outline-none w-full placeholder-uConnectLight-textSub dark:placeholder-uConnectDark-textSub"
          />
        </div>

        {/* Notifications Content */}
        <div className="px-20">
          {notificationsData.map((section) => (
            <div key={section.category} className="mb-12">
              {/* Section Header */}
              <h2 className="text-lg font-semibold mb-4 dark:text-uConnectDark-accent text-uConnectLight-accent">
                {section.category}
              </h2>

              {/* Notifications List */}
              <ul className="space-y-4">
                {section.items.map((item) => (
                  <li
                    key={item.id}
                    className="flex items-center justify-between border-b border-uConnectLight-layer3 dark:border-uConnectDark-layer3 pb-4"
                  >
                    {/* Left Side: Profile Picture and Message */}
                    <div className="flex items-center">
                      <img
                        src={item.profilePic}
                        alt={item.name}
                        className="w-12 h-12 rounded-full object-cover mr-4"
                      />
                      <div>
                        <p>
                          <span className="font-bold">{item.name}</span>{" "}
                          <span className="text-uConnectDark-accent dark:text-uConnectLight-accent">
                            {item.message}
                          </span>
                        </p>
                        <span className="text-xs text-uConnectLight-textSub dark:text-uConnectDark-textSub">
                          {item.time}
                        </span>
                      </div>
                    </div>

                    {/* Right Side: Action Button */}
                    <button
                      onClick={() => handleButtonClick(item.route)}
                      className="text-sm font-semibold px-4 py-2 bg-uConnectLight-accent text-white rounded-lg hover:opacity-90"
                    >
                      {item.action}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
