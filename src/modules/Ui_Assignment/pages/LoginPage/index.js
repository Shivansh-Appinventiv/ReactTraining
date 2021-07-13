import React from "react";
import { Input, Password } from "../../component/Controls/Input";
import Form from "../../component/Form";
import { getLoginResult } from "./actions";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Typography,
} from "@material-ui/core";
import TokenPage from "../TokenPage";

export default function LoginPage() {
  const dispatch = useDispatch();
  const initialValues = {
    username: "",
    password: "",
    rememberMe: false,
  };
  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .required("Required!")
      .max(15, "UserName should not be greater than 15 chars"),
    password: Yup.string()
      .required("No password provided.")
      .min(8, "Password should be minimum 8 chars"),
  });
  const onSubmit = (values) => {
    console.log(values);
    let obj = {
      username: values.username,
      password: values.password,
    };
    dispatch(getLoginResult(obj));
  };
  return (
    <Box style={{width: "100%"}}>
      <Grid container xs={12}>
        <Box style={{ width: "320px", margin: "0 auto" }}>
          <Grid item xs={12}>
            <Box
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                style={{
                  width: "270px",
                  margin: "48px 0 16px 0",
                  fontWeight: "bold",
                  color: "#006597",
                  fontSize: "20px",
                  lineHeight: "28px",
                }}
              >{`Sign in to Suntexx Limited`}</Typography>
              <Typography
                style={{
                  color: "#707070",
                  fontSize: "18px",
                  lineHeight: "24px",
                }}
              >{`Company Code: STX`}</Typography>
              <Box
                style={{
                  width: "100%",
                  background: "#FFFFFF 0% 0% no-repeat padding-box",
                  boxShadow: "0px 0px 14px #3540520D",
                  borderRadius: "4px",
                  margin: "56px 0 0 0",
                }}
              >
                <Grid item xs={12} style={{ padding: "0 24px" }}>
                  <Typography
                    style={{
                      fontSize: "15px",
                      fontWeight: "bold",
                      lineHeight: "17px",
                      margin: "32px 17px 40px 0",
                      letterSpacing: "0.03px",
                    }}
                  >{`Please enter your login information`}</Typography>
                  <Form
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                  >
                    <Box style={{ margin: "0 0 15px 0" }}>
                      <Input
                        name={`username`}
                        label={`User ID / Email Address`}
                      />
                    </Box>
                    <Box style={{ margin: "0 0 15px 0" }}>
                      <Password name={`password`} />
                    </Box>
                    <Box style={{ margin: "0 0 15px 0" }}>
                      <FormControlLabel
                        control={<Checkbox name="remember" color={"primary"} />}
                        label="Remember me"
                      />
                    </Box>
                    <Box style={{ margin: "0 0 15px 0" }}>
                      <Button
                        variant={`contained`}
                        color={`primary`}
                        fullWidth={true}
                        type={`submit`}
                      >{`Sign In`}</Button>
                    </Box>
                  </Form>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Box>
        <TokenPage />
      </Grid>
    </Box>
  );
}
