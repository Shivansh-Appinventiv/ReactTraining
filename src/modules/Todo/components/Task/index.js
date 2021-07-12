import React from "react";
import useTaskStyle from "./taskStyle";
import Button from "../Controls/Button";
import { Grid, Typography } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import * as ActionName from "../../pages/Home/actionNames";

export default function Task(props) {
  const { classes } = useTaskStyle();
  const { task, index } = props;
  const dispatch = useDispatch();
  const { taskList } = useSelector((state) => state.taskReducer);
  const completeButtonCss = {
    color: "aqua",
    margin: "0 10px",
    borderRadius: "20px",
    borderColor: "aqua",
    background: "white",
    border: "2px solid",
    "&:hover": {
      background: "aqua",
      color: "white",
    },
  };
  const deleteButtonCss = {
    color: "red",
    margin: "0 10px",
    borderRadius: "20px",
    borderColor: "red",
    background: "white",
    border: "2px solid",
    "&:hover": {
      background: "red",
      color: "white",
    },
  };

  const handleDelete = () => {
    let arr = taskList;
    arr.splice(index, 1);
    dispatch({ type: ActionName.DELETE_TASK, payload: [...arr] });
  };

  const handleComplete = () => {
    let arr = taskList;
    arr[index].isComplete = true;
    dispatch({ type: ActionName.COMPLETE_TASK, payload: [...arr] });
  };

  return (
    <Grid
      container
      item
      xs={12}
      spacing={2}
      className={classes.cancelMargin}
      style={{ marginTop: "15px" }}
    >
      <Grid
        item
        xs={12}
        md={8}
        style={
          taskList[index].isComplete
            ? { color: "#6e6e70", textDecoration: "line-through" }
            : null
        }
      >
        <Typography
          variant={`h3`}
          className={!taskList[index].isComplete ? classes.title : ""}
        >
          {task.name}
        </Typography>
        <Typography variant={`body1`}>{task.description}</Typography>
      </Grid>
      <Grid item xs={12} md={4} className={classes.taskButtons}>
        {!taskList[index].isComplete ? (
          <Button
            btnText={`Complete`}
            variant={`outlined`}
            buttonCss={completeButtonCss}
            onClick={handleComplete}
          />
        ) : null}
        <Button
          btnText={`Delete`}
          variant={`outlined`}
          buttonCss={deleteButtonCss}
          onClick={handleDelete}
        />
      </Grid>
    </Grid>
  );
}
