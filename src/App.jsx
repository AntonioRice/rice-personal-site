import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import TechProfile from "./pages/TechProfile";
import Photography from "./pages/Photography";
import ErrorPage from "./pages/ErrorPage";

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
