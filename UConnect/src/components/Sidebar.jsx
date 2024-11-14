// src/components/Sidebar.jsx
import React from "react";
import { FaHome, FaBell, FaUser, FaCog, FaEnvelope, FaClipboardList } from "react-icons/fa";
import logo from "../assets/logo/uconnect-small-logo.png"; // Import the logo image

export default function Sidebar({ activeItem, onSelectItem }) {
  return (
    <div className="w-100 bg-[#1D1C1C] h-screen p-4 flex flex-col items-center">
      {/* Logo */}
      <div className="flex items-center mb-8">
        <img src={logo} alt="UConnect Logo" className="w-20 h-20" /> {/* Use image as logo */}
      </div>

      {/* Navigation Links */}
      <nav className="space-y-4">
        <SidebarItem icon={<FaHome />} label="Home" active={activeItem === "home"} onClick={() => onSelectItem("home")} />
        <SidebarItem icon={<FaClipboardList />} label="Posts" active={activeItem === "posts"} onClick={() => onSelectItem("posts")} />
        <SidebarItem icon={<FaEnvelope />} label="Chats" badge="3" active={activeItem === "chats"} onClick={() => onSelectItem("chats")} />
        <SidebarItem icon={<FaBell />} label="Notifications" active={activeItem === "notifications"} onClick={() => onSelectItem("notifications")} />
        <SidebarItem icon={<FaUser />} label="My Profile" active={activeItem === "profile"} onClick={() => onSelectItem("profile")} />
      </nav>

      {/* Settings Link */}
      <div className="mt-auto w-full">
        <SidebarItem icon={<FaCog />} label="Settings" active={activeItem === "settings"} onClick={() => onSelectItem("settings")} />
      </div>
    </div>
  );
}

function SidebarItem({ icon, label, active, onClick, badge }) {
  return (
    <div
      onClick={onClick}
      className={`flex items-center space-x-2 p-2 rounded-lg cursor-pointer ${active ? "bg-[#414040] text-[#FC9D04]" : "text-gray-400 hover:text-white"}`}
    >
      <span className="text-xl">{icon}</span>
      <span className="flex-1">{label}</span>
      {badge && (
        <span className="bg-[#FC9D04] text-xs text-black rounded-full px-2">{badge}</span>
      )}
    </div>
  );
}
