import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

// Export with a placeholder that can be modified in each page
export default function SearchBar({ placeholder = "Search", searched }) {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search-results?query=${encodeURIComponent(query)}`);
    }
  };

  return (
    <div className="fixed top-0 left-0 bg-uConnectLight-layer2Secondary dark:bg-uConnectDark-layer2Secondary text-uConnectLight-textMain dark:text-uConnectDark-textMain px-4 py-3 flex items-center w-full lg:ml-40 mt-4 lg:mt-0">
      <FaSearch className="text-uConnectDark-accent mr-3" /> {/* Search Icon */}
      <form onSubmit={handleSearch} className="flex w-full">
        {/* Input field */}
        <input
          type="text"
          placeholder={placeholder}
          className="bg-transparent placeholder-uConnectLight-textSub dark:placeholder-uConnectDark-layer3 outline-none flex-1"
          value={searched || query}
          onChange={(e) => setQuery(e.target.value)}
        />
        {/* Submit Query */}
        <button type="submit" className="hidden">
          Search
        </button>
      </form>
    </div>
  );
}
