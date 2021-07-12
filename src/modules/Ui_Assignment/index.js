import { Box } from "@material-ui/core";
import React from "react";
import LoginPage from "./pages/LoginPage";
//import Orders from "./pages/Orders";
import { Provider } from "react-redux";
import store from "./store";

export default function UiSuntexx() {
  return (
    <Provider store={store}>
      <Box style={{ background: "#efeff3", padding: "0 0 370px 0" }}>
        {/* <Orders /> */}
        <LoginPage />
      </Box>
    </Provider>
  );
}
