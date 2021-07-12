const initialState = {
  data: {},
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGINPOST":
      return {
        ...state,
        data: action.payload,
      };
    default:
      return { ...state };
  }
};
