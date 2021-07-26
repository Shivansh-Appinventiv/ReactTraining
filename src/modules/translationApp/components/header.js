import React from "react";
import Button from "./button";
import { useTranslation } from "react-i18next";

const languages = [
  { language: "English", shortHand: "en" },
  { language: "Hindi", shortHand: "hn" },
  { language: "Telugu", shortHand: "tg" },
];

export default function Header() {
  const { i18n } = useTranslation();
  const handleClick = (lang) => {
    i18n.changeLanguage(lang);
  };
  return (
    <div className={`outerContainer`}>
      <div className={`innerHeaderContainer`}>
        {languages.map((obj, index) => {
          return (
            <div key={index}>
              <Button onClick={() => handleClick(obj.shortHand)}>
                {obj.language}
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
