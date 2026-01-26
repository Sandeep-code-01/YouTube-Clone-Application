import React from "react";

const Header = () => {
  return (
    <div className="grid grid-cols-3 shadow-md p-2 items-center">
      
      {/* Logo Section */}
      <div className="flex items-center">
        <img
          className="h-10 cursor-pointer"
          alt="Menu"
          src="https://th.bing.com/th/id/OIP.A1uEYumGY9JXr_AB4bQl3gHaHa?w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
        />
        <img
          className="h-9 ml-4"
          alt="YouTube Logo"
          src="data:image/png;base64,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"
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
