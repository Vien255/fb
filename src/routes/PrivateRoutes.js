import { Navigate } from "react-router-dom";

export const PrivateRoutes = ({ children }) => {
  const token = sessionStorage.getItem("JWTtoken");
  return token ? children : <Navigate to="/login" />;
};
