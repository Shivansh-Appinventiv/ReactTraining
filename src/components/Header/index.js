import { AppBar, Toolbar, Typography } from "@material-ui/core";
import React from "react";

export default function Header() {
  return (
    <AppBar position={`fixed`} color={`transparent`}>
      <Toolbar style={{ display: "flex", justifyContent: "center" }}>
        <Typography variant={`h3`}>{`Employee Detail`}</Typography>
      </Toolbar>
    </AppBar>
  );
}
