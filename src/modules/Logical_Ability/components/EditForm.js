import { TextField, Button, makeStyles } from "@material-ui/core";

const useStyle = makeStyles({
  inputField: {
    width: "100%",
  },
});

const EditForm = (props) => {
  const handleClick = () => {
    props.handleClose();
  };

  let name = "";
  let price = "";
  let id = "";

  const handleChange = (e, index, value) => {
    if (e.target.name === "Name") {
      name = e.target.value;
    }
    if (e.target.name === "price") {
      price = e.target.value;
    }
    id = index;
  };

  const saveChanges = () => {
    if (props.which === "bikes") {
      let arr = JSON.parse(window.localStorage.getItem("data"));
      let i = arr.bikes.findIndex((obj) => obj.id === id);
      arr.bikes[i].Name = name ? name : arr.bikes[i].Name;
      arr.bikes[i].price = price ? price : arr.bikes[i].price;
      window.localStorage.setItem("data", JSON.stringify(arr));
    } else if (props.which === "cars") {
      let arr = JSON.parse(window.localStorage.getItem("data"));
      let i = arr.cars.findIndex((obj) => obj.id === id);
      arr.cars[i].Name = name ? name : arr.cars[i].Name;
      arr.cars[i].price = price ? price : arr.cars[i].price;
      window.localStorage.setItem("data", JSON.stringify(arr));
    }
    props.handleSave();
  };
  const classes = useStyle();
  return (
    <>
      {props.isOpen && (
        <>
          {props.entries.map((value, index) => {
            if (value[0] !== "id") {
              return (
                <div className={`fieldBox`} key={index}>
                  <TextField
                    label={value[0]}
                    name={value[0]}
                    variant={`outlined`}
                    className={classes.inputField}
                    defaultValue={value[1]}
                    onChange={(e) =>
                      handleChange(e, props.entries[0][1], value[1])
                    }
                  />
                </div>
              );
            }
            return null;
          })}
          <Button
            variant={`contained`}
            color={`primary`}
            onClick={() => saveChanges()}
          >{`Save`}</Button>
          <Button
            variant={`contained`}
            color={`primary`}
            onClick={() => handleClick()}
          >{`Clear`}</Button>
        </>
      )}

      {!props.isOpen && (
        <>
          {props.entries.map((value, index) => {
            if (value[0] !== "id") {
              return (
                <div className={`fieldBox`} key={index}>
                  <TextField
                    label={value[0]}
                    variant={`outlined`}
                    className={classes.inputField}
                  />
                </div>
              );
            }
            return null;
          })}
          <Button variant={`contained`} color={`primary`}>{`Add`}</Button>
        </>
      )}
    </>
  );
};

export default EditForm;
