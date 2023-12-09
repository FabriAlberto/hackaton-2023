import { Exam } from "../types";
import { HandleUtilsState } from "./HandleUtilsProvider";

export enum HandleUtils {
  SHOW_SPINNER = "SHOW_SPINNER",
  HIDE_SPINNER = "HIDE_SPINNER",
  ADD_EXAM = "ADD_EXAM",
}

type HandleUtilsActionType =
  | { type: HandleUtils.SHOW_SPINNER }
  | { type: HandleUtils.HIDE_SPINNER }
  | { type: HandleUtils.ADD_EXAM; payload: Exam };

export const HandleUtilsReducer = (
  state: HandleUtilsState,
  action: HandleUtilsActionType
) => {
  switch (action.type) {
    case HandleUtils.SHOW_SPINNER:
      return {
        ...state,
        isLoadingSpinner: true,
      };
    case HandleUtils.HIDE_SPINNER:
      return {
        ...state,
        isLoadingSpinner: false,
      };
    case HandleUtils.ADD_EXAM:
      return {
        ...state,
        exam: action.payload,
      };
    default:
      return state;
  }
};
