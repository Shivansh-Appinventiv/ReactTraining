import React from "react";
import { Box, Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import {
  incrementNumber,
  decrementNumber,
  getDataAsync,
  getApiResultAsync,
} from "./actions";

export default function Counter() {
  const dispatch = useDispatch();
  const { counter } = useSelector((state) => state.counterReducer);
  const { data } = useSelector((state) => state.apiReducer);

  React.useEffect(() => {
    console.log("hjhjk");
    dispatch(getApiResultAsync());
  }, []);

  return (
    <Box className={`reduxContainer`}>
      <Box className={`counterContainer`}>
        <Box className={`counterText`}>{`Counter : ${counter}`}</Box>
        <Box className={`counterButtons`}>
          <Button
            variant={`outlined`}
            color={`primary`}
            onClick={() => {
              dispatch(incrementNumber(1));
            }}
          >{`Increment`}</Button>
          <Button
            variant={`outlined`}
            color={`secondary`}
            onClick={() => {
              dispatch(getDataAsync(1));
            }}
          >{`Decrement`}</Button>
        </Box>
      </Box>
      <Box className={`colorWrapper`}>
        {data?.map((item, index) => {
          return (
            <Box
              className={`colorArea`}
              style={{ backgroundColor: item.color }}
              key={item.id}
            >
              <Box>{`Color Name : ${item.name}`}</Box>
              <Box>{`Color Value : ${item.color}`}</Box>
              <Box>{`Color Year : ${item.year}`}</Box>
              <Box>{`Color PanTone Value : ${item.pantone_value}`}</Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
