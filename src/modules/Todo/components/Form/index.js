import { Formik, Form } from "formik";
export default function CustomForm(props) {
  const { initialValues, validationSchema, children, styleClass, onSubmit } =
    props;

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form autoComplete={`off`} className={styleClass}>
        {children}
      </Form>
    </Formik>
  );
}
