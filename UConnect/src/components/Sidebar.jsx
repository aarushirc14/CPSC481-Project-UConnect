// src/components/Sidebar.jsx

import React from "react";
import {
  FaHome,
  FaComments,
  FaBell,
  FaPenSquare,
  FaUser,
} from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/logo/uconnectSmallLogo.png";

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const toggleDarkMode = () => {
    const isDarkMode = document.documentElement.classList.contains("dark");

    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  };

  const routes = [
    { path: "/home", label: "Home", icon: <FaHome /> },
    { path: "/chats", label: "Chats", icon: <FaComments />, badge: "3" },
    { path: "/notifications", label: "Notifications", icon: <FaBell /> },
    { path: "/create-post", label: "Create Post", icon: <FaPenSquare /> },
    { path: "/my-profile", label: "My Profile", icon: <FaUser /> },
  ];

  const navBarSize = location.pathname === "/chats" ? "lg:w-16" : "lg:w-40";
  const iconSize =
    location.pathname === "/chats" ? "lg:w-7 lg:h-7" : "lg:w-20 lg:h-20";

  return (
    <div
      className={`fixed top-0 left-0 bg-uConnectLight-layer2Secondary dark:bg-uConnectDark-layer2Secondary h-screen p-4 flex flex-col items-center ${navBarSize} w-16 z-10`}
    >
      {/* Logo */}
      <div className="flex items-center mb-8 min-h-20">
        <img
          src={logo}
          alt="UConnect Logo"
          className={`w-7 h-7 ${iconSize}`}
        />
      </div>

      {/* Navigation Links */}
      <div className="flex justify-between flex-col h-full">
        <nav className="space-y-4">
          {routes.map((route) => (
            <SidebarItem
              key={route.path}
              icon={route.icon}
              label={route.label}
              badge={route.badge}
              active={location.pathname === route.path}
              onClick={() => navigate(route.path)}
            />
          ))}
        </nav>
        <div className="flex justify-center items-center flex-col gap-2">
          <span className="text-uConnectLight-textSub dark:text-uConnectDark-layer3 text-xs">
            Dark Mode
          </span>
          <div
            onClick={toggleDarkMode}
            className="flex items-center cursor-pointer w-8 h-4 dark:bg-uConnectLight-accent bg-uConnectDark-layer3 rounded-full p-1 transition-colors duration-300"
          >
            <div className="w-3 h-3 bg-uConnectDark-layer2Secondary rounded-full transform transition-transform duration-300 dark:translate-x-3"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SidebarItem({ icon, label, active, onClick, badge }) {
  const disableLabel = location.pathname === "/chats";

  return (
    <div
      onClick={onClick}
      className={`flex items-center space-x-2 p-2 rounded-lg cursor-pointer justify-center ${
        active
          ? "bg-uConnectLight-layer2Primary text-uConnectLight-accent dark:bg-uConnectDark-layer2Primary dark:text-uConnectDark-accent"
          : "text-uConnectLight-textSub hover:text-uConnectLight-textMain dark:text-uConnectDark-layer3 dark:hover:text-uConnectDark-textMain"
      }`}
    >
      <div className="relative min-h-6 flex items-center justify-center">
        <span className="text-xl">{icon}</span>
        {badge && (
          <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-uConnectLight-accent dark:bg-uConnectDark-accent text-xs text-uConnectLight-layer1 dark:text-uConnectDark-layer1 rounded-full px-2">
            {badge}
          </span>
        )}
      </div>
      {disableLabel ? null : (
        <span className="flex-1 hidden lg:block">{label}</span>
      )}
    </div>
  );
}
