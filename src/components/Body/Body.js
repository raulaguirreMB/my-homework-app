import React from "react";
import Program from "../Program/Program";
import "./Body.css";

class Body extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div className={"Body-Container"}>
        <button name="newProgramBtn" className="newProgramBtn">
          <img src="./assets/plus_icon.png" alt="Plus Icon"></img>
        </button>
        <label className="newProgramBtnLabel" to="newProgramBtn">
          New Program
        </label>
        <div className="Programs">
          <Program />
          <Program />
          <Program />
        </div>
      </div>
    );
  }
}

export default Body;
