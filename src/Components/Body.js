import React from "react";
import SideBar from "./SideBar";
import MainContainer from "./MainContainer";

const Body = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <SideBar />
      <main className="flex-1">
        <MainContainer />
      </main>
    </div>
  );
};

export default Body;
