import React from "react";
import { tickBlack, decentralized, peerTopeer } from "./Images";

function SideCard(props) {
  const { mainImg, mainAlt, checkMarkText, imageClass, outerClass } =
    props.item;
  return (
    <div className={`sideCard ${outerClass}`}>
      <img src={mainImg} alt={mainAlt} className={imageClass} />
      <div className={`checkMark`}>
        <img src={tickBlack} alt={`tickBlackImage`} />
        <div className={`checkMarkText`}>{checkMarkText}</div>
      </div>
    </div>
  );
}

export default function AboutDogecoin() {
  const sidecardInfoOne = {
    mainImg: decentralized,
    mainAlt: `decentralizedImage`,
    checkMarkText: `Decentralized`,
    imageClass: `decentralizedImage`,
    outerClass: `paddingSideCardOne`,
  };

  const sidecardInfoTwo = {
    mainImg: peerTopeer,
    mainAlt: `peerTopeerImage`,
    checkMarkText: `Peer-to-peer`,
    imageClass: `peerTopeerImage`,
    outerClass: `paddingSideCardTwo`,
  };

  return (
    <div className={`aboutDogecoinContainer`}>
      <div className={`wrapperHorizontalArea`}>
        <SideCard item={sidecardInfoOne} />
        <div className={`dogecoinDescription`}>
          <div className={`dogecoinDesHead`}>{`What is Dogecoin?`}</div>
          <div
            className={`dogecoinDesText`}
          >{`Dogecoin (Doge) is a cryptocurrency created by software engineers in 2013. It’s been stated that it was created jokingly as a homage to Bitcoin, but with recent price surges, it’s becoming a much more serious investment for crypto-enthusiasts. `}</div>
        </div>
        <SideCard item={sidecardInfoTwo} />
      </div>
    </div>
  );
}
