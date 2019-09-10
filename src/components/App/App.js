import React from "react";
import MenuBar from "../MenuBar/MenuBar";
import Header from "../Header/Header";
import Body from "../Body/Body";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  componentDidMount(){
    
  }

  render() {
    return (
      <div className="App">
        <Header />
        <MenuBar />
        <Body />
      </div>
    );
  }
}

export default App;
