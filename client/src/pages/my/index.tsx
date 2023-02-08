import React from "react";
import { Outlet } from "react-router-dom";

const My: React.FC = () => {
  return (
    <div>
      my...
      <Outlet/>
    </div>
  );
};

export default My;
