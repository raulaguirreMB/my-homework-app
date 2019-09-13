import React from "react";
import "./Program.css";

const Program = props => {
  const { Name, TotalMonthlySales } = props.dataForProgramHeader;

  const { showMore, HandleUpdateState } = props;

  const bodyData = props.dataForProgramBody;

  return (
    <div className="program-container">
      <div className="program-header">
        <div className="program-header-textAndBtn">
          <div>
            <div className="title">{Name}</div>
            <div className="imgLabel">Sales By Month</div>
          </div>
          <button className="editBtn">
            <img
              alt="pencil"
              src="./assets/pencil_icons.png"
              className="pencilIcon"
            />
          </button>
        </div>

        <img alt="bar statics graph" src="./assets/graph.png"></img>
      </div>

      <div className="program-body">
        <div className="Total-Monthly-text">
          Total Monthly<div className="sales-text">Sales</div>
        </div>
        <div className="current-text">
          Current
          <div>
            <b>{TotalMonthlySales}</b>
          </div>
        </div>
        <div>
          <div className="year-text">1- Year</div>
          <img alt="spark line graph" src="./assets/spark_line.png"></img>
        </div>
      </div>
      {showMore ? (
        <div className="program-expanded">
          <div className="bodyDataNames">
            <div>Price Names</div>
            {bodyData.map((data, index) => {
              return <li key={index}>{data.Name}</li>;
            })}
          </div>
          <div className="bodyDataSales">
            Current
            {bodyData.map((data, index) => {
              return <li key={index}>{data.Sales}</li>;
            })}
          </div>
          <div className="bodyDataGraph">
            <img alt="sparks line graph" src={"./assets/spark_lines.png"}></img>
          </div>
        </div>
      ) : (
        ""
      )}

      <div
        onClick={() => HandleUpdateState({ showMore: !showMore })}
        className="showMore"
      >
        more
      </div>
    </div>
  );
};

export default Program;
