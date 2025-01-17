import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navigation from "../Navigation/Navigation";

const RootLayout = () => {
  return (
    <>
      <Navigation />
        <Outlet/>
    </>
  );
};

export default RootLayout;
