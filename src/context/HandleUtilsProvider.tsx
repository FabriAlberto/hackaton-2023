import React, { useReducer } from "react";
import { HandleUtilsContext } from "./HandleUtilsContext";
import { HandleUtils, HandleUtilsReducer } from "./HandleUtilsReducer";
import { Exam } from "../types";

export type HandleUtilsState = {
  isLoadingSpinner: boolean;
  exam: Exam | null;
};

interface IProps {
  children: React.ReactNode;
}

const HandleUtils_INITIAL_STATE: HandleUtilsState = {
  isLoadingSpinner: false,
  exam: null,
};

const HandleUtilsProvider = ({ children }: IProps) => {
  const [state, dispatch] = useReducer(
    HandleUtilsReducer,
    HandleUtils_INITIAL_STATE
  );

  const showSpinner = () => {
    dispatch({ type: HandleUtils.SHOW_SPINNER });
  };

  const hideSpinner = () => {
    dispatch({ type: HandleUtils.HIDE_SPINNER });
  };

  const handleAddExam = (exam: Exam) => {
    dispatch({
      type: HandleUtils.ADD_EXAM,
      payload: exam,
    });
  };

  return (
    <HandleUtilsContext.Provider
      value={{
        ...state,
        showSpinner,
        hideSpinner,
        handleAddExam,
      }}
    >
      {children}
    </HandleUtilsContext.Provider>
  );
};
export default HandleUtilsProvider;
