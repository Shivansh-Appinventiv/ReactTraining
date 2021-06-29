import { Box, Button, Switch, Typography } from "@material-ui/core";
import React from "react";
import Card from "../components/Card";
import { useStore } from "../store/context";

export default function Home() {
  const store = useStore();
  console.log(store);
  const { dataDispatch, themeDispatch } = store?.reducers;
  const { checked, data, theme } = store?.appState;

  console.log(store?.appState);

  const green = {
    name: "Green",
    year: "2021",
    color: "green",
    pantone_value: "16-1765",
  };

  const handleDark = () => {
    themeDispatch({
      type: "DARK",
      payload: { color: "white", background: "black" },
    });
  };

  const handleLight = () => {
    themeDispatch({
      type: "LIGHT",
      payload: null,
    });
  };

  return (
    <Box style={theme} className={`homeWrapper`}>
      <Box className={`titleWrapper`}>
        <Typography variant={`h2`}>{`Color Data`}</Typography>
        <Switch
          checked={checked}
          color={`primary`}
          onChange={checked ? handleLight : handleDark}
          name={`checked`}
          inputProps={{ "aria-label": `primary checkbox` }}
        ></Switch>
        <Box>{`Switch to Dark And Light Mode`}</Box>
      </Box>
      <Box className={`colorWrapper`}>
        {data?.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </Box>
      <Box className={`btnWrapper`}>
        <Button
          variant={`outlined`}
          color={`primary`}
          onClick={() =>
            dataDispatch({ type: "CHANGE_TO_GREEN", payload: green })
          }
        >{`Change To Green`}</Button>
      </Box>
      <Box className={`btnWrapper`}>
        <Button
          variant={`outlined`}
          color={`secondary`}
          onClick={() =>
            dataDispatch({ type: "CHANGE_TO_DEFAULT", payload: null })
          }
        >{`Change To Default`}</Button>
      </Box>
    </Box>
  );
}
