import React from "react";
import {
  createBrowserRouter,
  Link,
  Outlet,
  useLoaderData,
} from "react-router-dom";

import Home from "../pages/home/home";
import About from "../pages/about/about.js";
import Page404 from "../pages/page404/page404.js";
import ProtectedPage from "../pages/protectedPage/protectedPage";
import { RequireAuth } from "../utils/function";
import { Request } from "../services/network";
import MainLayout from "../pages/mainLayout/mainLayout.js";
import RootLayouts from "../pages/layouts/RootLayouts";
import DashboardPage from "../pages/dashboard";
import PimPage from "../pages/pim";
// ... import other components as needed

const LazyComponent = React.lazy(() =>
  import("../pages/lazyComponent/lazyComponent")
);
// ... import other lazy components as needed



export const router = createBrowserRouter([
  // Sample of normal routes

  {
    path: "/",
    element: <RootLayouts/>,
    children: [
      {
        path: "/",
        element: <DashboardPage/>
      },
      {
        path: "pim",
        element: <PimPage/>
      }
    ]
  },

  {
    // when the URL matches this segment
    path: "/home",
    // it renders this element
    element: (
      <div>
        <Home />
        <Link to="about">About Us</Link>
      </div>
    ),
    // and renders this element in case something went wrong
    errorElement: <Page404 />,
  },
  {

    path:"/main",
    element: <MainLayout />
  },
  {

    path:"/main-2",
    element: <MainLayout />
  },
  // Sample of nested routes
  {
    path: "about",
    element: (
      <div>
        <About />
        {/* This Component will render the data from nested routes */}
        <Outlet />
      </div>
    ),

    // nested routes
    children: [
      {
        path: "lazy",
        //  Final path will be /about/lazy
        element: (
          <React.Suspense fallback={<p>Loading lazy chunk...</p>}>
            <LazyComponent />
          </React.Suspense>
        ),
      },
    ],
    errorElement: <Page404 />,
  },

  // Sample of protected routes for protected Pages
  {
    path: "protected",
    element: (
      <RequireAuth>
        <ProtectedPage />
      </RequireAuth>
    ),
    errorElement: <Page404 />,
  },

  // Sample of nested routes which fetches data before rendering
  {
    path: "fetch",
    element: <Outlet />,
    children: [
      // Use index key for Setting default content of parent route.
      // It Will replaced by other nested route's content
      {
        index: true,
        Component() {
          return <h1>index Route</h1>;
        },
      },

      //  Using dynamic routing
      {
        path: ":itemId",
        // with this data loaded before rendering
        loader: async ({ params }) => {
          return await Request.get(`products/${params.itemId}`);
        },
        Component() {
          // hook provided by React Router Dom library for getting the data of above loader key
          let data = useLoaderData();
          return (
            <>
              <h1>
                Name:- {data?.data?.title}
                <hr />
                Price:- {data?.data?.price}
              </h1>
              This Component will fetch the data according to the state of
              params in URL.
              <br />
              <Link to="/">Home</Link>
            </>
          );
        },
      },

      {
        path: "title",
        Component() {
          return <h1>title</h1>;
        },
      },
    ],
    errorElement: <Page404 />,
  },
]);
