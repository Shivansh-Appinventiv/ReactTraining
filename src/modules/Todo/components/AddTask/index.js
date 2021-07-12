import React from "react";
import useAddTaskStyle from "./addTaskStyle";
import Input from "../Controls/Input";
import Button from "../Controls/Button";
import Form from "../Form";
import { taskValues } from "../Form/initialValues";
import { taskSchema } from "../Form/schemas";
import { Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";
import * as ActionName from "../../pages/Home/actionNames";

export default function AddTask() {
  const { classes } = useAddTaskStyle();
  const dispatch = useDispatch();
  const buttonCss = {
    borderRadius: "20px",
    background: "#ff9900",
    width: "120px",
    border: "2px solid",
    borderColor: "transparent",
    color: "white",
    "&:hover": {
      background: "white",
      color: "#ff9900",
      borderColor: "#ff9900",
    },
  };
  const onSubmit = (values) => {
    console.log(values);
    let obj = { ...values, isComplete: false };
    dispatch({ type: ActionName.ADD_TASK, payload: obj });
  };
  return (
    <Form
      initialValues={taskValues}
      validationSchema={taskSchema}
      styleClass={classes.form}
      onSubmit={onSubmit}
    >
      <Grid container item xs={12} spacing={2} className={classes.cancelMargin}>
        <Grid item xs={12} md={4}>
          <Input name={`name`} placeholder={`Name`} />
        </Grid>
        <Grid item xs={12} md={4}>
          <Input name={`description`} placeholder={`Description`} />
        </Grid>
        <Grid item xs={12} md={4} className={classes.addTodoButton}>
          <Button
            btnText={`Add Todo`}
            buttonCss={buttonCss}
            variant={`contained`}
            type={`submit`}
          />
        </Grid>
      </Grid>
    </Form>
  );
}
