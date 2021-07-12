import { applyMiddleware, compose, createStore } from "redux";
import rootReducer from "../reducer/rootreducer";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";

const logger = createLogger();

const todoMiddleWares = compose(applyMiddleware(thunk, logger));

const store = createStore(rootReducer, todoMiddleWares);

export default store;
