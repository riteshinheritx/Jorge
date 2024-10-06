import React from "react";
import {createBrowserRouter, Link, Navigate} from "react-router-dom";
import RootLayouts from "../pages/layouts/RootLayouts";
import LandingPage from "../pages/LandingPage";
import PimPage from "../pages/PimPage";

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
        element: <PimPage />,
      },
    ],
    errorElement: <Link to={"/"}>Go To Home</Link>,
  },
  {
    path: "*",
    element: <Navigate to="/" /> 
  },
]);
