import React from "react";
import { masterCardLogo, visaCardLogo } from "./Images";

let obj = [];

function printDots() {
  for (let i = 1; i <= 6; i++) {
    obj.push(i);
  }
  console.log(obj);
  return;
}

export default function PayCards() {
  printDots();
  return (
    <div className={`payCardsContainer`}>
      <div className={`wrapperHorizontalArea`}>
        <div className={`payCardWrapper relative`}>
          <div className={`masterCard absolute`}>
            <img src={masterCardLogo} alt={`masterCardLogo`} />
            <div className={`dotContainer`}>
              {obj.map((element, index) => {
                return <div key={index} className={`dots`}></div>;
              })}
              <div className={`last4digit`}>{`4212`}</div>
            </div>
            <div className={`cardInfo`}>
              <div className={`cardHolder`}>
                <div>{`Card Holder`}</div>
                <div className={`holderName`}>{`George Dux`}</div>
              </div>
              <div className={`cardDetails`}>
                <div>{`Expires`}</div>
                <div className={`expireDate`}>{`09/15/2022`}</div>
              </div>
            </div>
          </div>
          <div className={`visaCard absolute`}>
            <img src={visaCardLogo} alt={`visaCardLogo`} />
            <div className={`dotContainer`}>
              {obj.map((element, index) => {
                return <div key={index} className={`dots`}></div>;
              })}
              <div className={`last4digit`}>{`8246`}</div>
            </div>
            <div className={`cardInfo`}>
              <div className={`cardHolder`}>
                <div>{`Card Holder`}</div>
                <div className={`holderName`}>{`John Connor`}</div>
              </div>
              <div className={`cardDetails`}>
                <div>{`Expires`}</div>
                <div className={`expireDate`}>{`09/15/2022`}</div>
              </div>
            </div>
          </div>
          <div className={`exchangeCard absolute`}>
            <div
              className={`exchangeTitle`}
            >{`Exchange your Dogecoin Instantly!`}</div>
            <div
              className={`exchangeDes`}
            >{`Buy & Sell your Doge using your Visa or Mastercard debit or credit card.`}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
