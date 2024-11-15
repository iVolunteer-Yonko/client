import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../partials/NavBar";

const Layout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default Layout;
