import { TextField } from "@material-ui/core";
import { useField } from "formik";
import React from "react";

export default function DateTimePicker(props) {
  const { name, ...rest } = props;

  const [field, meta] = useField(name);

  const attributes = {
    ...field,
    ...rest,
    type: "date",
    variant: "outlined",
    fullWidth: true,
    InputLabelProps: {
      shrink: true,
    },
  };

  if (meta && meta.touched && meta.error) {
    attributes.error = true;
    attributes.helperText = meta.error;
  }

  return <TextField {...attributes} />;
}
