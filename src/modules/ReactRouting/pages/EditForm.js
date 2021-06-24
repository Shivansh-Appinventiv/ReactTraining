import { Box, Button, TextField } from "@material-ui/core";
import React from "react";
import { useForm, Form } from "../components/useForm";
import { addUser, updateUser } from "../services/apiCall";

const initialValues = {
  id: "",
  name: "",
  email: "",
  gender: "",
  image: "",
  profession: "",
};

export default function EditForm(props) {
  const { values, setValues, handleChange, errors, setErrors } =
    useForm(initialValues);

  React.useEffect(() => {
    if (props.item) {
      setValues(props.item);
    }
  }, [setValues, props.item]);

  const validate = () => {
    let temp = {};
    temp.name = values.name ? "" : "Required!";
    temp.email = values.email ? "" : "Required!";
    temp.gender = values.gender ? "" : "Required!";
    temp.image = values.image ? "" : "Required!";
    temp.profession = values.profession ? "" : "Required!";
    setErrors({
      ...temp,
    });
    return Object.values(temp).every((x) => x === "");
  };

  const addData = async () => {
    const addItem = await addUser({ ...values });
    props.setUserData([...props.userData, addItem]);
    console.log(addItem);
  };

  const updateData = async () => {
    const updateItem = await updateUser(values);
    props.setUser({ ...updateItem });
    console.log(updateItem);
  };

  const handleSubmit = () => {
    if (validate()) {
      props.setIsOpen(false);
      props.type === "edit" ? updateData() : addData();
    }
  };
  return (
    <Box>
      <Form>
        <Box>
          <TextField
            variant={`outlined`}
            label={`Name`}
            value={values.name}
            name={`name`}
            onChange={handleChange}
            {...(errors.name && {
              error: true,
              helperText: errors.name,
            })}
          ></TextField>
        </Box>
        <Box>
          <TextField
            variant={`outlined`}
            label={`Email`}
            value={values.email}
            name={`email`}
            onChange={handleChange}
            {...(errors.email && {
              error: true,
              helperText: errors.email,
            })}
          ></TextField>
        </Box>
        <Box>
          <TextField
            variant={`outlined`}
            label={`Image`}
            value={values.image}
            name={`image`}
            onChange={handleChange}
            {...(errors.image && {
              error: true,
              helperText: errors.image,
            })}
          ></TextField>
        </Box>
        <Box>
          <TextField
            variant={`outlined`}
            label={`Gender`}
            value={values.gender}
            name={`gender`}
            onChange={handleChange}
            {...(errors.gender && {
              error: true,
              helperText: errors.gender,
            })}
          ></TextField>
        </Box>
        <Box>
          <TextField
            variant={`outlined`}
            label={`Profession`}
            value={values.profession}
            name={`profession`}
            onChange={handleChange}
            {...(errors.profession && {
              error: true,
              helperText: errors.profession,
            })}
          ></TextField>
        </Box>
        <Box>
          <Button
            variant={`outlined`}
            color={`secondary`}
            onClick={handleSubmit}
          >
            {props.type === "edit" ? `Edit` : `Create`}
          </Button>
        </Box>
      </Form>
    </Box>
  );
}
