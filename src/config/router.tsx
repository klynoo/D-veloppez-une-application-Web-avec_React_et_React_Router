import { createBrowserRouter } from "react-router-dom";

import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import AccommodationDetail from "../components/AccomodationDetail";
import APropos from "../pages/APropos";
import MainLayout from "../layouts/MainLayout";

export const router = createBrowserRouter([
  {
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/a-propos",
        element: <APropos />,
      },
      {
        path: "/:id",
        element: <AccommodationDetail />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
