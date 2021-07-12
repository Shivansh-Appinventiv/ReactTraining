import React from "react";
import { Grid, Typography } from "@material-ui/core";
import useHeaderStyle from "./headerStyle";

export default function Header() {
  const { classes } = useHeaderStyle();
  return (
    <Grid item xs={12}>
      <Typography
        variant={`h4`}
        className={classes.title}
      >{`My Todos`}</Typography>
    </Grid>
  );
}
