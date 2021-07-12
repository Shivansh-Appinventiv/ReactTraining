import React from "react";
import useHomeStyle from "./homeStyle";
import { Box, Container, Grid } from "@material-ui/core";
import Task from "../../components/Task";
import AddTask from "../../components/AddTask";
import Header from "../../components/Header";
import { useSelector } from "react-redux";

export default function Home() {
  const { classes } = useHomeStyle();
  const { taskList } = useSelector((state) => state.taskReducer);
  console.log(taskList);

  return (
    <Box className={classes.outerContainer}>
      <Container maxWidth={`xl`} className={classes.todoContainer}>
        <Grid container item xs={12}>
          <Grid container item xs={12}>
            <Container maxWidth={`lg`} className={classes.innerContainer}>
              <Container maxWidth={`md`}>
                <Grid container item xs={12}>
                  <Header />
                  <AddTask />
                </Grid>
                {taskList?.map((task, index) => (
                  <Task task={task} key={index} index={index} />
                ))}
              </Container>
            </Container>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
