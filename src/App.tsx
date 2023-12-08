import "./App.css";
import {ThemeProvider } from "@mui/material";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import { themeOptions } from "./themes/MuiTheme";

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
        <RouterProvider router={browserRouter} />
      </ThemeProvider>
    </div>
  );
}

export default App;
