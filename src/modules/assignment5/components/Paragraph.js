import React from "react";
import {
  Button,
  makeStyles,
  Link,
  Divider,
  Typography,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import VpnLockIcon from "@material-ui/icons/VpnLock";

const useStyles = makeStyles({
  postAd: {
    display: "flex",
    alignItems: "center",
    color: "#424242",
    marginLeft: "207px",
  },
  postAdBtn: {
    color: "#388538",
    borderColor: "#388538",
  },
  moneroCash: {
    display: "flex",
    alignItems: "center",
    color: "#388538",
    marginTop: "8px",
    marginLeft: "224px",
    fontSize: "20px",
  },
  moneroText: {
    fontSize: "18px",
  },
  vpn: {
    display: "flex",
    justifyContent: "center",
    color: "#424242",
    alignItems: "center",
    marginTop: "27px",
  },
  vpnText: {
    fontSize: "19px",
  },
  india: {
    fontWeight: "bold",
  },
  horizontalRule: {
    marginTop: "20px",
  },

  paraHead1: {
    fontSize: "19px",
    width: "374px",
    color: "#424242",
    margin: "10px 0 10px 440px",
  },

  para1: {
    fontSize: "17px",
    width: "853px",
    color: "#424242",
    marginLeft: "440px",
    fontWeight: "399",
  },

  para2: {
    fontSize: "17px",
    width: "907px",
    color: "#424242",
    marginLeft: "440px",
    fontWeight: "399",
  },
  paraHead3: {
    fontSize: "19px",
    width: "785px",
    lineHeight: "1.2",
    color: "#424242",
    margin: "10px 0 10px 440px",
  },

  para3: {
    fontSize: "17px",
    width: "887px",
    color: "#424242",
    marginLeft: "440px",
    fontWeight: "399",
  },
});

const Paragraph = () => {
  const classes = useStyles();

  return (
    <div className={"paragraphSection"}>
      <div className={classes.postAd}>
        <Typography variant={"h6"}>{"You can be the first one to"}</Typography>
        &nbsp;&nbsp;
        <Button
          className={classes.postAdBtn}
          variant="outlined"
          startIcon={<AddIcon />}
        >
          {"POST AN AD"}
        </Button>
        &nbsp;&nbsp;
        <Typography variant="h6">{"in the following categories:"}</Typography>
      </div>
      <div className={classes.moneroCash}>
        <AddIcon fontSize={"large"} />
        <Link underline={"always"} color={"inherit"} href={"#"}>
          <Typography className={classes.moneroText} variant={"subtitle1"}>
            {"Buy Monero with cash in India"}
          </Typography>
        </Link>
      </div>
      <div className={`${classes.vpn} ${classes.vpnText}`}>
        <VpnLockIcon color={"inherit"} />
        &nbsp;&nbsp;
        <Typography className={classes.vpnText} variant={"subtitle1"}>
          {"Showing advertisements in"}
        </Typography>
        &nbsp;&nbsp;
        <Typography
          className={`${classes.india} ${classes.vpnText}`}
          variant={"subtitle1"}
        >
          {"India"}
        </Typography>
        &nbsp;&nbsp;&nbsp;
        <Button
          className={classes.vpnText}
          fontSize={"large"}
          color={"primary"}
        >
          {"CHANGE"}
        </Button>
      </div>
      <Divider className={classes.horizontalRule} variant={"fullWidth"} />
      <Typography className={classes.paraHead1} variant={"h6"}>
        {"Protect your right to privacy - buy Monero."}
      </Typography>
      <Typography className={classes.para1} variant={"body2"}>
        {
          "If you are concerned about the invasion of privacy - the best cryptocurrency to invest in is XMR. Monero is an untraceable coin developed with privacy by design in mind."
        }
      </Typography>
      <Typography className={classes.para2} variant={"body2"}>
        {" "}
        {
          "Where to buy Monero? LocalMonero is the biggest, most trusted and well-established P2P Monero exchange in the XMR community. We have no KYC checks - you can simply buy Monero anonymously without ID verification with PayPal, credit card, gift card, cash by mail or convert bitcoin to Monero - our platform supports any payment method."
        }
      </Typography>
      <Typography className={classes.paraHead3} variant={"h6"}>
        {
          "Sell Monero to people worldwide or locally - support the community and make money with cryptocurrency."
        }
      </Typography>
      <Typography className={classes.para3} variant={"body2"}>
        {
          "LocalMonero is the best place to sell XMR - whether it's your mining rewards, Monero price arbitrage, or you simply see the value in servicing the community. The escrow system and our secure Monero wallet provide you with a robust XMR trading experience - so you can convert XMR to USD, EUR, AUD, GBP or any other local currency with peace of mind."
        }
      </Typography>
      <Divider className={classes.horizontalRule} variant={"fullWidth"} />
    </div>
  );
};

export default Paragraph;
