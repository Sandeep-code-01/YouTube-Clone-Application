import React from "react";
import { useSelector } from "react-redux";
import { AiFillHome, AiOutlineVideoCamera, AiOutlineClockCircle } from "react-icons/ai";
import { MdLiveTv, MdSportsEsports, MdMusicNote } from "react-icons/md";
import { FaNewspaper, FaGraduationCap } from "react-icons/fa";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;

  const menuItem = "flex items-center gap-3 cursor-pointer hover:bg-gray-100 p-2 rounded";

  return (
    <div className="p-4 w-56 border-r border-gray-300 h-screen">
      <ul className="space-y-2">
        <li className={menuItem}><AiFillHome /> Home</li>
        <li className={menuItem}><AiOutlineVideoCamera /> Videos</li>
        <li className={menuItem}><MdLiveTv /> Live</li>
      </ul>

      <h1 className="font-semibold mt-6 mb-2">Subscriptions</h1>
      <ul className="space-y-2">
        <li className={menuItem}><MdMusicNote /> Music</li>
        <li className={menuItem}><MdSportsEsports /> Gaming</li>
        <li className={menuItem}><FaNewspaper /> News</li>
        <li className={menuItem}><FaGraduationCap /> Education</li>
      </ul>

      <h1 className="font-semibold mt-6 mb-2">Watch Later</h1>
      <ul>
        <li className={menuItem}><AiOutlineClockCircle /> Watch Later</li>
      </ul>
    </div>
  );
};

export default SideBar;
