import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../Utils/appSlice";

const Header = () => {
  const dispatch = useDispatch();

  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-cols-3 shadow-md p-2 items-center">
      {/* Logo Section */}
      <div className="flex items-center">
        <img
          className="h-10 cursor-pointer"
          alt="Menu"
          src="https://th.bing.com/th/id/OIP.A1uEYumGY9JXr_AB4bQl3gHaHa?w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
          onClick={handleToggleMenu}
        />
        <img
          className="h-9 ml-4"
          alt="YouTube Logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/960px-Logo_of_YouTube_%282015-2017%29.svg.png"
        />
      </div>

      {/* Search Section */}
      <div className="flex justify-center">
        <input
          className="w-96 px-4 py-2 border border-gray-300 rounded-l-full focus:outline-none"
          type="text"
          placeholder="Search"
        />
        <button className="px-4 py-2 border border-gray-300 rounded-r-full bg-gray-100">
          Search
        </button>
      </div>

      {/* Profile Section */}
      <div className="flex justify-end items-center gap-4 pr-4">
        <img
          className="h-8 w-8"
          alt="Bell Icon"
          src="https://www.bing.com/th/id/OIP.ok0xXCChzb0Ti3hSC8BH-QHaHa?w=195&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
        />
        <img
          className="h-10 w-10 rounded-full"
          alt="User Profile"
          src="https://www.bing.com/th/id/OIP.7O4_GREtLbxqPdJCTmfatQHaHa?w=195&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
        />
      </div>
    </div>
  );
};

export default Header;
