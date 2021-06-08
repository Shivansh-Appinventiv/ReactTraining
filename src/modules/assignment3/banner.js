import React from "react";
import dropdown from "./assets/images/dropdown.png";
import ThemeButton from "./components/themeButton";
import { bitcoinIcon } from "./Images";

function currencyBox(id,img, imgText, imgAlt, country) {
  return (
    <div className={`currencyBox`}>
      <img src={img} alt={imgAlt} height={`28px`} width={`28px`} />
      <div id={id} className={`amountDiv`}>{imgText}</div>
      <div className={`currencyCountry`}>
        {country}
        <span>
          <img
            src={dropdown}
            alt={`dropdownImage`}
            height={`15px`}
            width={`20px`}
          />
        </span>
      </div>
    </div>
  );
}

export default function Banner() {
  return (
    <div className={`bannerContainer`}>
      <div className={`wrapperHorizontalArea`}>
        <div className={`cryptoText`}>
          <div className={`headLeft`}>{"Buy & Sell Dogecoin Online"}</div>
          <div className={`bodyLeft`}>{"Add Doge to your crypto wallet"}</div>
          <div className={`footLeft`}>
            {"Instant, fun, and free from the traditional banking system."}
            {"Buy Dogecoin with your debit or credit card today."}
          </div>
        </div>
        <div className={`cryptoCard`}>
          <div className={`headRight`}>{"Get your crypto now!"}</div>
          <div className={`bodyRight`}>
            <button type={`button`} className={`buysellBtn`}>
              {"BUY"}
            </button>
            <button type={`button`} className={``}>
              {"SELL"}
            </button>
          </div>
          <div className={`footRight`}>
            {currencyBox(
              "amountdiv1",
              "https://xcoins-preprod-bucket.s3.eu-west-1.amazonaws.com/flags/usa.svg",
              "100",
              "countryCurrency",
              "USD"
            )}
            {currencyBox(
              "amountdiv2",
              bitcoinIcon,
              "0.10546074",
              "bitCoinIcon",
              "BTC"
            )}
          </div>
          <div className={`bannerButtonBox`}>
            <ThemeButton
              btnClass={"xcoinLargeBtn"}
              btnText={"BUY DOGE"}
              btnColor={"#86c306"}
              btnWidth={"384px"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
