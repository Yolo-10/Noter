import React, { lazy } from "react";
import { useRoutes } from "react-router-dom";

const NavWrapper = lazy(()=> import("@/components/NavWrapper"))
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
          element: <Profile />,
        },
        {
          path: "/setting",
          element: <Setting />,
        },
      ]
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);
};

export default RouterConfig;
