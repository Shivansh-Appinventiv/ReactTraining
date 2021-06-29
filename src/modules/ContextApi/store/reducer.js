import { dataInitialState, themeInitialState } from "./initialStates";
import { data } from "../data";

export const dataReducer = (state = dataInitialState, action) => {
  const { type, payload } = action;
  //console.log(type, payload);
  switch (type) {
    case "CHANGE_TO_GREEN": {
      return {
        ...state,
        data: state.data.map((ele) => {
          return {
            ...ele,
            name: payload.name,
            color: payload.color,
            year: payload.year,
            pantone_value: payload.pantone_value,
          };
        }),
      };
    }
    default:
      return { ...state, data: data };
  }
};

export const themeReducer = (state = themeInitialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "DARK": {
      return { ...state, checked: !state.checked, theme: payload };
    }
    default:
      return {
        ...state,
        checked: !state.checked,
        theme: themeInitialState.theme,
      };
  }
};
