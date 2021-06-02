import React from "react";
import CustomCard from "./CustomCard";

const value = {
  headerLeftText: "Pro",
  headerRightSpan: "29$",
  headerRightSmall: "monthly",
  itemHead: "All of Lite plus:",
  listItem: [
    "Bot with AI that can recognize the user's behaviour and can automatize the sentences. ",
    "Unlimited conversational flows.",
    "Facebookm, Twitterm, Instagram, and Linkedin integration. ",
    "Achieved chat without limits.",
  ],
  textColor: "white",
  themeColor: "#4f47b7",
  underlineColor: "white",
  btnTextColor: "black",
  smallColor: "#bfbef2",
};

class CardThree extends React.Component {
  render() {
    return (
      <div className={"cardThreeContainer"}>
        <div className={"cardThreeTitle"}>
          <span>{"Are you a corporate?"}</span>
          <span style={{ color: value.themeColor }}>{"Contact us"}</span>
        </div>
        <CustomCard value={value} />
      </div>
    );
  }
}

export default CardThree;
