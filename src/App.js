import React from "react";
import Home from "./modules/home";
import Assignment from "./modules/assignment1";

class App extends React.Component {
  render() {
    return (
      <div>
        {<Home />}
        <Assignment/>
      </div>
    );
  }
}

export default App;
