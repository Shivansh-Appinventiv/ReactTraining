import { Button } from "@material-ui/core";
import { useFormikContext } from "formik";
import React from "react";

export default function CustomButton(props) {
  const { children, ...rest } = props;

  const { submitForm } = useFormikContext();

  const handleSubmit = () => {
    submitForm();
  };

  const attributes = {
    ...rest,
    variant: "contained",
    color: "primary",
    fullWidth: true,
    onClick: handleSubmit,
  };

  return <Button {...attributes}>{children}</Button>;
}
