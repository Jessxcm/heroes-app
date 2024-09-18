import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { MarvelPage } from "../pages/MarvelPage";
import { DcPage } from "../pages/DcPage";
import { Loginpage } from "../../auth/pages/Loginpage";
import { HeroesApp } from "../../HeroesApp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HeroesApp />,
    children: [
      {
        path: "/marvel",
        element: <MarvelPage />,
      },
      {
        path: "/dc",
        element: <DcPage />,
      },
      {
        path: "/login",
        element: <Loginpage />,
      },
      {
        path: "/",
        element: <Navigate to={"/marvel"} replace />,
      },
    ],
  },
]);

export const AppRouter = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
