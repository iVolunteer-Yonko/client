import {React, createContext, useState} from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../partials/NavBar";
<<<<<<< Updated upstream

export const LayoutContext = createContext();

=======
import Footer from "../partials/Footer";
>>>>>>> Stashed changes
const Layout = () => {
  const [currentUser, setCurrentUser] = useState(null)

  return (
    <>
    <LayoutContext.Provider value={{ currentUser, setCurrentUser }}>
      <NavBar />
      <Outlet />
<<<<<<< Updated upstream
    </LayoutContext.Provider>
=======
      <Footer />
>>>>>>> Stashed changes
    </>
  );
};

export default Layout;
