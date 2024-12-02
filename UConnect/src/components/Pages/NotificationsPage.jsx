// src/components/pages/NotificationsPage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "../SearchBar";
import rashidaWilliams from "../../assets/profilePics/rashidaWilliams.jpeg";
import aaronPatel from "../../assets/profilePics/aaronPatel.jpg";
import jordanLi from "../../assets/profilePics/shirleyLee.webp";
import sofiaMartinez from "../../assets/profilePics/sofiaMartinez.jpg";
import saulAlvarez from "../../assets/profilePics/saulAlvarez.jpg";

// Notifications Data
const notificationsData = [
  {
    category: "Today",
    items: [
      {
        id: 1,
        name: "Rashida Williams",
        profilePic: rashidaWilliams,
        message: "Followed You",
        time: "2h ago",
        route: `/profile/rashida-williams`, // Profile route
      },
      {
        id: 2,
        name: "Saul Alvarez",
        profilePic: saulAlvarez,
        message: "Sent You a Message in Private",
        time: "2h ago",
        route: `/chats`, // Chat route
      },
      {
        id: 3,
        name: "Rashida Williams",
        profilePic: rashidaWilliams,
        message: "Sent You a Message in Group Bio 101",
        time: "4h ago",
        route: `/chats/group-bio-101`, // Group chat route
      },
      {
        id: 4,
        name: "Aaron Patel",
        profilePic: aaronPatel,
        message: "Liked Your Post",
        time: "7h ago",
        route: `/posts/123`, // Post route
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
        time: "4:32 PM",
        route: `/profile/jordan-li`, // Profile route
      },
      {
        id: 6,
        name: "Aaron Patel",
        profilePic: aaronPatel,
        message: "Commented On Your Post",
        time: "2:41 PM",
        route: `/posts/123#comment-456`, // Comment route
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
        time: "9/15/2024",
        route: `/profile/sofia-martinez`, // Profile route
      },
      {
        id: 8,
        name: "Aaron Patel",
        profilePic: aaronPatel,
        message: "Shared a Post",
        time: "9/15/2024",
        route: `/posts/789`, // Post route
      },
    ],
  },
];

export default function NotificationsPage({ setIsActive }) {
  const navigate = useNavigate();

  const handleNotificationClick = (route) => {
    if (route) {
      setIsActive(1);
      navigate(route); // Navigate to the specific route
    } else {
      console.log("No route defined for this notification.");
    }
  };

  return (
    <div className="flex min-h-screen bg-uConnectLight-background dark:bg-uConnectDark-background text-uConnectLight-textMain dark:text-uConnectDark-textMain transition">
      {/* Content Offset to Avoid Sidebar Overlap */}
      <div className="ml-64 w-full">
        {/* Search Bar */}
        <div className="sticky top-0 z-10 mb-20">
          <SearchBar placeholder="Search Notifications" />
        </div>

        {/* Notifications Content */}
        <div className="px-20">
          {notificationsData.map((section) => (
            <div key={section.category} className="mb-12">
              {/* Section Header */}
              <h2 className="text-lg font-semibold mb-4 dark:text-uConnectDark-textMain text-uConnectLight-textMain">
                {section.category}
              </h2>

              {/* Notifications List */}
              <ul className="space-y-4">
                {section.items.map((item) => (
                  <li
                    key={item.id}
                    onClick={() => handleNotificationClick(item.route)}
                    className="flex items-center justify-start gap-4 border-b pb-4 border-uConnectLight-layer3 dark:border-uConnectDark-layer3 cursor-pointer hover:bg-uConnectLight-layer2Primary dark:hover:bg-uConnectDark-layer2Primary px-3 py-2"
                  >
                    {/* Left Side: Profile Picture */}
                    <img
                      src={item.profilePic}
                      alt={item.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    {/* Notification Details */}
                    <div>
                      <p>
                        <span className="font-bold text-uConnectDark-accent">
                          {item.name}
                        </span>{" "}
                        <span className="dark:text-uConnectDark-textMain text-uConnectLight-textMain">
                          {item.message}
                        </span>
                      </p>
                      <span className="text-xs text-uConnectLight-textSub dark:text-uConnectDark-textSub">
                        {item.time}
                      </span>
                    </div>
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
