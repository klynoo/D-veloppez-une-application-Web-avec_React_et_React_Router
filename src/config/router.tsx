import { createBrowserRouter } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import AccommodationList from "../components/AccomodationList copy";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/a-propos",
    element: <></>,
  },

  {
    path: "/:id",
    element: <AccommodationList />,
  },
  {
    path: "/*",
    element: <NotFound />,
  },
]);
