import React from "react";

export default class ResusableBox extends React.Component {
  render() {
    const { heading, btnText } = this.props;
    return (
      <div className={"itemContainer"}>
        <h3>{heading}</h3>
        <button>{btnText}</button>
      </div>
    );
  }
}
