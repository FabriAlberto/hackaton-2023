import { Backdrop, CircularProgress } from "@mui/material";
import { useUtilsContext } from "../hooks/useUtilsContext";
// import { useAppSelector } from "hooks/redux";

export default function LoadingBackdrop() {
  const { isLoadingSpinner } = useUtilsContext();
  return (
    <div>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 11111 }}
        open={Boolean(isLoadingSpinner)}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}
