import React, { Component } from "react";
import axios from "axios";
import MenuBar from "../MenuBar/MenuBar";
import Header from "../Header/Header";
import Body from "../Body/Body";

class App extends Component {
  constructor() {
    super();

    this.state = {
      data: {}
    };
  }

  componentDidMount() {
    axios
      .get("https://api.myjson.com/bins/5bdb3")
      .then(res => {
        this.setState({ data: res.data });
      })
      .catch(error => {
        console.log("Error fetching parsed data", error);
      });
  }

  componentWillUnmount() {
    console.log("Component dismounted");
  }

  render() {
    const data = this.state.data;
    return (
      <div className="App">
        <Header />
        <MenuBar />
        <Body data={data} />
      </div>
    );
  }
}

export default App;
