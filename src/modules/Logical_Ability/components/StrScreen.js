import { Button, makeStyles, TextField } from "@material-ui/core";

const useStyle = makeStyles({
  btnSize: {
    width: "100px",
    margin: "20px auto",
  },
});

const StrScreen = (props) => {
  const classes = useStyle();
  let obj = JSON.parse(window.localStorage.getItem("data"));

  let infoVal = "";
  const handleChange = (e) => {
    infoVal = e.target.value;
  };

  const onSave = () => {
    let temp = JSON.parse(window.localStorage.getItem("data"));
    temp.info = infoVal;
    window.localStorage.setItem("data", JSON.stringify(temp));
  };

  return (
    <div className={`stringContainer`}>
      <div className={`inputContainer`}>
        <TextField
          variant={`outlined`}
          label={Object.keys(obj)[0]}
          defaultValue={obj.info}
          onChange={(e) => handleChange(e)}
        />
        <Button
          variant={`contained`}
          color={`primary`}
          className={classes.btnSize}
          onClick={() => onSave()}
        >{`Save`}</Button>
      </div>
    </div>
  );
};

export default StrScreen;
