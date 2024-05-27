import { useLogin } from "@/hooks/useLogin";
import { Navigate, Outlet, useLocation } from "react-router-dom";

export function PrivateRoute() {
  const location = useLocation();
  const {isAuthenticated} = useLogin()

  console.log(isAuthenticated);
  

  if (isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return <Outlet />;
}
