import * as Yup from "yup";

export const taskSchema = Yup.object().shape({
  name: Yup.string().required("Required Field"),
  description: Yup.string().required("Required Field"),
});
