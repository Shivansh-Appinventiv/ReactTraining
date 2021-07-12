import React from "react";
import useHomeStyle from "./inputStyle";
import { Box } from "@material-ui/core";
import { Field, ErrorMessage } from "formik";
import FormError from "../../Form/formError";

export default function Input(props) {
  const { classes } = useHomeStyle();
  const { name, placeholder } = props;
  return (
    <Box className={classes.displayVertical}>
      <label htmlFor={name} className={classes.capitalized}>
        {name}
      </label>
      <Field
        name={name}
        id={name}
        className={classes.input}
        placeholder={placeholder}
      />
      <ErrorMessage name={name} component={FormError} />
    </Box>
  );
}
