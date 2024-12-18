import React, { useState, useEffect } from "react";
import {
  FaHome,
  FaComments,
  FaBell,
  FaPenSquare,
  FaUser,
  FaSun,
  FaMoon,
  FaSignOutAlt, // Import the logout icon
} from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/logo/uconnectSmallLogo.png";
import { WarningPopup } from "../components/pages/ChatPage";

export default function Sidebar({
  onLogout,
  chatNotificationCount,
  setIsActive,
  setNotificationCount,
  notificationCount,
  changes,
  setChanges,
}) {
  const navigate = useNavigate();
  const location = useLocation();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isWarningVisible, setIsWarningVisible] = useState(false); // Manage popup visibility
  const [routeToNavigate, setRouteToNavigate] = useState(""); // Store the route to navigate after confirmation
  const [warningMessage, setWarningMessage] = useState("");

  const disableLabel = window.location.pathname === "/chats";

  // Sync dark mode state with the document
  useEffect(() => {
    if (document.documentElement.classList.contains("dark")) {
      setIsDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (location.pathname !== "/chats") setIsActive(-1);
    if (location.pathname === "/notifications") setNotificationCount(null);
  }, [location.pathname]);

  const toggleDarkMode = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    }
  };

  const handleLogout = () => {
    onLogout(); // Trigger the parent logout function
    navigate("/login"); // Explicitly navigate to the login page
  };

  const routes = [
    { path: "/home", label: "Home", icon: <FaHome /> },
    {
      path: "/chats",
      label: "Chats",
      icon: <FaComments />,
      badge: chatNotificationCount,
    },
    {
      path: "/notifications",
      label: "Notifications",
      icon: <FaBell />,
      badge: notificationCount > 0 ? notificationCount : null, // Show badge only if count > 0
    },
    { path: "/create-post", label: "Create Post", icon: <FaPenSquare /> },
    { path: "/my-profile", label: "My Profile", icon: <FaUser /> },
  ];

  const navBarSize = disableLabel ? "lg:w-20" : "lg:w-40";
  const iconSize = disableLabel ? "lg:w-7 lg:h-7" : "lg:w-20 lg:h-20";

  const editingPage = location.pathname === "/edit-profile";

  return (
    <div
      className={`fixed top-0 left-0 bg-uConnectLight-layer2Secondary dark:bg-uConnectDark-layer2Secondary h-screen p-4 flex flex-col items-center ${navBarSize} w-16 z-10`}
    >
      <div
        className="flex items-center mb-8 min-h-20 cursor-pointer"
        onClick={() => navigate("/home")}
      >
        <img src={logo} alt="UConnect Logo" className={`w-7 h-7 ${iconSize}`} />
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
              onClick={() => {
                if (editingPage && changes) {
                  setWarningMessage(`Leave Without Saving`);
                  setRouteToNavigate(route.path);
                  setIsWarningVisible(true);
                } else {
                  navigate(route.path);
                }
              }}
              disableLabel={disableLabel}
            />
          ))}
        </nav>
        {/* Dark Mode Toggle */}
        <div className="flex justify-center items-center flex-col gap-2">
          {!disableLabel && (
            <span
              className={`${
                isDarkMode
                  ? "text-uConnectDark-layer3"
                  : "text-uConnectLight-textSub"
              }`}
            >
              Theme
            </span>
          )}
          <div
            onClick={toggleDarkMode}
            className={`relative group flex items-center w-16 h-8 rounded-full cursor-pointer transition-colors duration-300 ${
              isDarkMode
                ? "bg-uConnectDark-layer2Primary"
                : "bg-uConnectLight-textSub"
            } relative p-1`}
          >
            <div
              className={`absolute w-6 h-6 rounded-full border-2 transform transition-transform  ${
                isDarkMode
                  ? "translate-x-8 bg-uConnectDark-textMain border-uConnectLight-textMain"
                  : "translate-x-0 bg-uConnectDark-textMain border-uConnectLight-textMain"
              } flex items-center justify-center`}
            >
              {isDarkMode ? (
                <FaMoon className="text-uConnectDark-accent" />
              ) : (
                <FaSun className="text-uConnectLight-accent" />
              )}
            </div>
          </div>

          {/* Logout Button */}
          <div className="mt-5">
            <SidebarItem
              icon={<FaSignOutAlt />} // Correct logout icon
              label="Logout"
              onClick={handleLogout}
              active={false} // Logout should not be active
            />
          </div>
          {isWarningVisible && (
            <WarningPopup
              isVisible={isWarningVisible}
              setIsVisible={setIsWarningVisible}
              action={() => {
                setIsWarningVisible(false);
                navigate(routeToNavigate); // Navigate after confirmation
                setChanges(false);
              }}
              warning={warningMessage}
            />
          )}
        </div>
      </div>
    </div>
  );
}

function SidebarItem({ icon, label, active, onClick, badge }) {
  const disableLabel = window.location.pathname === "/chats";
  return (
    <div
      onClick={onClick}
      className={`relative group flex items-center space-x-2 p-2 rounded-lg cursor-pointer justify-center ${
        active
          ? "bg-uConnectLight-layer2Primary text-uConnectLight-accent dark:bg-uConnectDark-layer2Primary dark:text-uConnectDark-accent"
          : "text-uConnectLight-textSub hover:text-uConnectLight-textMain dark:text-uConnectDark-layer3 dark:hover:text-uConnectDark-textMain"
      }`}
    >
      <div className="relative flex items-center justify-center">
        <span className="text-xl">{icon}</span>
        {badge && (
          <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-uConnectLight-accent dark:bg-uConnectDark-accent text-xs text-uConnectLight-layer1 dark:text-uConnectDark-layer1 rounded-full px-2">
            {badge}
          </span>
        )}
      </div>
      {!disableLabel ? (
        <span className="flex-1 hidden lg:block">{label}</span>
      ) : (
        <div className="absolute bottom-full mb-2 hidden group-hover:block bg-uConnectLight-layer2Primary dark:bg-uConnectDark-layer2Primary text-uConnectLight-textMain dark:text-uConnectDark-layer3 text-xs rounded-md px-2 py-1 whitespace-nowrap shadow-md z-10">
          {label}
        </div>
      )}
    </div>
  );
}
