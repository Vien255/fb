import { createBrowserRouter } from "react-router-dom";
import { DetailPostPage } from "../pages/DetailPostPage";
import { DetailUserPage } from "../pages/DetailUserPage";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";
import { PrivateRoutes } from "./PrivateRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoutes>
        <HomePage />
      </PrivateRoutes>
    ),
  },
  {
    path: "/detail/:slug",
    element: (
      <PrivateRoutes>
        <DetailPostPage />
      </PrivateRoutes>
    ),
  },
  {
    path: "/user",
    element: (
      <PrivateRoutes>
        <DetailUserPage />
      </PrivateRoutes>
    ),
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
]);
