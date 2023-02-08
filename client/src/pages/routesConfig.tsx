import React, { lazy } from "react";
import { useRoutes } from "react-router-dom";

const NavWrapper = lazy(() => import("@/components/NavWrapper"))
const Auth = lazy(() => import("@/components/Auth"))
const Home = lazy(() => import("@/pages/home"));
const My = lazy(() => import("@/pages/my"));
const Profile = lazy(() => import("@/pages/profile"));
const Setting = lazy(() => import("@/pages/setting"));
const Login = lazy(() => import("@/pages/login"));

const RouterConfig: React.FC = () => {
  return useRoutes([
    {
      path: "/",
      element: <NavWrapper></NavWrapper>,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/my",
          element: <My />,
        },
        {
          path: "/profile",
          element: <Auth><Profile /></Auth>,
        },
        {
          path: "/setting",
          element: <Auth><Setting /></Auth>,
        },
      ]
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "*",
      element: <div>Not Found</div>,
    },
  ]);
};

export default RouterConfig;
