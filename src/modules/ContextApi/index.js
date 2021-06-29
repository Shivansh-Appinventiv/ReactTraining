import React from "react";
import Home from "./pages/Home";
import { StoreProvider } from "./store/context";
import { initialState } from "./store/initialStates";
import { useData, useTheme } from "./store/dispatcher";
import "./index.css";

export default function ContextApi() {
  const { dataState, dataDispatch } = useData();
  const { themeState, themeDispatch } = useTheme();
  return (
    <div>
      <StoreProvider
        initialState={{ ...initialState, ...dataState, ...themeState }}
        dispatchObjects={{ dataDispatch, themeDispatch }}
      >
        <Home />
      </StoreProvider>
    </div>
  );
}
