import React from "react";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
  const [query, setQuery] = useState("");  // State to store the search query
  const navigate = useNavigate();  // Hook to navigate to the search results page

  const handleSearch = (e) => {
    e.preventDefault();  // Prevent the default form submit behavior
    if (query.trim()) {
      // Redirect to the search results page with the query
      navigate(`/search-results?query=${encodeURIComponent(query)}`);
    }
  };

  return (
    <div className="fixed top-0 left-0 bg-uConnectLight-layer2Secondary dark:bg-uConnectDark-layer2Secondary text-uConnectLight-textMain dark:text-uConnectDark-textMain px-4 py-3 flex items-center w-full lg:ml-40 mt-4 lg:mt-0">
      <FaSearch className="text-uConnectDark-accent mr-3" /> {/* Search Icon */}
      <form onSubmit={handleSearch} className="flex w-full">
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent placeholder-uConnectLight-textSub dark:placeholder-uConnectDark-layer3 outline-none flex-1"
          value={query}  // Controlled input
          onChange={(e) => setQuery(e.target.value)}  // Update the query state on input change
        />
        <button type="submit" className="hidden">Search</button> {/* Submit button to trigger form submission */}
      </form>
    </div>
  );
}
