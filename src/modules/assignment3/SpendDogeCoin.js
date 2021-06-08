import React from "react";
import {spendImage1, domainHosting,onlineCasinos1x } from "./Images";
export default function SpendDogeCoin() {
  return (
    <div className={`spendDogecoinContainer`}>
      <div className={`wrapperVerticalArea`}>
        <div className={`spendDogecoinHeader`}>
          {"Where Can I Spend my Dogecoin?"}
        </div>
        <div className={`spendDogecoinText`}>
          {
            "There are a variety of fashion and clothing shops online accepting Doge as payment. You can also use your Doge to pay for domains and hosting, or online casinos."
          }
        </div>
        <div className={`spendDogecoinImages`}>
          <div className={`frameImage relative`}>
            <img src={spendImage1} alt={`spendImage1`} />
            <div className={`clothingStore absolute`}>{"CLOTHING STORES"}</div>
            <div className={`frameBorder absolute`}></div>
          </div>
          <img
            src={domainHosting.domainHosting1x}
            alt={`domainHosting`}
            className={`domainHosting`}
          />
          <img src={onlineCasinos1x} alt={`onlineCasinosImage`}/>
        </div>
      </div>
    </div>
  );
}
