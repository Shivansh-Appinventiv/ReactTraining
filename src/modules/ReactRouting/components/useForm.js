import React, { useState } from "react";

export function useForm(initialValues) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState(initialValues);
  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  return {
    values,
    setValues,
    handleChange,
    errors,
    setErrors,
  };
}

export function Form(props) {
  return <form autoComplete={`off`}>{props.children}</form>;
}
