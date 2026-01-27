import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../Utils/appSlice";

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
            className="h-6 w-6"
            alt="Menu"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKMAAACUCAMAAADIzWmnAAAAVFBMVEX///8jHyAAAAAgHB21s7QwLC3LysrOzs4MAATr6+v8/PzY2NjT09PDw8M9Ojq8vLyEgoJCP0Dh4eFMSUocFxiLiYnx8fF4dnY0MTITDQ5nZWZRT09a1d6FAAAAwklEQVR4nO3bW27CMBBA0eBQSoz7IuHRsv99tmvoyFEGnbOCK1vJhzUzDAAAAAAAZNX23b3VUOH0XlawfAQS62fZreD76/r/xvO8rNG4Ky3Q+Nh+Y72UZeyvzIG7Hurt/tLd/ecUSPzTDt21yCkCAAAA8HSup9fu2hRKnG7HFTwOgcR6KWP/V9zxOAdOMsV7eILGDHed4ZtJ8e8BAAAA4Nlsf0YzwaxrhpnhDLPXKd7DE+wCZNipGDLspgAAAAAAsAW/dXglnXjoQbMAAAAASUVORK5CYII="
          />
        </button>
        <a href="/">
        <img
          className="h-10 cursor-pointer"
          alt="YouTube Logo"
          src="https://1000logos.net/wp-content/uploads/2017/05/Youtube-Logo-2017-2048x1152.png"
        />
        </a> 
      </div>

      {/* Search Section */}
      <div className="flex justify-center">
        <input
          className="w-96 px-4 py-2 border border-gray-300 rounded-l-full focus:outline-none"
          type="text"
          placeholder="Search"
        />
        <button className="px-5 py-2 border border-gray-300 rounded-r-full bg-gray-100 hover:bg-gray-200 transition">
          Search
        </button>
      </div>

      {/* Profile Section */}
      <div className="flex justify-end items-center gap-4">
        <img
          className="h-8 w-8 rounded-full hover:bg-gray-400 shadow cursor-pointer"
          alt="Bell Icon"
          src="https://www.bing.com/th/id/OIP.ok0xXCChzb0Ti3hSC8BH-QHaHa?w=195&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
        />
        <img
          className="h-10 w-10 rounded-full cursor-pointer"
          alt="User Profile"
          src="https://www.bing.com/th/id/OIP.7O4_GREtLbxqPdJCTmfatQHaHa?w=195&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
        />
      </div>
    </div>
  );
};

export default Header;
