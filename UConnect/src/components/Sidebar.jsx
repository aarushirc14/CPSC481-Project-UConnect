// src/components/Sidebar.jsx
import React from "react";
import { FaHome, FaComments, FaBell, FaPenSquare, FaUser, FaCog} from "react-icons/fa";
import logo from "../assets/logo/uconnect-small-logo.png";

export default function Sidebar({ activeItem, onSelectItem }) {
  return (
    <div className="w-100 bg-[#1D1C1C] h-screen p-4 flex flex-col items-center lg:w-40 md:w-24 w-16">
      {/* Logo */}
      <div className="flex items-center mb-8">
        <img src={logo} alt="UConnect Logo" className="w-10 h-10 lg:w-20 lg:h-20" />
      </div>

      {/* Navigation Links */}
      <nav className="space-y-4">
        <SidebarItem icon={<FaHome />} label="Home" active={activeItem === "home"} onClick={() => onSelectItem("home")} />
        <SidebarItem icon={<FaComments />} label="Chats" badge="3" active={activeItem === "chats"} onClick={() => onSelectItem("chats")} />
        <SidebarItem icon={<FaBell />} label="Notifications" active={activeItem === "notifications"} onClick={() => onSelectItem("notifications")} />
        <SidebarItem icon={<FaPenSquare />} label="Create Post" active={activeItem === "create-post"} onClick={() => onSelectItem("create-post")} /> 
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
      className={`flex items-center space-x-2 p-2 rounded-lg cursor-pointer ${active ? "bg-[#414040] text-[#FC9D04]" : "text-[#C6C3C3] hover:text-[#FFFFFF]"}`}
    >
      <div className="relative">
        <span className="text-xl">{icon}</span>
        {badge && (
          <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-[#FC9D04] text-xs text-[#000000] rounded-full px-2">
            {badge}
          </span>
        )}
      </div>
      <span className="flex-1 hidden lg:block">{label}</span>
    </div>
  );
}
