import React from "react";

export default function HeaderButton(props) {
  return (
    <div className={`btnContainer`}>
      <button type={`button`} className={props.buttonClass}>
        {props.buttonText}
      </button>
    </div>
  );
}
