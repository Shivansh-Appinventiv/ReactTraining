import React from "react";
import Home from "./modules/home";
import Assignment from "./modules/assignment1";
import Assignment2 from "./modules/assignment2";

class App extends React.Component {
  render() {
    return (
      <div>
        <Home />
        <Assignment/>
        <Assignment2/>
      </div>
    );
  }
}

export default App;
