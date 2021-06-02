import React from "react";
import CardButton from "./CardButton";
import Listing from "./Listing";

class CustomCard extends React.Component {
  render() {
    const card = this.props.value;
    return (
      <div
        className={"cardContainer"}
        style={{
          color: card.textColor,
          background: card.themeColor,
        }}
      >
        <div className={"cardHeader"}>
          <div className={"headerLeft"}>
            <div>{card.headerLeftText}</div>
            <div
              className={"underline"}
              style={{ borderColor: card.underlineColor }}
            ></div>
          </div>
          <div className={"headerRight"}>
            <span>{card.headerRightSpan}</span>
            <small style={{ color: card.smallColor }}>
              {card.headerRightSmall}
            </small>
          </div>
        </div>
        <div className={"itemHead"}>{card.itemHead}</div>
        <Listing
          value={{
            listItem: card.listItem,
            underlineColor: card.underlineColor,
          }}
        />
        <div className={"cardFootDes"}>{"View all the features"}</div>
        <CardButton
          value={{
            underlineColor: card.underlineColor,
            btnTextColor: card.btnTextColor,
            btnText: "Start 14 days of free Pro plan",
          }}
        />
      </div>
    );
  }
}

export default CustomCard;
