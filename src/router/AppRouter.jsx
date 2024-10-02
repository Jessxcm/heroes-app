import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { LoginPage } from "../auth";
import { HeroesRoutes } from "../heroes/routes/HeroesRoutes";
import { childHeroesRoutes } from "../heroes/routes/ChildHeroesRoutes";
import { ErrorPage } from "../heroes";
import { PrivateRouter } from "./PrivateRouter";
import { PublicRouter } from "./PublicRouter";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <PublicRouter><LoginPage /></PublicRouter>,
  },
  {
    path: "/",
    element: <PrivateRouter><HeroesRoutes /></PrivateRouter>,
    errorElement: <ErrorPage />,
    children: childHeroesRoutes,
  },
]);

export const AppRouter = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
