import React from "react";
import { initialState } from "./initialStates";

export const Store = React.createContext(initialState);

export const useStore = () => React.useContext(Store);

export const StoreProvider = ({ children, initialState, dispatchObjects }) => {
  // console.log(initialState);
  return (
    <Store.Provider
      value={{ appState: initialState, reducers: dispatchObjects }}
    >
      {children}
    </Store.Provider>
  );
};
