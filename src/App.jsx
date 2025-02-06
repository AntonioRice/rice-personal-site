import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Layout from "./components/Layout";
import AlbumDetails from "./pages/AlbumDetails";
import Home from "./pages/Home";
import Photography from "./pages/Photography";
import CV from "./pages/CV";
import ErrorPage from "./pages/ErrorPage";
import TagManager from "react-gtm-module";
// import GameOn from "./pages/GameOn";
import { ScrollProvider } from "./context/ScrollContext";

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
      { index: true, element: <Home /> },
      { path: "cv", element: <CV /> },
      { path: "photography", element: <Photography /> },
      { path: "album/:albumId", element: <AlbumDetails /> },
      // { path: "game-on", element: <GameOn /> },
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
