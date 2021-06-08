import React from "react";
import { logoImage, settings, bell, avatar } from "./Images";

export default function Header(props) {
  console.log(props);
  const changeClass = () => {
    console.log("inside header");
    props.handleNav("");
  };
  return (
    <div className={`supportHeader`}>
      <div className={`supportHeaderLeft`}>
        <div className={`collapseIcon`} onClick={changeClass}>
          <div className={`lines`}></div>
          <div className={`lines`}></div>
          <div className={`lines`}></div>
        </div>
        <div className={`logoWrapper`}>
          <img src={logoImage} alt={`LogoImage`} />
        </div>
      </div>
      <div className={`supportHeaderRight`}>
        <div className={`settingsWrapper`}>
          <img src={settings} alt={`settingsIcon`} />
        </div>
        <div className={`notificationWrapper`}>
          <img src={bell} alt={`notificationIcon`} />
        </div>
        <div className={`avatarWrapper`}>
          <img src={avatar} alt={`avatarIcon`} />
        </div>
      </div>
    </div>
  );
}
