import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Layout from "./components/Layout";
import AlbumDetails from "./pages/AlbumDetails";
import Home from "./pages/Home";
import TechProfile from "./pages/TechProfile";
import Photography from "./pages/Photography";
import ErrorPage from "./pages/ErrorPage";
import ReactGA from "react-ga4";

const GOOGLE_ANALYTICS_TAG = import.meta.env.VITE_GOOGLE_ANALYTICS_TAG;

if (!GOOGLE_ANALYTICS_TAG) {
  console.log("GOOGLE_ANALYTICS_TAG environment variable is not defined");
} else {
  ReactGA.initialize(GOOGLE_ANALYTICS_TAG);
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "techprofile", element: <TechProfile /> },
      { path: "photography", element: <Photography /> },
      { path: "album/:albumId", element: <AlbumDetails /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
