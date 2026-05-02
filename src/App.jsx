import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import TagManager from "react-gtm-module";
import { ScrollProvider } from "./context/ScrollContext";

const CV = lazy(() => import("./pages/CV"));
const Photography = lazy(() => import("./pages/Photography"));
const AlbumDetails = lazy(() => import("./pages/AlbumDetails"));

const VITE_GTM_ID = import.meta.env.VITE_GTM_ID;

if (VITE_GTM_ID) {
  TagManager.initialize({ gtmId: VITE_GTM_ID });
}

const withSuspense = (element) => (
  <Suspense fallback={null}>{element}</Suspense>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "cv", element: withSuspense(<CV />) },
      { path: "photography", element: withSuspense(<Photography />) },
      { path: "album/:albumId", element: withSuspense(<AlbumDetails />) },
    ],
  },
]);

function App() {
  return (
    <ScrollProvider>
      <RouterProvider router={router} />
    </ScrollProvider>
  );
}

export default App;
