import React from "react";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <SideBar />
     <Outlet />
    </div>
  );
};

export default Body;
