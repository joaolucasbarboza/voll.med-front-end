import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "./components/theme-provider.tsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { NavBar } from "./components/navBar.tsx";
import { ErrorPage } from "@/pages/ErrorPage/index.tsx";
import { Dashboard } from "./pages/Dashboard/index.tsx";
import Doctors from "./pages/Doctors/index.tsx";
import Medicines from "./pages/Medicines/index.tsx";
import { Patients } from "./pages/Patients/index.tsx";
import { Login } from "./pages/Login/index.tsx";
import { Register } from "./pages/Register/index.tsx";
import { NewQuey } from "./pages/NewQuery/index.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "doctors",
        element: <Doctors />,
      },
      {
        path: "medicines",
        element: <Medicines />,
      },
      {
        path: "patients",
        element: <Patients />,
      },
      {
        path: "newquery",
        element: <NewQuey />,
      },
    ],
  },

  {
    index: true,
    path: "login",
    element: <Login />,
  },
  {
    path: "register",
    element: <Register />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider
      defaultTheme="dark"
      storageKey="vite-ui-theme"
    >
        <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
