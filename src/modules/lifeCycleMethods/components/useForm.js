import React, { useState } from "react";

export function useForm(initialFormValues) {
  const [values, setValues] = useState(initialFormValues);
  const [errors,setErrors] = useState(initialFormValues);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  return {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
  };
}

export function Form(props) {
  return <form autoComplete={`off`}>{props.children}</form>;
}
