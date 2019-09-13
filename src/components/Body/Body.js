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
        <div>
          <button name="newProgramBtn" className="newProgramBtn">
            <img src="./assets/plus_icon.png" alt="Plus Icon"></img>
          </button>
          <label className="newProgramBtnLabel" to="newProgramBtn">
            New Program
          </label>
        </div>
        <div className="Programs">
          <Program data={this.props.data[0]} />
          <Program data={this.props.data[1]} />
          <Program data={this.props.data[2]} />
        </div>
      </div>
    );
  }
}

export default Body;
