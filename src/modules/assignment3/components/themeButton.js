import React from "react";

export default function ThemeButton(props) {
  const { btnClass, btnText, btnColor, btnWidth } = props;
  return (
    <div className={`btnTheme`}>
      <button
        type={`button`}
        className={btnClass}
        style={{ backgroundColor: btnColor, width: btnWidth }}
      >
        {btnText}
      </button>
    </div>
  );
}
