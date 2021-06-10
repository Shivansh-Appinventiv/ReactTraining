import {
  Box,
  Button,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import SearchIcon from "@material-ui/icons/Search";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import { currency } from "./currency";
import clsx from "clsx";
import Paragraph from "./Paragraph";
import Footer from "./Footer";
import TableMaterial from "./TableMaterial";
//#1565c0

const useStyle = makeStyles({
  mainContainer: {
    width: "calc(100% - 73px)",
    backgroundColor: "#f4f6f8",
    padding: "100px",
    float: "right",
  },
  contentContainer: {
    margin: "0 auto",
    maxWidth: "1337px",
  },
  cardConatiner: {
    display: "flex",
    justifyContent: "space-between",
  },
  cards: {
    width: "49.5%",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: "20px 15px",
    boxShadow:
      " 0 0 0 1px rgb(63 63 68 / 5%), 0 1px 3px 0 rgb(63 63 68 / 15%);",
    backgroundColor: "white",
    borderRadius: "4px",
  },
  assignWidth: {
    minWidth: "48%",
    margin: "8px 0",
  },
  btnStyle: {
    height: "50px",
  },
  amountStyle: {
    "& .Mui-focused fieldset": {
      borderColor: "blue",
    },
  },
  searchButton: {
    width: "100%",
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
  bannerCard: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  bannerInner: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "250px",
    "& .MuiTypography-body1": {
      fontSize: "40px",
      whiteSpace: "pre",
      textAlign: "center",
      fontWeight: "500",
    },
  },
  backgroundWhite: {
    backgroundColor: "white",
    border: "1px solid lightgrey",
    boxShadow: "none",
  },
});

const MainContent = () => {
  const classes = useStyle();
  return (
    <div className={classes.mainContainer}>
      <Box className={classes.contentContainer}>
        <Box className={classes.cardConatiner}>
          <Box className={classes.cards}>
            <Button
              variant={`contained`}
              color={`primary`}
              startIcon={<ShoppingCartIcon />}
              className={clsx(classes.assignWidth, classes.btnStyle)}
            >
              <Typography>{`BUY`}</Typography>
            </Button>
            <Button
              variant={`contained`}
              color={`default`}
              startIcon={<ShoppingCartIcon />}
              className={clsx(classes.assignWidth, classes.backgroundWhite)}
            >
              <Typography>{`SELL`}</Typography>
            </Button>
            <TextField
              label={`Amount`}
              variant={`outlined`}
              className={classes.assignWidth}
            ></TextField>
            <Autocomplete
              value={"INR"}
              options={currency}
              className={classes.assignWidth}
              getOptionLabel={(option) => option.cc}
              renderInput={(params) => (
                <TextField {...params} variant="outlined" />
              )}
            />
            <Autocomplete
              options={currency}
              className={classes.assignWidth}
              getOptionLabel={(option) => option.cc}
              renderInput={(params) => (
                <TextField {...params} variant="outlined" />
              )}
            />
            <Autocomplete
              options={currency}
              className={classes.assignWidth}
              getOptionLabel={(option) => option.cc}
              renderInput={(params) => (
                <TextField {...params} variant="outlined" />
              )}
            />
            <Button
              variant={`contained`}
              color={`primary`}
              startIcon={<SearchIcon />}
              className={clsx(classes.searchButton, classes.btnStyle)}
            >
              <Typography>{`SEARCH`}</Typography>
            </Button>
          </Box>
          <Box className={clsx(classes.cards, classes.bannerCard)}>
            <Box className={clsx(classes.bannerInner)}>
              <Typography>
                {`Buy Monero.
Sell Monero.
Cash or online.
Anywhere.`}
              </Typography>
            </Box>
            <Button
              variant={`contained`}
              color={`default`}
              className={clsx(classes.signButton)}
              startIcon={<PersonAddIcon />}
            >
              <Typography>{`SIGN UP FREE`}</Typography>
            </Button>
          </Box>
        </Box>
        <TableMaterial />
        <Paragraph />
        <Footer />
      </Box>
    </div>
  );
};

export default MainContent;
