import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Layout from "./components/Layout";
import AlbumDetails from "./pages/AlbumDetails";
import TechProfile from "./pages/TechProfile";
import Photography from "./pages/Photography";
import CV from "./pages/CV";
import ErrorPage from "./pages/ErrorPage";
import TagManager from "react-gtm-module";

const VITE_GTM_ID = import.meta.env.VITE_GTM_ID;

if (VITE_GTM_ID) {
  TagManager.initialize({ gtmId: VITE_GTM_ID });
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <TechProfile /> },
      { path: "cv", element: <CV /> },
      { path: "photographer", element: <Photography /> },
      { path: "album/:albumId", element: <AlbumDetails /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
