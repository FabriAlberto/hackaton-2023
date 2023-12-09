import { useContext } from "react";
import { HandleUtilsContext } from "../context/HandleUtilsContext";

export const useUtilsContext = () => {
  return useContext(HandleUtilsContext);
};
