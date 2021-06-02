import React from "react";
import "./index.css";
import CardOne from "./CardOne";
import CardTwo from "./CardTwo";
import CardThree from "./CardThree";

class Assignment1 extends React.Component {
  render() {
    return (
      <div className={"assignContainer"}>
        <div className={"assignWrapper"}>
          <CardOne />
          <CardTwo />
          <CardThree />
        </div>
      </div>
    );
  }
}

export default Assignment1;
