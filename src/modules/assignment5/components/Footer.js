import { makeStyles, Link, Typography, Button } from "@material-ui/core";
import LanguageIcon from "@material-ui/icons/Language";
import TwitterIcon from "@material-ui/icons/Twitter";
import RedditIcon from "@material-ui/icons/Reddit";
import FacebookIcon from "@material-ui/icons/Facebook";
import TelegramIcon from "@material-ui/icons/Telegram";
import GitHubIcon from "@material-ui/icons/GitHub";

const useStyle = makeStyles({
  innerContainerLink: {
    // border: "1px solid black",
    margin: "0 auto",
    width: "70%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  linksRow: {
    display: "flex",
    flexDirection: "column",
  },
  linkSection: {
    display: "flex",
    justifyContent: "space-between",
    width: "80%",
  },
  languageBtn: {
    margin: "10px 0 10px 0",
    color: "#1565c0",
    fontWeight: "bold",
    fontSize: "16px",
    height: "50px",
  },
  languageIcon: {
    margin: "0 10px 0 0",
  },
  copyRight: {
    margin: "0px 0 30px 0",
  },
  socialIcons: {
    width: "70px",
    height: "38px",
    padding: "0 12px 12px 12px",
  },
  socialLinks:{
    margin: "0 auto",
    width: "430px"
  }
});

const Footer = () => {
  const classes = useStyle();
  return (
    <div>
      <div className={classes.innerContainerLink}>
        <Typography className={classes.copyRight} vairent="p">
          &copy; 2021 Blue Sunday Limited
        </Typography>
        <div className={classes.linkSection}>
          <Typography className={classes.linksRow}>
            <Link href="#" underline={"always"}>
              About
            </Link>
            <Link href="#" underline={"always"}>
              Terms of service
            </Link>
            <Link href="#" underline={"always"}>
              Fees
            </Link>
            <Link href="#" underline={"always"}>
              Contact us
            </Link>
            <Link href="#" underline={"always"}>
              Law Enforcement Inquiries
            </Link>
          </Typography>

          <Typography className={classes.linksRow}>
            <Link href="#" underline={"always"}>
              Security bounty
            </Link>
            <Link href="#" underline={"always"}>
              Affiliate
            </Link>
            <Link href="#" underline={"always"}>
              Statistics
            </Link>
            <Link href="#" underline={"always"}>
              API docs
            </Link>
          </Typography>

          <Typography className={classes.linksRow}>
            <Link href="#" underline={"always"}>
              Local Bitcoins Alternative
            </Link>
            <Link href="#" underline={"always"}>
              Monero News
            </Link>
            <Link href="#" underline={"always"}>
              Knowledge
            </Link>
            <Link href="#" underline={"always"}>
              Monero Block Explorer
            </Link>
          </Typography>

          <Typography className={classes.linksRow}>
            <Link href="#" underline={"always"}>
              Tor hidden service
            </Link>
            <Link href="#" underline={"always"}>
              I2P
            </Link>
            <Link href="#" underline={"always"}>
              B32 I2P
            </Link>
            <Link href="#" underline={"always"}>
              AgoraDesk
            </Link>
          </Typography>
        </div>
        <Button className={classes.languageBtn}>
          <LanguageIcon className={classes.languageIcon} />
          {"Change Language"}
        </Button>
      </div>
      <div className={classes.socialLinks}>
        <Button>
          <TwitterIcon className={classes.socialIcons} />
        </Button>
        <Button>
          <RedditIcon className={classes.socialIcons} />
        </Button>
        <Button>
          <FacebookIcon className={classes.socialIcons} />
        </Button>
        <Button>
          <TelegramIcon className={classes.socialIcons} />
        </Button>
        <Button>
          <GitHubIcon className={classes.socialIcons} />
        </Button>
      </div>
    </div>
  );
};

export default Footer;
