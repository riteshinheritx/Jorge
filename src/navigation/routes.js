import React from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import RootLayouts from "../pages/layouts/RootLayouts";
import LandingPage from "../pages/landingPage";
import SecondPage from "../pages/secondPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayouts />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "pim",
        element: <SecondPage />,
      },
    ],
    errorElement: <>Go To Home</>,
  },
  {
    path: "*",
    element: <Navigate to="/" /> 
  },
]);
