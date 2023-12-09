import { createContext } from "react";
import { Exam } from "../types";

interface ContextProps {
  isLoadingSpinner: boolean;
  showSpinner: () => void;
  hideSpinner: () => void;
  exam: Exam | null;
  handleAddExam: (exam: Exam) => void;
}

export const HandleUtilsContext = createContext({} as ContextProps);
