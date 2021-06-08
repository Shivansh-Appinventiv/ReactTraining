import React, { useState } from "react";
import {logo } from "./Images";
import { languageSelector } from "./languageList";
import HeaderButton from "./components/HeaderButton";

export default function Header() {
  const [selectState, setSelectState] = useState(2);
  const [isOpen, setIsOpen] = useState(false);
  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value) => {
    setSelectState(value);
    setIsOpen(false);
    //console.log(selectState);
  };

  //console.log(isOpen);

  return (
    <div className={`headerArea`}>
      <div className={`wrapperHorizontalArea`}>
        <div className={`logoTextContainer`}>
          <img src={logo} alt={`logoImage`} />
        </div>
        <div className={`linkContainer`}>
          <ul>
            <li className={`activeLink`}>{`BUY BITCOIN`}</li>
            <li>{`SELL BITCOIN`}</li>
            <li>{`BLOG`}</li>
            <li>{`ABOUT US`}</li>
          </ul>
        </div>
        <div className={`accountContainer`}>
          <div className={`selectLanguage`}>
            <div className={`selectBox`}>
              <div className={`selectedOption`} onClick={toggling}>
                <img
                  src={
                    languageSelector.data[selectState].flag_image_name ||
                    "https://xcoins-preprod-bucket.s3.eu-west-1.amazonaws.com/flags/usa.svg"
                  }
                  alt={languageSelector.data[selectState].alpha3 || "ENG"}
                  height={`20px`}
                  width={`20px`}
                />
                <span className={`language`}>
                  {languageSelector.data[selectState].alpha3 || "ENG"}
                </span>
                <div className={`dropSymbol`}></div>
              </div>
              {isOpen && (
                <div className={`listBox`}>
                  <ul>
                    {languageSelector.data.map((value) => {
                      return (
                        <li
                          key={value.id}
                          onClick={() => onOptionClicked(value.id)}
                        >
                          <img
                            src={value.flag_image_name}
                            alt={value.alpha3}
                            height={`20px`}
                            width={`20px`}
                          />
                          <span>{value.alpha3}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </div>
          </div>
          <HeaderButton buttonClass={`loginBtn`} buttonText={`LOGIN`} />
          <HeaderButton buttonClass={`signupBtn`} buttonText={`SIGN UP`} />
        </div>
      </div>
    </div>
  );
}
