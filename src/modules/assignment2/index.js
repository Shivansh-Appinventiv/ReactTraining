import React from "react";
import "./index.css";
import headerImage from "./assets/images/headerImage.jpeg";
import developerIcon from "./assets/images/developerIcon.png";
import appIcon from "./assets/images/appIcon.svg";
import storybookIcon from "./assets/images/storybookIcon.png";
import guidistIcon from "./assets/images/guidelistIcon.png";
import bitImage from "./assets/images/cliIcon.png";
import bootstrapIcon from "./assets/images/bootstrapIcon.png";
import skypeIcon from "./assets/images/skypeIcon.svg";
import emailIcon from "./assets/images/emailIcon.svg";

const listItems = [
  {
    id: 1,
    img: developerIcon,
    imgText: "developerIcon",
    heading: "React Developer Tools",
    headingText:
      "Official Chrome extension for React from Facebook that lets you examine the list of components and subcomponentson the webpage.",
  },
  {
    id: 2,
    img: appIcon,
    imgText: "appIcon",
    heading: "Create React App",
    headingText: "Tools used in the process of setting up a React IDE",
  },
  {
    id: 3,
    img: storybookIcon,
    imgText: "storybookIcon",
    heading: "Storybook",
    headingText: "Online app that lets you create UI components",
  },
  {
    id: 4,
    img: guidistIcon,
    imgText: "guidistIcon",
    heading: "React Styleguidist",
    headingText: "It offers an interactive way of creating and sharing UI",
  },
  {
    id: 5,
    img: bitImage,
    imgText: "bitImageIcon",
    heading: "Bit",
    headingText:
      "CLI tool and online platform that enables you to publish React components.",
  },
  {
    id: 6,
    img: bootstrapIcon,
    imgText: "bootstrapIcon",
    heading: "React Bootstrap",
    headingText:
      "Powerful toolkit that comprises HTML, CSS and Javascript tools to help you create webpages and applications ",
  },
  {
    id: 7,
    img: developerIcon,
    imgText: "reactsightIcon",
    heading: "React Sight",
    headingText:
      "Chrome extension for virtual illustration of all components of your app in a live tree structure",
  },
  {
    id: 8,
    img: developerIcon,
    imgText: "renderIcon",
    heading: "Why did you render",
    headingText:
      "It alerts you in the console when an avoidable renders occurs",
  },
  {
    id: 9,
    img: developerIcon,
    imgText: "reactproText",
    heading: "React Proto",
    headingText:
      "lets you drag and drop the components your way to create a UI instead of coding",
  },
];

export default class Assignment2 extends React.Component {
  render() {
    return (
      <div className={"wrapper"}>
        <div className={"innerWrapper"}>
          <div className={"headerContainer"}>
            <img src={headerImage} alt={"headerImg"} />
            <div className={"headerContainerText"}>
              {"9 React"}
              <br />
              {"Developer Tools"}
              <br />
              <span>
                {"to Create Better"}
                <br />
                {"Apps Faster"}
              </span>
            </div>
          </div>
          <div className={"bodyContainer"}>
            <ul>
              {listItems.map((value) => {
                if (value.id % 2) {
                  return (
                    <li key={value.id}>
                      <div className={`sideImage upImage`}>
                        <img src={value.img} alt={value.imgText} />
                      </div>
                      <div className={"sideText"}>
                        <div className={"sideTextHeading"}>
                          {value.id}
                          {") "}
                          {value.heading}
                        </div>
                        <div className={"sideTextBody"}>
                          {value.headingText}
                        </div>
                      </div>
                    </li>
                  );
                } else {
                  return (
                    <li key={value.id}>
                      <div className={"sideText"}>
                        <div className={"sideTextHeading"}>
                          {value.id}
                          {") "}
                          {value.heading}
                        </div>
                        <div className={"sideTextBody"}>
                          {value.headingText}
                        </div>
                      </div>
                      <div className={`sideImage downImage`}>
                        <img src={value.img} alt={value.imgText} />
                      </div>
                    </li>
                  );
                }
              })}
            </ul>
          </div>
          <div className={"footerContainer"}>
            <span>
              <img src={skypeIcon} alt={"skypeIcon"} />
              {"eluminius_bde10"}
            </span>
            <span className={"divider"}>{"|"}</span>
            <span>
              <img src={emailIcon} alt={"emailIcon"} />
              {"biz@eluminoustechnologies.com"}
            </span>
          </div>
        </div>
      </div>
    );
  }
}
