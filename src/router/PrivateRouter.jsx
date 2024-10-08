import { useContext } from "react"
import { AuthContext } from "../auth/context"
import { Navigate, useLocation } from "react-router-dom";

export const PrivateRouter = ( {children} ) => {
  const { logged } = useContext(AuthContext);

  const { pathname, search} = useLocation();

  const lastPath = pathname + search;
  localStorage.setItem('lastPath', lastPath);

  console.log('re-render');

  return (logged)
  ? children
  : <Navigate to="/login" />
}
