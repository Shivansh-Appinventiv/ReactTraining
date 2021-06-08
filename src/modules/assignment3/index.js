import React from "react";
import "./index.css";
import Header from "./header";
import Banner from "./banner";
import PayCards from "./payCards";
import DogeCoin from "./DogeCoin";
import DogeCoinQuestion from "./dogecoinQuestion";
import {
  tickBlue,
  tickGreen,
  downArrowBlue,
  upArrowGreen,
  timerBlue,
  timerGreen,
  walletBlue,
  walletGreen,
  lightningBlue,
  lightningGreen,
  bitcoin,
} from "./Images";
import AboutDogecoin from "./AboutDogecoin";
import SpendDogeCoin from "./SpendDogeCoin";
import Footer from "./Footer";

let buyData = {
  heading: `How to Buy Dogecoin`,
  subHeading: `Only 3 simple steps`,
  stepOne: {
    number: 1,
    numberText: `Get verified quickly`,
    stepDes: `Just sign up, upload your verification documents and open your account.`,
    img1: tickBlue,
    alt1: `tickBlue`,
  },
  stepTwo: {
    number: 2,
    numberText: `Buy Dogecoin`,
    stepDes: `Select which coins you would like to buy and how much you want to purchase. `,
    img1: downArrowBlue,
    alt1: `downArrowBlue`,
    img2: walletBlue,
    alt2: `walletBlue`,
  },
  stepThree: {
    number: 3,
    numberText: `Receive coins`,
    stepDes: `We will send your coins to your wallet within 15 minutes of payment approval.`,
    img1: timerBlue,
    alt1: `timerBlue`,
    img2: lightningBlue,
    alt2: `lightningBlue`,
    minText: `MIN`,
    timerTime: "15",
  },
  btnText: `BUY DOGECOIN`,
  borderRadius: `50%`,
  btnColor: `#009cde`,
};

let sellData = {
  heading: `How to Sell Dogecoin`,
  subHeading: `Only 3 simple steps`,
  stepOne: {
    number: 1,
    numberText: `Get verified quickly`,
    stepDes: `Just sign up, upload your verification documents and open your account.`,
    img1: tickGreen,
    alt1: `tickGreen`,
  },
  stepTwo: {
    number: 2,
    numberText: `Sell Dogecoin`,
    stepDes: `Select Dogecoin under the “sell” tab and decide how much you want to sell`,
    img1: upArrowGreen,
    alt1: `downArrowGreen`,
    img2: walletGreen,
    alt2: `walletGreen`,
  },
  stepThree: {
    number: 3,
    numberText: `Receive cash`,
    stepDes: `We will send your coins to your wallet within 15 minutes of payment approval.`,
    img1: timerGreen,
    alt1: `timerGreen`,
    img2: lightningGreen,
    alt2: `lightningGreen`,
    minText: `MIN`,
    timerTime: "15",
  },
  btnText: `SELL DOGECOIN`,
  borderRadius: `10px`,
  btnColor: `#86c306`,
};

export default function Assignment3() {
  return (
    <div className={"xcoinContainer"}>
      <div className={`gradientSame`}>
        <Header />
        <Banner />
      </div>
      <PayCards />
      <div className={`buysellDogeCoin`}>
        <div className={`wrapperVerticalArea relative buysellHeight`}>
          <DogeCoin value={buyData} />
          <div className={`bitcoin absolute`}>
            <img src={bitcoin} alt={`bitCoinImage`} />
          </div>
          <DogeCoin value={sellData} />
        </div>
      </div>
      <DogeCoinQuestion />
      <AboutDogecoin/>
      <SpendDogeCoin/>
      <Footer/>
    </div>
  );
}
