const initailState = {
  counter: 0,
};

export const counterReducer = (state = initailState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        counter: state.counter + action.payload,
      };
    case "DECREMENT":
      return {
        ...state,
        counter: state.counter - action.payload,
      };
    default:
      return { ...state };
  }
};

const apiState = {
  data: [],
};

export const apiReducer = (state = apiState, action) => {
  switch (action.type) {
    case "GETDATA":
      return {
        ...state,
        data: action.payload,
      };
    default:
      return { ...state };
  }
};
