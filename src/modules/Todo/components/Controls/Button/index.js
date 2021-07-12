import { Button } from "@material-ui/core";
import React from "react";
import useButtonStyle from "./buttonStyle";

export default function CustomButton(props) {
  const { btnText, buttonCss, ...rest } = props;
  const { classes } = useButtonStyle(buttonCss);
  const attributes = {
    ...rest,
    className: classes.buttonCss,
  };
  return <Button {...attributes}>{btnText}</Button>;
}
