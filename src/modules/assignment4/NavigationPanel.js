import { logoImage } from "./Images";

const NavigationPanel = (props) => {
  console.log(props);
  const changeClass = () => {
    console.log("inside Nav");
    props.handleNav("hide");
  };
  return (
    <div className={props.navClass}>
      <div className={`navHeader`}>
        <img src={logoImage} alt={`logoImage`} />
        <div className={`closeIcon`} onClick={() => changeClass()}>
          &#10005;
        </div>
      </div>
      <div className={`navlinks`}>
        <div className={`navlinkTitle`}>{`Topics`}</div>
        <ul>
          <li>{`Affiliate Program`}</li>
          <li>{`Buy & Sell Cryptocurrencies `}</li>
          <li>{`Contact Us`}</li>
          <li>{`My Xcoins Account`}</li>
          <li>{`Orders`}</li>
          <li>{`Payement Methods`}</li>
          <li>{`Security`}</li>
          <li>{`Verification`}</li>
          <li>{`Wallet`}</li>
          <div className={`navSelect`}></div>
        </ul>
      </div>
    </div>
  );
};

export default NavigationPanel;
