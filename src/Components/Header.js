import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../Utils/appSlice";
import { youtubeLink, menulink, bellIconlink, userprofilelink } from "../Utils/Links";

const Header = () => {
  const dispatch = useDispatch();

  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-cols-3 items-center shadow-md px-4 py-2 bg-white">
      
      {/* Logo / Menu Section */}
      <div className="flex items-center gap-3">
        <button
          onClick={handleToggleMenu}
          className="p-2 rounded-full hover:bg-gray-100 active:scale-95 transition-all duration-200"
          aria-label="Toggle Menu"
        >
          <img
            className="h-5 w-6"
            alt="Menu"
            src={menulink}
          />
        </button>
        <a href="/">
          <img
            className="h-6 cursor-pointer"
            alt="YouTube Logo"
            src={youtubeLink}
          />
        </a> 
      </div>

      {/* Search Section */}
      <div className="flex justify-center">
        <input
          className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-l-full focus:outline-none"
          type="text"
          placeholder="Search"
        />
        <button
          className="px-5 py-2 border border-gray-300 rounded-r-full bg-gray-100 hover:bg-gray-200 transition"
          aria-label="Search"
        >
          Search
        </button>
      </div>

      {/* Profile Section */}
      <div className="flex justify-end items-center gap-4">
        {/* Bell Icon */}
        <div className="p-1 rounded-full hover:bg-gray-200 active:scale-95 transition-all duration-200 cursor-pointer shadow-sm">
          <img
            className="h-8 w-8"
            alt="Bell Icon"
            src={bellIconlink}
          />
        </div>

        {/* User Profile */}
        <div className="p-1 rounded-full hover:bg-gray-200 active:scale-95 transition-all duration-200 cursor-pointer shadow-lg">
          <img
            className="h-10 w-10 rounded-full"
            alt="User Profile"
            src={userprofilelink}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
