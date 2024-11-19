import React, { useEffect } from "react";

export default function Notification({ message, type, onClose }) {
  useEffect(() => {
    // Automatically dismiss the notification after 3 seconds
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer); // Cleanup the timer
  }, [onClose]);

  return (
    <div
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 ${
        type === "success" ? "bg-green-500" : "bg-red-500"
      } text-uConnectLight-textMain dark:text-uConnectDark-textMain px-6 py-3 rounded-lg shadow-lg animate-drop-in`}
      style={{ animation: "drop-in 0.5s ease-out" }}
    >
      <span>{message}</span>
      <button
        onClick={onClose}
        className="ml-4 text-lg font-semibold text-uConnectLight-textMain dark:text-uConnectDark-textMain hover:text-gray-300"
      >
        &#10005; {/* Close icon */}
      </button>
    </div>
  );
}
