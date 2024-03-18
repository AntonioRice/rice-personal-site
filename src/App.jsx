import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import Layout from "./components/Layout";
import AlbumDetails from "./pages/AlbumDetails";
import Home from "./pages/Home";
import TechProfile from "./pages/TechProfile";
import Photography from "./pages/Photography";
import ErrorPage from "./pages/ErrorPage";
import ReactGA from "react-ga4";

const GOOGLE_ANALYTICS_TAG = import.meta.env.VITE_GOOGLE_ANALYTICS_TAG;

ReactGA.initialize(GOOGLE_ANALYTICS_TAG);

function App() {
  const root = ReactDOM.createRoot(document.getElementById("root"));
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

  root.render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  );
}

export default App;
