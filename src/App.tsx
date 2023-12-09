import "./App.css";
import { ThemeProvider } from "@mui/material";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import { themeOptions } from "./themes/MuiTheme";
import HandleUtilsProvider from "./context/HandleUtilsProvider";
import LoadingBackdrop from "./components/LoadingBackDrop";

function App() {
  const browserRouter = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
    },
  ]);

  return (
    <div>
      <ThemeProvider theme={themeOptions}>
        <HandleUtilsProvider>
          <LoadingBackdrop />
          <RouterProvider router={browserRouter} />
        </HandleUtilsProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
