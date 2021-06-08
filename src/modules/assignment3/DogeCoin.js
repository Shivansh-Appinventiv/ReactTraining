import React from "react";
import ThemeButton from "./components/themeButton";

export default function DogeCoin(props) {
  const {
    heading,
    subHeading,
    stepOne,
    stepTwo,
    stepThree,
    btnText,
    btnColor,
    borderRadius
  } = props.value;
  return (
    <div className={`buysellDogeContainer absolute`}>
      <div className={`buyHead`}>{heading}</div>
      <div className={`buySubHead`}>{subHeading}</div>
      <div className={`buyFlow`}>
        <div className={`verifyStep`}>
          <img src={stepOne.img1} alt={stepOne.alt1} />
          <div className={`imgHead`}>
            <div
              className={`number`}
              style={{ backgroundColor: btnColor, borderRadius: borderRadius }}
            >
              {stepOne.number}
            </div>
            <div className={`numberText`}>{stepOne.numberText}</div>
          </div>
          <div className={`stepDes`}>{stepOne.stepDes}</div>
        </div>
        <div className={`buyStep`}>
          <img src={stepTwo.img1} alt={stepTwo.alt1} />
          <img src={stepTwo.img2} alt={stepTwo.alt2} />
          <div className={`imgHead`}>
            <div
              className={`number`}
              style={{ backgroundColor: btnColor, borderRadius: borderRadius }}
            >
              {stepTwo.number}
            </div>
            <div className={`numberText`}>{stepTwo.numberText}</div>
          </div>
          <div className={`stepDes`}>{stepTwo.stepDes}</div>
        </div>
        <div className={`receiveStep`}>
          <div className={`timerImg`}>
            <img src={stepThree.img1} alt={stepThree.alt1} />
            <div className={`timerText`} style={{color: btnColor}}>
              <div className={`timerTime`}>{stepThree.timerTime}</div>
              <div className={`minTag`}>
                <div className={`minText`}>{stepThree.minText}</div>
                <img src={stepThree.img2} alt={stepThree.alt2} />
              </div>
            </div>
          </div>
          <div className={`imgHead`}>
            <div
              className={`number`}
              style={{ backgroundColor: btnColor, borderRadius: borderRadius }}
            >
              {stepThree.number}
            </div>
            <div className={`numberText`}>{stepThree.numberText}</div>
          </div>
          <div className={`stepDes`}>{stepThree.stepDes}</div>
        </div>
      </div>
      <ThemeButton btnClass={"xcoinLargeBtn"} btnText={btnText} btnColor={btnColor}/>
    </div>
  );
}
