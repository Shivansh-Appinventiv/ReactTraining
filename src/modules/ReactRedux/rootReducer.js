import { combineReducers } from "redux";
import { counterReducer, apiReducer } from "./screens/reducer";

const rootReducer = combineReducers({
  counterReducer,
  apiReducer,
});

export default rootReducer;
