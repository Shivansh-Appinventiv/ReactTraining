import { Grid, makeStyles, Button } from "@material-ui/core";
import React, { useEffect } from "react";
import { useForm, Form } from "../components/useForm";
import Input from "../components/controls/Input";

const useStyle = makeStyles((theme) => ({
  textField: {
    width: "100%",
    margin: "10px 0",
  },
  buttonSpecs: {
    margin: "0 10px",
  },
}));

const initialFormValues = {
  id: 0,
  fullName: "",
  fatherName: "",
  motherName: "",
  email: "",
  phoneNo: "",
};

export default function StudentForm(props) {
  const classes = useStyle();
  const { addOrEdit, edit } = props;
  const { values, setValues, handleInputChange, errors, setErrors } =
    useForm(initialFormValues);

  const validate = () => {
    let temp = {};
    temp.fullName = values.fullName ? "" : "This field is required!";
    temp.fatherName = values.fatherName ? "" : "This field is required!";
    temp.motherName = values.motherName ? "" : "This field is required!";
    temp.email = values.email.match("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")
      ? ""
      : "This field is required!";
    temp.phoneNo = values.phoneNo.length === 10 && values.phoneNo.match("^[0-9]{10}$") ? "" : "Enter phoneNo correctly"; 
    setErrors({
      ...temp,
    });
    return Object.values(temp).every((x) => x === "");
  };

  const handleAdd = () => {
    if (validate()) {
      console.log(values);
      addOrEdit(values);
    }
  };

  useEffect(() => {
    if (edit !== null) {
      setValues({
        ...edit,
      });
    }
  }, [edit]);

  return (
    <div className={`formConatiner`}>
      <Form>
        <div className={`formBody`}>
          <Grid xs={12}>
            <Input
              label={`Full Name`}
              name={`fullName`}
              value={values.fullName}
              className={classes.textField}
              onChange={handleInputChange}
              error={errors.fullName}
            />
            <Input
              label={`Father's Name`}
              name={`fatherName`}
              value={values.fatherName}
              className={classes.textField}
              onChange={handleInputChange}
              error={errors.fatherName}
            />
            <Input
              label={`Mother's Name`}
              name={`motherName`}
              value={values.motherName}
              className={classes.textField}
              onChange={handleInputChange}
              error={errors.motherName}
            />
            <Input
              label={`Email Id`}
              name={`email`}
              value={values.email}
              className={classes.textField}
              onChange={handleInputChange}
              error={errors.email}
            />
            <Input
              label={`Phone Number`}
              name={`phoneNo`}
              value={values.phoneNo}
              className={classes.textField}
              onChange={handleInputChange}
              maxLength={`10`}
              error={errors.phoneNo}
            />
          </Grid>
        </div>
        <div className={`formFooter`}>
          <Button
            variant={`contained`}
            color={`primary`}
            className={classes.buttonSpecs}
            onClick={handleAdd}
          >
            {edit ? `Edit` : `Add`}
          </Button>
          <Button
            variant={`contained`}
            color={`secondary`}
            className={classes.buttonSpecs}
            onClick={() => props.setOpenPopup(false)}
          >{`Cancel`}</Button>
        </div>
      </Form>
    </div>
  );
}
