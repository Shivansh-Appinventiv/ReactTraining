import { TextField } from "@material-ui/core";
import React from "react";

export default function Input(props) {
  const { name, label, value, onChange, className, error = null, ...rest } = props;
  return (
    <TextField
      variant={`outlined`}
      label={label}
      name={name}
      value={value}
      className={className}
      onChange={onChange}
      {...(error && {error: true,helperText:error})}
      {...rest}
    />
  );
}
