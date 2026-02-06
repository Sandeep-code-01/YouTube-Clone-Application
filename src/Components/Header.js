import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../Utils/appSlice";
import {
  youtubeLink,
  menulink,
  bellIconlink,
  userprofilelink,
} from "../Utils/Links";
import { YOUTUBE_SEARCH_API } from "../Utils/constants";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (searchQuery === "") return;
    getSearchSuggestions();
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    console.log(json);
  };

  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-cols-3 items-center shadow-md px-4 py-2 bg-white">
      
      {/* Logo / Menu */}
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

      {/* Search */}
      <div className="flex justify-center">
        <input
          className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-l-full outline-none"
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="px-5 py-2 border border-gray-300 rounded-r-full bg-gray-100">
          Search
        </button>
      </div>

      {/* Profile */}
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
