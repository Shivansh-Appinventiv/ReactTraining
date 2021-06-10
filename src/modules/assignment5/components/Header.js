import {
  AppBar,
  Toolbar,
  makeStyles,
  Box,
  Switch,
  Typography,
  Button,
} from "@material-ui/core";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import FingerprintIcon from "@material-ui/icons/Fingerprint";

const useStyle = makeStyles({
  changeToolbar: {
    backgroundColor: "white",
  },
  headerArea: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingLeft: " 64px",
  },
  buttonContainer: {
    width: "285px",
    display: "flex",
    justifyContent: "space-between",
  },
  signButton: {
    width: "158px",
    height: "36px",
    "&.MuiButton-contained": {
      backgroundColor: "#388538",
      color: "white",
    },
    "& .MuiTypography-body1": {
      fontSize: "100%",
    },
  },
  loginButton: {
    width: "110px",
    height: "36px",
    "&.MuiButton-contained": {
      color: "white",
    },
    "& .MuiTypography-body1": {
      fontSize: "100%",
    },
  },
});

const Header = () => {
  const classes = useStyle();
  return (
    <AppBar position={`fixed`}>
      <Toolbar className={classes.changeToolbar}>
        <Box className={classes.headerArea}>
          <Switch name={`js&nojs`} size={`medium`} />
          <Box className={classes.buttonContainer}>
            <Button
              variant={`contained`}
              color={`default`}
              className={classes.signButton}
              startIcon={<PersonAddIcon />}
            >
              <Typography>{`SIGN UP FREE`}</Typography>
            </Button>
            <Button
              variant={`contained`}
              color={`primary`}
              className={classes.loginButton}
              startIcon={<FingerprintIcon />}
            >
              <Typography>{`LOG IN`}</Typography>
            </Button>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
