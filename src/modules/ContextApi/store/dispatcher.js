import React from "react";
import { dataReducer, themeReducer } from "./reducer";
import { dataInitialState, themeInitialState } from "./initialStates";

export const useData = () => {
  const [dataState, dataDispatch] = React.useReducer(
    dataReducer,
    dataInitialState
  );
  return {
    dataState,
    dataDispatch,
  };
};

export const useTheme = () => {
  const [themeState, themeDispatch] = React.useReducer(
    themeReducer,
    themeInitialState
  );
  return {
    themeState,
    themeDispatch,
  };
};
