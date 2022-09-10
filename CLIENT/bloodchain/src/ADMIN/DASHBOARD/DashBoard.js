import React from "react";
import SideMenu from "../COMPONENTs/SideMenu";
import "./dashboard.css";

const DashBoard = () => {
  return (
    <div
      style={{ display: "flex", height: "100vh", overflow: "scroll initial" }}
    >
      <SideMenu />
      <h1 className="title red">HELLO</h1>
    </div>
  );
};

export default DashBoard;
