import React from "react";
import { mobilePerson, lockImage, msgImage } from "./Images";
export default function DogeCoinQuestion() {
  return (
    <div className={`questionContainer`}>
      <img src={mobilePerson} alt={`mobilePerson`} className={`mobilePerson`} />
      <div className={`questionDes`}>
        <div
          className={`questionHead`}
        >{`Why Buy & Sell Dogecoin with Xcoins?`}</div>
        <div className={`questionBody directionVertical`}>
          <div className={`questionPoints directionVertical`}>
            <div className={`pointTitle  directionaHorizontal`}>
              <img src={lockImage} alt={`lock`} />
              <div className={`pointTitleText`}>{`Encryption technology`}</div>
            </div>
            <div className={`pointContent`}>
              {`Xcoins reputation for speed and security will keep you coming back. World-class encryption technology keeps your data secure and your transactions safe. `}
            </div>
          </div>
          <div className={`questionPoints directionVertical`}>
            <div className={`pointTitle directionHorizontal`}>
              <img src={msgImage} alt={`message`} />
              <div className={`pointTitleText`}>{`Customer care`}</div>
            </div>
            <div className={`pointContent`}>
              {`If you have any questions about Dogecoin or how to buy & sell it, you can contact our 24/7 customer support team.`}
            </div>
          </div>
        </div>
        <div className={`questionFoot directionHorizontal`}>
          <div
            className={`questionfootText`}
          >{`Buy & sell Dogecoin today`}</div>
          <button type={`button`} className={`questionfootBtn`}>
            {`Sign Up`}
          </button>
        </div>
      </div>
    </div>
  );
}
