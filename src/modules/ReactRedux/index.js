import React from "react";
import Counter from "./screens/counter";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store/store";

export default function ReactRedux() {
  return (
    <>
      <Provider store={store}>
        <Counter />
      </Provider>
    </>
  );
}
