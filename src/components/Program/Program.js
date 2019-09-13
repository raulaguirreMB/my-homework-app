import React from "react";
import "./Program.css";

const Program = props => {
  const { data } = props;
  let name = "";
  if (data != null) {
    name = data.Name;
  }

  return (
    <div className="program-container">
      <div className="program-header">
        <div className="program-header-textAndBtn">
          <div>
            <div className="title">{name}</div>
            <div className="imgLabel">Sales By Month</div>
          </div>
          <button>
            <img
              className="editBtn"
              alt="pencil"
              src="./assets/pencil_icons.png"
            />
          </button>
        </div>

        <img alt="graph" src="./assets/graph.png"></img>
      </div>

      <div className="program-body">
        <div className="Total-Monthly-text">
          Total Monthly<div className="sales-text">Sales</div>
        </div>
        <div className="current-text">
          Current
          <div>
            <b>$23,458</b>
          </div>
        </div>
        <div>
          <div className="year-text">1- Year</div>
          <img alt="spark line" src="./assets/spark_line.png"></img>
        </div>
      </div>
      <div onClick={() => console.log("hello")} className="showMore">
        <div className="program-expanded">more</div>
      </div>
    </div>
  );
};

export default Program;
