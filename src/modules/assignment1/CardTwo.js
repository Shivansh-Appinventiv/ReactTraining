import React from "react";
import CustomCard from "./CustomCard";

const value = {
  headerLeftText: "Lite",
  headerRightSpan: "Free",
  headerRightSmall: "with restriction",
  itemHead: "Plan includes:",
  listItem: [
    "Manage conversations directly from your website.",
    "Bot without the AI service.",
    "Achieved chat for 30 days.",
    "Free, for always",
  ],
  textColor: "black",
  themeColor: "#f2f5fc",
  underlineColor: "#4f47b7",
  btnTextColor: "white",
  smallColor: "grey",
};

class CardTwo extends React.Component {
  render() {
    return (
      <div className={"cardTwoContainer"}>
        <div className={"cardTwoTitle"}>
          {"Start now "}
          <br />
          {"your "}
          <strong>{"free plan."}</strong>
        </div>
        <CustomCard value={value} />
      </div>
    );
  }
}

export default CardTwo;
