import { combineReducers } from "redux";
import { loginReducer } from "../pages/LoginPage/reducer";
const rootReducer = combineReducers({ loginReducer });

export default rootReducer;
