import { Box } from "@material-ui/core";
import React from "react";

export default function Card(props) {
  const { item } = props;
  return (
    <Box className={`colorBox`}>
      <Box
        className={`colorArea`}
        style={{ backgroundColor: item.color }}
      ></Box>
      <Box className={`textArea`}>
        <Box>{item.name}</Box>
        <Box>{item.color}</Box>
        <Box>{item.year}</Box>
        <Box>{item.pantone_value}</Box>
      </Box>
    </Box>
  );
}
