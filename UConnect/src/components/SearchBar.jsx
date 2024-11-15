// src/components/SearchBar.jsx
import React from "react";
import { FaSearch } from "react-icons/fa";

export default function SearchBar() {
  return (
    <div className="fixed top-0 left-0 bg-[#1D1C1C] text-white px-4 py-3 flex items-center w-full lg:ml-40 mt-4 lg:mt-0">
      <FaSearch className="text-[#FC9D04] mr-3" /> {/* Search Icon */}
      <input
        type="text"
        placeholder="Search"
        className="bg-transparent placeholder-[#C6C3C3] outline-none flex-1"
      />
    </div>
  );
}
