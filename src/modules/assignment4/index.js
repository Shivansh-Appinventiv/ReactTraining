import React, { useState } from "react";
import "./index.css";
import Header from "./Header";
import NavigationPanel from "./NavigationPanel";
import ContentFlex from "./ContentFlex";
// import ContentGrid from "./ContentGrid";

export default function Assignment4() {
  const [navClass, setNavClass] = useState("navWrapper hide");

  const handleNav = (value) => {
    console.log(value);
    setNavClass(value ? "navWrapper hide" : "navWrapper");
  };

  return (
    <div className={`supportSection`}>
      <Header handleNav={(value) => handleNav(value)} />
      <div className={`navAndContent`}>
        <NavigationPanel
          navClass={navClass}
          handleNav={(value) => handleNav(value)}
        />
        {/* <ContentGrid /> */}
        <ContentFlex />
      </div>
    </div>
  );
}
