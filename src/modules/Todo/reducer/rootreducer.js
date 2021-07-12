import { combineReducers } from "redux";
import { taskReducer } from "../pages/Home/reducer";

const rootReducer = combineReducers({
  taskReducer,
});

export default rootReducer;
