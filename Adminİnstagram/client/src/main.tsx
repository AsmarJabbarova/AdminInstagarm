import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import RouterAdmin from "./pages/admin/RouterAdmin.tsx";
import AddUsers from "./pages/admin/AddUsers.tsx";
import MainAdmin from "./pages/admin/MainAdmin.tsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [],
  },
  {
    path: "/admin",
    element: <RouterAdmin />,
    children: [
      {
        path: "/admin",
        element: <MainAdmin />,
      },
      {
        path: "/admin/addUser",
        element: <AddUsers />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
