import React from "react";
import "./Header.css";

class Header extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div className={"Header-Container"}>
        <img src="./assets/logo.png" alt="Urban Yoga Company Icon"></img>
        <div className={"Taps-Container"}></div>
      </div>
    );
  }
}

export default Header;
