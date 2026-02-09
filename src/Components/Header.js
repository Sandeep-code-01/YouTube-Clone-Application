import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../Utils/appSlice"; // Sidebar menu open/close
import {
  youtubeLink,        // YouTube logo image
  menulink,           // Hamburger menu icon
  bellIconlink,       // Notification bell icon
  userprofilelink,    // User profile avatar
} from "../Utils/Links";
import { YOUTUBE_SEARCH_API } from "../Utils/constants"; // Search suggestions API
import { cacheResults } from "../Utils/searchSlice";    // Redux cache action

// Header component (Top navigation bar)
const Header = () => {

  // Search input value
  const [searchQuery, setSearchQuery] = useState("");

  // Suggestions list coming from API / cache
  const [suggestions, setSuggestions] = useState([]);

  // Controls visibility of suggestions dropdown
  const [showSuggestions, setShowSuggestions] = useState(false);

  // Redux store search cache
  const searchCache = useSelector((store) => store.search);

  // Redux dispatcher
  const dispatch = useDispatch();

  // Debounced search effect
  useEffect(() => {
    if (searchQuery === "") return;

    const timer = setTimeout(() => {
      // If search already cached → use it
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } 
      // Else → call API
      else {
        getSearchSuggestions();
      }
    }, 200);

    return () => clearTimeout(timer);
  }, [searchQuery, searchCache]);

  // Fetch search suggestions from YouTube API
  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    console.log(json);

    setSuggestions(json[1]);

    // Store results in Redux cache
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  // Toggle sidebar menu
  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-cols-3 items-center shadow-md px-4 py-2 bg-white">

      {/* Left section: Menu + Logo */}
      <div className="flex items-center gap-3">
        <button
          onClick={handleToggleMenu}
          className="p-2 rounded-full hover:bg-gray-100"
        >
          <img className="h-5 w-6" alt="Menu" src={menulink} />
        </button>

        <a href="/">
          <img
            className="h-6 cursor-pointer"
            alt="YouTube Logo"
            src={youtubeLink}
          />
        </a>
      </div>

      {/* Middle section: Search box */}
      <div className="flex justify-center relative">
        <div className="flex w-full max-w-md">
          <input
            className="w-full px-4 py-2 border border-gray-300 rounded-l-full outline-none"
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="px-5 py-2 border border-gray-300 rounded-r-full bg-gray-100">
            Search
          </button>
        </div>

        {/* Search suggestions dropdown */}
        {showSuggestions && (
          <div className="absolute top-12 bg-white shadow-lg rounded-lg w-[26rem] z-10">
            <ul>
              {suggestions.map((suggestion, index) => (
                <li
                  key={index}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  <img
                    src="https://img.icons8.com/?size=100&id=132&format=png"
                    className="h-4 w-4 inline mr-2"
                    alt="Search Icon"
                  />
                  {suggestion}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Right section: Icons */}
      <div className="flex justify-end items-center gap-4">
        <img className="h-8 w-8" alt="Bell Icon" src={bellIconlink} />
        <img
          className="h-10 w-10 rounded-full"
          alt="User Profile"
          src={userprofilelink}
        />
      </div>

    </div>
  );
};

export default Header;
