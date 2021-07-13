import { Box } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";

export default function TokenPage() {
  const { data } = useSelector((state) => state.loginReducer);
  return (
    <Box style={{ width: "100%" }}>
      <p>{data.accessToken.toString()}</p>
    </Box>
  );
}
