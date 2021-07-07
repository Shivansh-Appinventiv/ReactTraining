import { Formik, Form } from "formik";
import React from "react";

export default function CustomForm(props) {
  const { children, initialValues, validationSchema, onSubmit } = props;
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form autoComplete={`off`}>{children}</Form>
    </Formik>
  );
}
