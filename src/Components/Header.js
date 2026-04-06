import React, { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../Utils/appSlice";
import {
  youtubeLink,
  menulink,
  bellIconlink,
  userprofilelink,
} from "../Utils/Links";
import { YOUTUBE_SEARCH_API } from "../Utils/constants";
import { cacheResults } from "../Utils/searchSlice";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();

  // ✅ Memoized API call
  const getSearchSuggestions = useCallback(async () => {
    try {
      const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
      const json = await data.json();

      setSuggestions(json[1]);

      dispatch(
        cacheResults({
          [searchQuery]: json[1],
        })
      );
    } catch (error) {
      console.error("Error fetching suggestions:", error);
    }
  }, [searchQuery, dispatch]);

  // ✅ Debounced search
  useEffect(() => {
    if (searchQuery === "") return;

    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => clearTimeout(timer);
  }, [searchQuery, searchCache, getSearchSuggestions]);

  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-cols-3 items-center shadow-md px-4 py-2 bg-white">
      
      {/* Left */}
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

      {/* Middle */}
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

        {/* Suggestions */}
        {showSuggestions && suggestions.length > 0 && (
          <div className="absolute top-12 bg-white shadow-lg rounded-lg w-[26rem] z-10">
            <ul>
              {suggestions.map((suggestion, index) => (
                <li
                  key={index}
                  onMouseDown={() => setSearchQuery(suggestion)} // ✅ fix blur issue
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

      {/* Right */}
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