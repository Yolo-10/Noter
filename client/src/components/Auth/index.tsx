import React from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "@/store";

const Auth = ({ children }: any) => {
  const userInfo = useAppSelector(state => state.user.userInfo)
  return <>
    {userInfo ? children : <Navigate to="/login"/>}
  </>;
};

export default Auth;