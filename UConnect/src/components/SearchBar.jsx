// src/components/SearchBar.jsx
import React from "react";
import { FaSearch } from "react-icons/fa";

export default function SearchBar() {
  return (
    <div className="flex items-center bg-[#414040] text-white rounded-full border border-[#FC9D04] px-4 py-2 w-full max-w-lg">
      <FaSearch className="text-[#C6C3C3] mr-3" /> {/* Search Icon */}
      <input
        type="text"
        placeholder="Search"
        className="bg-transparent placeholder-[#C6C3C3] outline-none flex-1"
      />
    </div>
  );
}
