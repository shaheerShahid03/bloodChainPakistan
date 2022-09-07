import React from "react";
import SideMenu from "../COMPONENTs/SideMenu";

const DashBoard = () => {
  return (
    <div
      style={{ display: "flex", height: "100vh", overflow: "scroll initial" }}
    >
      <SideMenu />
      <h1>HELLO</h1>
    </div>
  );
};

export default DashBoard;
