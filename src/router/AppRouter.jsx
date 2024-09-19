import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { LoginPage } from "../auth";
import { HeroesRoutes } from "../heroes/routes/HeroesRoutes";
import { childHeroesRoutes } from "../heroes/routes/ChildHeroesRoutes";
import { ErrorPage } from "../heroes";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/",
    element: <HeroesRoutes />,
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
