import "./App.css";
import { Grid } from "@mui/material";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

function App() {
  const browserRouter = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
    },
  ]);

  return (
    <Grid>
      <RouterProvider router={browserRouter} />
    </Grid>
  );
}

export default App;
