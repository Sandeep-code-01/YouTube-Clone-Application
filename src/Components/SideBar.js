import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  AiFillHome,
  AiOutlineVideoCamera,
  AiOutlineClockCircle,
} from "react-icons/ai";
import { MdLiveTv, MdSportsEsports, MdMusicNote } from "react-icons/md";
import { FaNewspaper, FaGraduationCap } from "react-icons/fa";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const [active, setActive] = useState("Home");

  if (!isMenuOpen) return null;

  const menuItem = (item) =>
    `flex items-center gap-3 cursor-pointer p-2 rounded transition
     ${
       active === item
         ? "bg-gray-200 font-semibold"
         : "hover:bg-gray-100"
     }`;

  return (
    <div className="p-4 w-56 border-r border-gray-300 h-screen">
      {/* Main */}
      <ul className="space-y-2">
        <li className={menuItem("Home")} onClick={() => setActive("Home")}>
          <AiFillHome /> Home
        </li>
        <li className={menuItem("Videos")} onClick={() => setActive("Videos")}>
          <AiOutlineVideoCamera /> Videos
        </li>
        <li className={menuItem("Live")} onClick={() => setActive("Live")}>
          <MdLiveTv /> Live
        </li>
      </ul>

      <hr className="my-4 border-gray-300" />

      {/* Subscriptions */}
      <h1 className="font-semibold mb-2">Subscriptions</h1>
      <ul className="space-y-2">
        <li className={menuItem("Music")} onClick={() => setActive("Music")}>
          <MdMusicNote /> Music
        </li>
        <li className={menuItem("Gaming")} onClick={() => setActive("Gaming")}>
          <MdSportsEsports /> Gaming
        </li>
        <li className={menuItem("News")} onClick={() => setActive("News")}>
          <FaNewspaper /> News
        </li>
        <li className={menuItem("Education")} onClick={() => setActive("Education")}>
          <FaGraduationCap /> Education
        </li>
      </ul>

      <hr className="my-4 border-gray-300" />

      {/* Watch Later */}
      <h1 className="font-semibold mb-2">Watch Later</h1>
      <ul>
        <li
          className={menuItem("Watch Later")}
          onClick={() => setActive("Watch Later")}
        >
          <AiOutlineClockCircle /> Watch Later
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
