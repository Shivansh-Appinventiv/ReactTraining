import { TextField } from "@material-ui/core";
import { useField } from "formik";
import React from "react";

export default function Input(props) {
  const { name, ...rest } = props;

  const [field, meta] = useField(name);

  const attributes = {
    ...field,
    ...rest,
    fullWidth: true,
    variant: "outlined",
  };

  if (meta && meta.touched && meta.error) {
    attributes.error = true;
    attributes.helperText = meta.error;
  }

  return <TextField {...attributes} />;
}
