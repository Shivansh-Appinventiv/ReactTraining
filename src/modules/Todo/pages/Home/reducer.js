import { taskState } from "../../models";
import * as ActionNames from "./actionNames";

export const taskReducer = (state = taskState, actions) => {
  const { type, payload } = actions;

  switch (type) {
    case ActionNames.ADD_TASK:
      return {
        ...state,
        taskList: [...state.taskList, payload],
      };
    case ActionNames.COMPLETE_TASK:
      return {
        ...state,
        taskList: payload,
      };
    case ActionNames.DELETE_TASK:
      return {
        ...state,
        taskList: payload,
      };
    default:
      return {
        ...state,
      };
  }
};
