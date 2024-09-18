import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";



import { LoginPage } from "../../auth";
import { HeroesApp } from "../../HeroesApp";
import { DcPage, MarvelPage } from "../pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HeroesApp />,
    children: [
      {
        path: "/marvel",
        element: <MarvelPage />
      },
      {
        path: "/dc",
        element: <DcPage />
        
      },
      {
        path: "/login",
        element: <LoginPage />
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
