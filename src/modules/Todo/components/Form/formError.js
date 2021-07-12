import React from "react";
import { Box } from "@material-ui/core";

export default function FormError(props) {
  const { children } = props;
  const errorText = {
    color: "red",
  };
  return <Box style={errorText}>{children}</Box>;
}
