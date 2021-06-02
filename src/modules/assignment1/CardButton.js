import React from "react";

export default class CardButton extends React.Component {
  render() {
    const btn = this.props.value;
    return (
      <div>
        <button
          type={"button"}
          className={"cardButton"}
          style={{
            background: btn.underlineColor,
            color: btn.btnTextColor,
          }}
        >
          {btn.btnText}
        </button>
      </div>
    );
  }
}
