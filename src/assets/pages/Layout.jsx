import {React, createContext, useState} from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../partials/NavBar";

export const LayoutContext = createContext();

const Layout = () => {
  const [currentUser, setCurrentUser] = useState(null)

  return (
    <>
    <LayoutContext.Provider value={{ currentUser, setCurrentUser }}>
      <NavBar />
      <Outlet />
    </LayoutContext.Provider>
    </>
  );
};

export default Layout;
