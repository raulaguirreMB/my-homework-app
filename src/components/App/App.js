import React, { Component } from "react";
import axios from "axios";
import MenuBar from "../MenuBar/MenuBar";
import Header from "../Header/Header";
import Body from "../Body/Body";

class App extends Component {
  constructor() {
    super();

    this.state = {
      dataForProgramHeader: [],
      dataForProgramBody: [],
      showMore: false
    };
  }

  componentDidMount() {
    axios
      .get("https://api.myjson.com/bins/5bdb3")
      .then(res => {
        this.setState({ dataForProgramHeader: res.data });
      })
      .catch(error => {
        console.log("Error fetching parsed data for Header", error);
      });
    axios
      .get("https://api.myjson.com/bins/47axv")
      .then(res => {
        this.setState({ dataForProgramBody: res.data });
      })
      .catch(error => {
        console.log("Error fetching parsed data for Body", error);
      });
  }

  HandleUpdateState = newState => {
    this.setState({ ...this.state, ...newState });
  };

  componentWillUnmount() {
    console.log("Component dismounted");
  }

  render() {
    const { dataForProgramHeader, dataForProgramBody } = this.state;
    return (
      <div className="App">
        <Header />
        <MenuBar />
        <Body
          dataForProgramHeader={dataForProgramHeader}
          dataForProgramBody={dataForProgramBody}
          showMore={this.state.showMore}
          HandleUpdateState={this.HandleUpdateState}
        />
      </div>
    );
  }
}

export default App;
