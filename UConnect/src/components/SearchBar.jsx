// src/components/SearchBar.jsx

import React from "react";
import { FaSearch } from "react-icons/fa";

export default function SearchBar() {
  return (
    <div className="fixed top-0 left-0 bg-uConnectLight-layer2Secondary dark:bg-uConnectDark-layer2Secondary text-uConnectLight-textMain dark:text-uConnectDark-textMain px-4 py-3 flex items-center w-full lg:ml-40 mt-4 lg:mt-0">
      <FaSearch className="text-uConnectDark-accent mr-3" /> {/* Search Icon */}
      <input
        type="text"
        placeholder="Search"
        className="bg-transparent placeholder-uConnectLight-layer3 dark:placeholder-uConnectDark-layer3 outline-none flex-1"
      />
    </div>
  );
}
