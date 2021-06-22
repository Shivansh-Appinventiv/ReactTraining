import { Box, Button, TextField } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";
import { useForm, Form } from "../components/useForm";

const initialValues = {
  username: "",
  password: "",
};

function generateToken(n) {
  var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  var token = "";
  for (var i = 0; i < n; i++) {
    token += chars[Math.floor(Math.random() * chars.length)];
  }
  return token;
}

export default function LoginForm(props) {
  const { linkRef, setIsOpen,setIsLogIn } = props;
  const history = useHistory();
  const { values,handleChange, errors, setErrors } =
    useForm(initialValues);

  const validate = () => {
    let temp = {};
    temp.username = values.username ? "" : "Required!";
    temp.password = values.password ? "" : "Required!";
    setErrors({
      ...temp,
    });
    return Object.values(temp).every((x) => x === "");
  };

  const handleSubmit = () => {
    if (validate()) {
      setIsOpen(false);
      history.push(linkRef);
      window.localStorage.setItem(
        "accessToken",
        JSON.stringify(generateToken(16))
      );
      setIsLogIn(false);
    }
  };
  return (
    <Box>
      <Form>
        <Box>
          <TextField
            variant={`outlined`}
            label={`Username`}
            value={values.username}
            name={`username`}
            onChange={handleChange}
            {...(errors.username && {
              error: true,
              helperText: errors.username,
            })}
          ></TextField>
        </Box>
        <Box>
          <TextField
            variant={`outlined`}
            label={`Password`}
            value={values.password}
            name={`password`}
            onChange={handleChange}
            {...(errors.username && {
              error: true,
              helperText: errors.password,
            })}
          ></TextField>
        </Box>
        <Box>
          <Button
            variant={`contained`}
            color={`primary`}
            onClick={handleSubmit}
          >{`Login`}</Button>
        </Box>
      </Form>
    </Box>
  );
}
