import { Box, Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import Form from "../../components/Form";
import * as Yup from "yup";
import Input from "../../components/Control/Input";
import Select from "../../components/Control/Select";
import countries from "../../data/countries.json";
import DateTimePicker from "../../components/Control/DateTimePicker";
import Button from "../../components/Control/Button";

export default function EmployeeForm() {
  const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
    phoneNo: "",
    manager: "",
    addressLine1: "",
    addressLine2: "",
    state: "",
    city: "",
    country: "",
    joiningDate: "",
    designation: "",
  };

  const validationSchema = Yup.object().shape({
    firstname: Yup.string()
      .required("Required!")
      .min(6, "FirstName should not be less than 6 character")
      .max(10, "FirstName should not be greater than 10 character"),
    lastname: Yup.string()
      .required("Required!")
      .min(6, "FirstName should not be less than 6 character")
      .max(10, "FirstName should not be greater than 10 character"),
    email: Yup.string().required("Required!").email("Invalid Email Address"),
    phoneNo: Yup.number()
      .integer()
      .typeError("Please Enter a valid Phone Number"),
    manager: Yup.string().required("Required!"),
    addressLine1: Yup.string().required("Required!"),
    addressLine2: Yup.string(),
    city: Yup.string().required("Required!"),
    state: Yup.string().required("Required!"),
    country: Yup.string().required("Required!"),
    joiningDate: Yup.date().required("Required!"),
    designation: Yup.string().required("Required!"),
  });

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <Grid item xs={12} style={{ marginTop: "75px" }}>
      <Container maxWidth={`md`}>
        <Box>
          <Form
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography>{`Personal Details`}</Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Input name="firstname" label={`First Name`} />
              </Grid>
              <Grid item xs={12} md={6}>
                <Input name="lastname" label={`Last Name`} />
              </Grid>
              <Grid item xs={12}>
                <Input name="email" label={`Email`} />
              </Grid>

              <Grid item xs={12}>
                <Input name="phoneNo" label={`Phone No`} />
              </Grid>

              <Grid item xs={12}>
                <Typography>{`Address Details`}</Typography>
              </Grid>
              <Grid item xs={12}>
                <Input name="addressLine1" label={`Address Line 1`} />
              </Grid>
              <Grid item xs={12}>
                <Input name="addressLine2" label={`Address Line 2`} />
              </Grid>
              <Grid item xs={12} md={4}>
                <Input name="city" label={`City`} />
              </Grid>
              <Grid item xs={12} md={4}>
                <Input name="state" label={`State`} />
              </Grid>
              <Grid item xs={12} md={4}>
                <Select
                  name={`country`}
                  label={`Country`}
                  options={countries}
                />
              </Grid>

              <Grid item xs={12}>
                <Typography>{`Office Details`}</Typography>
              </Grid>
              <Grid item xs={12}>
                <DateTimePicker name={`joiningDate`} label={`Joining Date`} />
              </Grid>
              <Grid item xs={12}>
                <Input name="manager" label={`Manager Name`} />
              </Grid>
              <Grid item xs={12}>
                <Input name="designation" label={`Designation`} />
              </Grid>

              <Grid item xs={12}>
                <Button>{`Submit`}</Button>
              </Grid>
            </Grid>
          </Form>
        </Box>
      </Container>
    </Grid>
  );
}
