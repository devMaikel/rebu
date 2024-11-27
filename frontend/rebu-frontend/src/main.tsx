import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./error-page";
import Home from "./routes/home/home";
import "./globals.css";
import History from "./routes/history/history";
import RideOptions from "./routes/rideOptions/rideOptions";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "history/:customerId",
    element: <History />,
  },
  {
    path: "rideoptions",
    element: <RideOptions />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
