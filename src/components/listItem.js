import React, { Component } from "react";

class ListItem extends Component {
  render() {
    const { id, img, imgText, heading, headingText } = this.props.item;
    return (
      <div className={"listBox"}>
        <div className="listItem">
          <div className={`sideImage upImage`}>
            <img src={img} alt={imgText} />
          </div>
          <div className={"sideText"}>
            <div className={"sideTextHeading"}>
              {id}
              {") "}
              {heading}
            </div>
            <div className={"sideTextBody"}>{headingText}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default ListItem;
