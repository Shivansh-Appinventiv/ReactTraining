import React from "react";
import { TextField, MenuItem, Box } from "@material-ui/core";
import { useField, useFormikContext } from "formik";

export default function Select(props) {
  const { name, options, ...rest } = props;

  const [field, meta] = useField(name);

  const { setFieldValue } = useFormikContext();

  const handleChange = (event) => {
    const { value } = event.target;
    setFieldValue(name, value);
  };

  const attributes = {
    ...field,
    ...rest,
    select: true,
    variant: "outlined",
    fullWidth: true,
    onChange: handleChange,
  };

  if (meta && meta.touched && meta.error) {
    attributes.error = true;
    attributes.helperText = meta.error;
  }

  return (
    <TextField {...attributes}>
      {Object.keys(options).map((item, pos) => (
        <MenuItem key={pos} value={item}>
          <Box style={{ display: "flex" }}>
            <Box style={{ margin: "0 10px" }}>
              <img
                src={`https://rukminim1.flixcart.com/image/416/416/flag/f/5/z/dummy-model-number-2-dummy-brand-2-original-imaeye5wsmfeuhhu.jpeg?q=70`}
                alt={`FlagImage`}
                height={`20px`}
                width={`20px`}
              />
            </Box>
            <Box>{options[item]}</Box>
          </Box>
        </MenuItem>
      ))}
    </TextField>
  );
}
