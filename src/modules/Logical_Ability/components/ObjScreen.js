import { TextField, makeStyles, Button } from "@material-ui/core";

const useStyle = makeStyles({
  textField: {
    margin: "20px auto",
    width: "300px",
  },
  btnSave: {
    width: "100px",
    margin: "20px auto",
  },
});

const ObjScreen = (props) => {
  const classes = useStyle();
  let name = "";
  let address = "";
  let phoneNo = "";
  const handleChange = (e) => {
    if (e.target.name === "name") {
      name = e.target.value;
    }
    if (e.target.name === "address") {
      address = e.target.value;
    }
    if (e.target.name === "phoneNo") {
      phoneNo = e.target.value;
    }
  };

  const onSave = () => {
    if (props.which === "customer") {
      let obj = JSON.parse(window.localStorage.getItem("data"));
      obj.customer.name = name ? name : obj.customer.name;
      obj.customer.address = address ? address : obj.customer.address;
      obj.customer.phoneNo = phoneNo ? phoneNo : obj.customer.phoneNo;
      window.localStorage.setItem("data", JSON.stringify(obj));
    } else if (props.which === "dealer") {
      let obj = JSON.parse(window.localStorage.getItem("data"));
      obj.dealer.name = name ? name : obj.dealer.name;
      obj.dealer.address = address ? address : obj.dealer.address;
      obj.dealer.phoneNo = phoneNo ? phoneNo : obj.dealer.phoneNo;
      window.localStorage.setItem("data", JSON.stringify(obj));
    }
  };

  let objCard = null;
  if (props.which === "customer") {
    objCard = JSON.parse(window.localStorage.getItem("data")).customer;
  } else if (props.which === "dealer") {
    objCard = JSON.parse(window.localStorage.getItem("data")).dealer;
  }
  return (
    <div className={`objScreen`}>
      <h1 style={{textAlign: "center"}}>{`${props.which} data`}</h1>
      <div className={`objDisplay`}>
        {Object.entries(objCard).map((item, index) => {
          if (item[0] !== "id") {
            return (
              <TextField
                variant={`outlined`}
                label={item[0]}
                name={item[0]}
                defaultValue={item[1]}
                className={classes.textField}
                onChange={(e) => handleChange(e)}
              />
            );
          }
          return null;
        })}
        <Button
          variant={`contained`}
          color={`primary`}
          className={classes.btnSave}
          onClick={() => onSave()}
        >{`Save`}</Button>
      </div>
    </div>
  );
};

export default ObjScreen;
