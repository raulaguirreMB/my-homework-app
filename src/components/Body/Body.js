import React from "react";
import Program from "../Program/Program";
import "./Body.css";

class Body extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    let programs = [];
    let {
      dataForProgramHeader,
      dataForProgramBody,
      showMore,
      HandleUpdateState
    } = this.props;

    let bodydata = [];

    if (dataForProgramHeader != null) {
      programs = dataForProgramHeader
        .filter((key, index) => index < 3)
        .map((pro, index) => {
          bodydata = dataForProgramBody.filter(
            arr => pro.ProgramID === arr.ProgramID
          );

          return (
            <Program
              key={index}
              dataForProgramHeader={pro}
              dataForProgramBody={bodydata}
              showMore={showMore}
              HandleUpdateState={HandleUpdateState}
            />
          );
        });
    }
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
        <div className="Programs">{programs}</div>
      </div>
    );
  }
}

export default Body;
