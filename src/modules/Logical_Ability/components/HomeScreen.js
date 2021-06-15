import { makeStyles, TextField, Button } from "@material-ui/core";
import clsx from "clsx";

const useStyle = makeStyles((theme) => ({
  btnData: {
    margin: "20px 0",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    width: "500px",
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  inputField: {
    width: "100%",
  },
  formField: {
    margin: "10px 0",
  },
}));
const HomeScreen = (props) => {
  const classes = useStyle();
  let keyValue = "";

  const handleChange = (e) => {
    keyValue = e.target.value;
  };
  const handleClick = () => {
    console.log(keyValue);
    if (keyValue === "bikes" || keyValue === "cars") {
      props.renderNext("arrayScreen", keyValue);
    }else if(keyValue === "customer" || keyValue === "dealer"){
      props.renderNext("objScreen",keyValue);
    }else if(keyValue === "info"){
      props.renderNext("strScreen",keyValue);
    }else {
      return null;
    }
  };

  const mainKeys = JSON.parse(window.localStorage.getItem("data"));
  return (
    <>
      <div className={`keysContainer`}>
        {Object.keys(mainKeys).map((keyName, index) => {
          return <div className={`keyNames`}>{keyName}</div>;
        })}
      </div>
      <div className={`keyInputContainer`}>
        <TextField
          required
          id="outlined-required"
          label="Enter Key"
          variant="outlined"
          onChange={(e) => handleChange(e)}
        />
        <Button
          variant={`contained`}
          color={`primary`}
          className={clsx(classes.btnData)}
          onClick={() => handleClick()}
        >{`Display Data`}</Button>
      </div>
    </>
  );
};

export default HomeScreen;
