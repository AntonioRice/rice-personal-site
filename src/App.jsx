import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Layout from "./components/Layout";
import AlbumDetails from "./pages/AlbumDetails";
import Home from "./pages/Home";
import TechProfile from "./pages/TechProfile";
import Photography from "./pages/Photography";
import CV from "./pages/CV";
import ErrorPage from "./pages/ErrorPage";
import TagManager from "react-gtm-module";

const VITE_GTM_ID = import.meta.env.VITE_GTM_ID;

if (VITE_GTM_ID) {
  console.log("VITE_GTM_ID environment variable is defined");
  TagManager.initialize({ gtmId: VITE_GTM_ID });
} else {
  console.log("VITE_GTM_ID environment variable is not defined");
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "cv", element: <CV /> },
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
