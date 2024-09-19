import { Navigate } from "react-router-dom";
import { DcPage, MarvelPage, SearchPage } from "../pages";
import { HeroPage } from "../pages/HeroPage";

export const childHeroesRoutes = [
    {
        path: "/marvel",
        element: <MarvelPage/>
    },
    {
        path: "/dc",
        element: <DcPage/>
    },
    {
        path: "/search",
        element: <SearchPage />
    },
    {
        path: "/hero",
        element: <HeroPage />
    },
    {
        path: "/",
        element: <Navigate to={"/marvel"}/>
      
    }
 
]

//V2
/*export const childHeroesRoutes = [
    {
        index: true,
        element: <MarvelPage/>
    },
    {
        path: "/marvel",
        element: <MarvelPage/>
    },
    {
        path: "/dc",
        element: <DcPage/>
    },
    {
        path: "/search",
        element: <SearchPage />
    },
    {
        path: "/hero",
        element: <HeroPage />
    },
 
]*/