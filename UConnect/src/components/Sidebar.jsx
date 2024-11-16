// src/components/Sidebar.jsx
import React from "react";
import { FaHome, FaComments, FaBell, FaPenSquare, FaUser} from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/logo/uconnectSmallLogo.png";
import sofiaMartinez from "../assets/profilePics/sofiaMartinez.jpg";

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const routes = [
    { path: "/home", label: "Home", icon: <FaHome /> },
    { path: "/chats", label: "Chats", icon: <FaComments />, badge: "3" },
    { path: "/notifications", label: "Notifications", icon: <FaBell /> },
    { path: "/create-post", label: "Create Post", icon: <FaPenSquare /> },
    {
      path: "/my-profile",
      label: "My Profile",
      icon: (
        <div className="w-8 h-8 rounded-full overflow-hidden ">
          <img
            src={sofiaMartinez}
            alt="Sofia Martinez"
            className="w-full h-full object-cover"
          />
        </div>
      ),
    },
  ];

  return (
    <div className="fixed top-0 left-0 bg-[#1D1C1C] h-screen p-4 flex flex-col items-center lg:w-40 md:w-24 w-16 z-10">
      {/* Logo */}
      <div className="flex items-center mb-8">
        <img src={logo} alt="UConnect Logo" className="w-10 h-10 lg:w-20 lg:h-20" />
      </div>

      {/* Navigation Links */}
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
    </div>
  );
}

function SidebarItem({ icon, label, active, onClick, badge }) {
  return (
    <div
      onClick={onClick}
      className={`flex items-center space-x-2 p-2 rounded-lg cursor-pointer ${
        active ? "bg-[#414040] text-[#FC9D04]" : "text-[#C6C3C3] hover:text-[#FFFFFF]"
      }`}
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
