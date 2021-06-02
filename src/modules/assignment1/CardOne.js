import React from "react";
import coinContainer from "./assets/images/coinContainer.png";

class CardOne extends React.Component {
  render() {
    return (
      <div className={"cardOneContainer"}>
        <div className={"cardOneWrapper"}>
          <div className={"cardTitleOne"}>
            {"Save your "}
            <strong>{"money now."}</strong>
          </div>
          <div className={"cardBodyOne"}>
            <p>
              {
                "Manage your company Bot in few easy steps, join our Pro plan to try a 360"
              }
              &deg;{" experience of our service."}
            </p>
            <p>
              {
                "Start your 14 days of free Pro plan, you can always upgrade it or stay with the Lite version for it."
              }
            </p>
          </div>
          <div className={"cardFooterOne"}>
            <img src={coinContainer} alt={"coin-container"} />
          </div>
        </div>
      </div>
    );
  }
}

export default CardOne;
