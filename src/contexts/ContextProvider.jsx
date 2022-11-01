import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [currentMode, setCurrentMode] = useState("Dark");
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [navbarVisible, setNavbarVisible] = useState(true);

    const toggleMode = (mode) =>{
        // console.log(mode)
        mode==='Light'? setCurrentMode("Dark"): setCurrentMode("Light");
    }

    const toggleSidebar = (isVisible) =>{
      setSidebarVisible(!isVisible);
    }

    const toggleNavbar = (isVisible)=> {
      setNavbarVisible(!isVisible);
    } 

  return (
    <StateContext.Provider
      value={{
        currentMode,
        toggleMode,
        sidebarVisible,
        toggleSidebar,
        navbarVisible, 
        toggleNavbar
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
