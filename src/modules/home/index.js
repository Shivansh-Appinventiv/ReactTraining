import React, { Component } from "react";
import "./index.css";
import ReusableBox from "../../components/reusableBox";

class Home extends Component {
  renderBox(heading, btnText, headClass = "", btnColor = "") {
    return (
      <div className={"itemContainer"}>
        <h3 className={headClass}>{heading}</h3>
        <button style={{ background: btnColor }}>{btnText}</button>
      </div>
    );
  }

  render() {
    return (
      <div className={"homeContainer"}>
        <h1>{"Home Page"}</h1>
        {this.renderBox("First Container", "Click Me First", "headTextColor")}
        {this.renderBox("Second Container", "Click Me Second", "", "blue")}
        {this.renderBox("Third Container", "Click Me Third")}
        <ReusableBox heading={"Fourth Container"} btnText={"Click Me Fourth"} />
      </div>
    );
  }
}

export default Home;
