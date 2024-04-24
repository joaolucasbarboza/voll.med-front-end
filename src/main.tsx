import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "./components/theme-provider.tsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { NavBar } from "./components/navBar.tsx";
import { ErrorPage } from "@/pages/error-page.tsx";
import { Dashboard } from "./pages/dashboard.tsx";
import { Doctors } from "./pages/doctors.tsx";
import { Medicines } from "./pages/medicines.tsx";
import { Patients } from "./pages/patients.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "doctors",
        element: <Doctors />
      },
      {
        path: "medicines",
        element: <Medicines />
      },
      {
        path: "patients",
        element: <Patients />
      }
    ],
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
