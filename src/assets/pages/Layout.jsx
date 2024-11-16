import {React, createContext, useState, useEffect} from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../partials/NavBar";
import customFetch from "../utils/customFetch";

export const LayoutContext = createContext();

import Footer from "../partials/Footer";
const Layout = () => {
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    const restoreUserSession = async () => {
      try {
        const { data: volunteerData } = await customFetch.get("/user/volunteer-current-user");
        if (volunteerData?.user) {
          setCurrentUser(volunteerData.user);
          return;
        }

        const { data: organizerData } = await customFetch.get("/user/organizer-current-user");
        if (organizerData?.user) {
          setCurrentUser(organizerData.user);
          return;
        }

        setCurrentUser(null);
      } catch (error) {
        console.error("Failed to restore user session:", error);
        setCurrentUser(null);
      }
    };

    restoreUserSession();
  }, []);

  return (
    <>
      <LayoutContext.Provider value={{ currentUser, setCurrentUser }}>
        <NavBar />
        <Outlet />
      </LayoutContext.Provider>
      <Footer />
    </>
  );
};

export default Layout;

