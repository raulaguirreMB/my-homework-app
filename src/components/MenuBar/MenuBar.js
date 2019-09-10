import React from "react";
import "./MenuBar.css";

const MenuBar = props => {
  return (
    <div className={"MenuBar-Container"}>
      <a href="DashBoard">DashBoard</a>
      <a href="BusinessOverview">Business Overview</a>
      <a href="Schedule">Schedule</a>
      <a href="Reports">Reports</a>
    </div>
  );
};

export default MenuBar;
